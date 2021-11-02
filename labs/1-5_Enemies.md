---
layout: notes
title: Enemies
return: ./labs
label: Labs
---

This lab covers adding moving enemies in Godot, continuing from the previous lab [Obstacles and Collisions](1-4_Obstacles_and_Collisions).  It uses graphics from the [Obstacles and Enemies](2-4_Obstacles_and_Enemies) lab.

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

## 3. Moving obstacle
- The second obstacle, or enemy is moving
- Add `ObstacleMoving.gd` script
- Add four colliders
	- Enemy body that interacts with platforms
	- Hit area for player to kill enemy
	- Attack area for enemy to attack player
	- Detect area to activate enemy
- Add raycaster for platform detection

## 4. Documentation
- Post screen shots or video on Open Lab


## Full ObstactleMoving.gd script
```
extends KinematicBody2D

# editor settings
export var is_moving = true
export var speed = 50
export var direction = -1 # default -1 is left, 1 right
export var stay_on_platform = true
export var detect_on_player = false

# internal variables
var velocity = Vector2()
var is_alive = true
var gravity = 800

func _ready():
	# set sprite direction
	$AnimatedSprite.flip_h = direction == 1
	
	# move our raycast in front of collider
	$PlatformCheck.position.x = direction * $Collider.shape.get_radius()
	
	# obstacles wait to move on player detection
	if detect_on_player:
		is_moving = false

func _physics_process(delta):
	if is_alive and is_moving:
		movement_update(delta)
		
func movement_update(delta):
	# check if snake is falling off platform
	if stay_on_platform:
		if not $PlatformCheck.is_colliding() or is_on_wall():
			direction = direction * -1
			$AnimatedSprite.flip_h = direction == 1
			$PlatformCheck.position.x = direction * $Collider.shape.get_radius()
	
	# apply gravity
	velocity.y += gravity * delta
	
	if is_on_floor():
		velocity.x = speed * direction
	
	velocity = move_and_slide(velocity, Vector2.UP)
	
	# update sprite
	if abs(velocity.x) > 1:
		$AnimatedSprite.play('Walk')
	else:
		$AnimatedSprite.play('Idle')

# snake hit by player or projectile
func _on_Hit_body_entered(body):
	if is_alive:
		hit()

func hit():
	is_alive = false
	$AnimatedSprite.play('Dies')
	$DiesSound.play()

# after hit or dies
func _on_AnimatedSprite_animation_finished():
	if not is_alive:
		queue_free()
	
	if $AnimatedSprite.animation == 'Attack':
		is_moving = true

# when player enters attack aera
func _on_Attack_body_entered(body):
	if is_alive and body.is_alive:
		$AnimatedSprite.play('Attack')
		is_moving = false
		body.obstacle_collision()
		$HitSound.play()

# when player enters detection area
func _on_Detect_body_entered(body):
	if is_alive and detect_on_player:
		is_moving = true

```