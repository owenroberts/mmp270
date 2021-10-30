---
layout: notes
title: Obstacles and Collisions
return: ./labs
label: Labs
---

This lab covers adding obstacles and collions in Godot.  It uses graphics from the [Obstacles and Enemies](2-4_Obstacles_and_Enemies) lab.

## 1. Setting up the Godot project
- Use a game that you're currently working on, or use a copy of the [Developer Default](./Developer_Default.zip) project
- Download the [Assets](./Assets.zip) folder for any scenes or art you may need

## 2. Add collision layers and masks
- Setup default collision layers in masks in `Project > Project Settings > Layer Names > 2d Physics`
- You may not need all of the same layers but the default layers include:
	- Player
	- Platform
	- Item
	- ObstacleBody
	- ObstacleHit
	- ObstacleAttack
	- ObstacleDetect
	- Checkpoints
	- Portals


## 3. Add a static obstacle
- The first obstacle will not be moving
- Add a sprite and collider
- Add `ObstacleSimple.gd` script
- Modify `PlayerController.gd` for hitting obstacle

## 4. Moving obstacle
- The second obstacle, or enemy is moving
- Add `ObstacleMoving.gd` script
- Add four colliders
	- Enemy body that interacts with platforms
	- Hit area for player to kill enemy
	- Attack area for enemy to attack player
	- Detect area to activate enemy
- Add raycaster for platform detection

## 5. Documentation
- Post screen shots or video on Open Lab

## Updates to PlayerController.gd script
```
func enemy_collision():
	is_alive = false # player movement suspended before determining state
	$AnimatedSprite.play('Hit')


# after hit animation, test if player is still alive
func _on_AnimatedSprite_animation_finished():
	if $AnimatedSprite.animation == 'Hit':
		is_alive = true
		emit_signal("player_hit", is_alive) # don't know if player should die yet
```

## Full ObstacleSimple.gd script
```
extends Area2D

export var frame_number = 0 # default frame, change frame in sprite

func _ready():
	$Sprite.frame = frame_number

func _on_Obstacle_body_entered(body):
	body.enemy_collision() # call enemy collision func in player
	
	# remove comment to play sfx
	# $HitSound.play()
```

## Full ObstactleMoving.gd script
```
extends KinematicBody2D

# editor settings
export var is_moving = true
export var speed = 50
export var stay_on_platform = true
export var direction = -1 # 1 for right, -1 for left
export var activate_on_player_detect = false # begins moving when player is within area

# 'private' vars
var velocity = Vector2()
var is_alive = true
var horizontal_move = true
var temp_speed = speed
var gravity = 100 # export this?

func _ready():
	$AnimatedSprite.flip_h = direction == 1 # match animation to direction
	
	# move floor check in front of collider
	$PlatformCheck.position.x = direction * $Collider.shape.get_radius()
	
	# stop movement if waiting for player detect
	if activate_on_player_detect:
		horizontal_move = false

func _physics_process(delta):
	if is_moving and is_alive:
		movement_update(delta)

func movement_update(delta):
	if stay_on_platform:
		if is_on_wall() or not $PlatformCheck.is_colliding():
			direction = direction * -1 # switch direction
			$AnimatedSprite.flip_h = direction == 1 # match animation to direction
			$PlatformCheck.position.x = direction * $Collider.shape.get_radius()
			
	velocity.y += gravity
	
	if is_on_floor() and horizontal_move:
		velocity.x = speed * direction
	
	velocity = move_and_slide(velocity, Vector2.UP)
	
	if abs(velocity.x) > 0.1:
		$AnimatedSprite.play('Walk')
	else:
		$AnimatedSprite.play('Idle')

# collisions -- assumes layer masks are set up

# hit by player or projectile
func hit():
	is_alive = false
	$AnimatedSprite.play('Dies')
	
	# remove comment to play sfx
	$DiesSound.play()

# if player jump on head or another part, hits with projectile
func _on_Hit_body_entered(_body):
	if is_alive:
		hit()

# area that harms/kills player
func _on_Attack_body_entered(body):
	if is_alive and body.is_alive:
		$AnimatedSprite.play('Attack')
		is_moving = false # stop moving to attack player
		body.enemy_collision() # call enemy collision func in player
		
		# remove comment to play sfx
		$HitSound.play()

# area that detect player is nearby
func _on_Detect_body_entered(body):
	if is_alive:
		if activate_on_player_detect:
			horizontal_move = true

func _on_AnimatedSprite_animation_finished():
	
	# if dead, remove object
	if not is_alive:
		queue_free()
		
	# resume moving after attack
	if $AnimatedSprite.animation == 'Attack':
		is_moving = true
```