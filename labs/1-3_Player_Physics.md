---
layout: notes
title: Player Physics
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/VI1tkbbQt-E?rel=0" frameborder="0" allowfullscreen></iframe> -->

Add platformer physics to the PlayerController script started in the [Programming Intro](1-0_Programming_Intro).

## 1. Setting up the Godot Project
- Start with the project created in the previous lab, or Download the [Developer Default](./Developer_Default.zip) folder
- Download the [Assets](./Assets.zip) folder if necessary
- Save the previous `PlayerController.gd` script as `PlayerSimple.gd`
- Continue editing `PlayerController.gd`

## 2. Add Physics scripting
- Add variables for gravity and jumping force
- Update the physics and animations for the player
- Add a game over condition for the player falling below a platform
- Add function for when the player dies

## 3. Connect to the SceneManager
- Add a signal to connect the scene manager when the Player falls below the game window

## 4. Add one of the following
- A double jump
- A "run" mode that makes the character move faster

## 5. Documentation
- Add screen shots or video on Open Lab


## Full PlayerController.gd script
```
extends KinematicBody2D

# physics settings for player
export var speed = 100
export var gravity = 800
export var jump_force = 400
export var wall_jump_enabled = false

# "private" vars 
var is_alive = true # to allow scene to run without character updating
var velocity : Vector2 = Vector2()
var is_jumping = false # track if jumping for landing sound

signal player_hit # signal if player is hit by obstacle

func _ready():
	if not is_on_floor():
		is_jumping = true

# this function will run every time the game engine updates physics
func _physics_process(delta):
	if is_alive:
		player_update(delta)

func player_update(delta):
	velocity.x = 0 # start by assuming player is not moving
	
	# capture user input
	if Input.is_action_pressed("move_left"):
		velocity.x -= speed
	if Input.is_action_pressed("move_right"):
		velocity.x += speed

	# apply player velocity
	velocity = move_and_slide(velocity, Vector2.UP)
	
	# apply gravity to player
	velocity.y += gravity * delta
	
	# detect landing before jump starts
	# remove comments to play sfx
	# if is_jumping and (is_on_floor() or is_on_wall()):
		# is_jumping = false
		# $LandSound.play()
	
	# jump input
	var can_jump = is_on_floor() or (wall_jump_enabled and is_on_wall())
	if Input.is_action_just_pressed("jump") and can_jump:
		velocity.y -= jump_force
		is_jumping = true
		$AnimatedSprite.frame = 0
		
		# remove comments to play sfx
		# $JumpSound.play()
	
	# update animation
	
	if not is_on_floor():
		$AnimatedSprite.play("Jump")
	elif abs(velocity.x) > 1:
		$AnimatedSprite.play("Walk")
	else:
		$AnimatedSprite.play("Idle")

	# change sprite direction
	if velocity.x < -1:
		$AnimatedSprite.flip_h = true
	if velocity.x > 1:
		$AnimatedSprite.flip_h = false
		
	# if player falls below screen
	if is_alive and position.y > get_viewport().size.y * 2:
		is_alive = false
		emit_signal("player_hit", is_alive) # player is dead -- change to remove life

# called by scene manager if player out of lives
func dies():
	is_alive = false
	$AnimatedSprite.play('Dies')
	
	# remove comment to play sfx
	# $DiesSound.play()
```