---
layout: notes
title: Godot Intro
return: ./labs
label: Labs
---

This lab covers making Global, PlayerContoller and CameraController scripts, while covering programming basics.

## 1. Adding scripts to Godot
- Download the [Assets_MMP270](./Assets_MMP270.zip) folder
- Create a new Godot Project or use an existing one

## 2. Create the Global.gd script
- Go to the Script view
- Create a new Script called Global.gd
- Add Global.gd to Project Settings > AutoLoad
- Take a look at the documentation by right-clicking on `Node` and click `Lookup Symbol`
- Add a comment using `#`
- Add some variables like `item_count` and `player_lives`

## 3. Open the LabScenes/1-0_Intro
- This has some platforms, a Player and a Camera2D
- Remove the PlayerController script from the Player, we're going to write this from scratch

## 4. Add movement to Player
- Create a new script called PlayerController.gd
- Add 4 directional movement first
- Then add gravity
- Set scene gravity in Project Settings > General > Physics > 2D > Default Gravity
- Update the player animations

## 5. Add a CameraController script
- Create a new Script called CameraController.gd
- The camera can track the player or follow behind

## Resources
- [Godot API](https://docs.godotengine.org/en/stable/classes/index.html){:target="_blank"}

## Full Global.gd script
```
extends Node

# save values that need to exist for multiple levels

var total_lives = 3 # default lives to start with
var player_lives = 3 # counts lives 
var item_count = 0 # counts generic items, can add more, could be specific like apple_count

```

## Full PlayerController.gd script
```
extends KinematicBody2D

# physics settings for player
export var speed = 100
export var use_gravity = false
export var gravity = 800
export var jump_force = 400
export var wall_jump_enabled = false

# "private" vars 
var is_alive = true # to allow scene to run without character updating
var is_jumping = false # track if jumping for landing sound
var velocity : Vector2 = Vector2()
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
	if not use_gravity:
		velocity.y = 0
	
	# capture user input
	if Input.is_action_pressed("move_left"):
		velocity.x -= speed
	if Input.is_action_pressed("move_right"):
		velocity.x += speed
	if Input.is_action_pressed("move_up") and not use_gravity:
		velocity.y -= speed
	if Input.is_action_pressed("move_down") and not use_gravity:
		velocity.y += speed

	# apply player velocity
	velocity = move_and_slide(velocity, Vector2.UP)
	# experiment with other movement functions 
	
	# apply gravity to player
	if use_gravity:
		velocity.y += gravity * delta
	
	# detect landing before jump starts
	# remove comments to play sfx
	# if is_jumping and (is_on_floor() or is_on_wall()):
	#	is_jumping = false
	#	$LandSound.play()
	
	# jump input
	var can_jump = is_on_floor() or (wall_jump_enabled and is_on_wall())
	if Input.is_action_just_pressed("jump") and can_jump:
		velocity.y -= jump_force
		is_jumping = true
		$AnimatedSprite.frame = 0
		
		# remove comments to play sfx
		# $JumpSound.play()
	
	# update animation
	
	if use_gravity and not is_on_floor():
		$AnimatedSprite.play("Jump")
	elif (use_gravity and abs(velocity.x) > 0.25) or (!use_gravity and abs(velocity.x) + abs(velocity.y) > 0.1):
		$AnimatedSprite.play("Walk")
	else:
		$AnimatedSprite.play("Idle")

#	if use_gravity:
#		if not is_on_floor():
#			$AnimatedSprite.play("Jump")
#		elif abs(velocity.x) > 0.25:
#			$AnimatedSprite.play("Walk")
#		else:
#			$AnimatedSprite.play("Idle")
#	else:
#		if abs(velocity.x) + abs(velocity.y) > 0.25:
#			$AnimatedSprite.play("Walk")
#		else:
#			$AnimatedSprite.play("Idle")
		
	# change sprite direction
	if velocity.x < -0.1:
		$AnimatedSprite.flip_h = true
	if velocity.x > 0.1:
		$AnimatedSprite.flip_h = false
		
	# if player falls below screen
	if use_gravity and position.y > get_viewport().size.y * 2 and is_alive:
		is_alive = false
		emit_signal("player_hit", is_alive) # player is dead -- change to remove life

```

## Full CameraController.gd script

```
extends Camera2D

# get reference to player to track/follow position
export (NodePath) var player_path
onready var player = get_node(player_path)

# track camera copies the player position as soon as player moves
export var track_horizontal = true
export var track_vertical = true

# follow allows player to move until outside of a certain area
# more typical for RPG game
export var follow_horizontal = false
export var follow_vertical = false

# how far from camera before it moves
# should be about 1/4 of window dimension, or less, can't be over 1/2
export var follow_distance = Vector2(100, 100)

# speed to catch up to player
# can't be faster than player
export var follow_speed = 100 
	
func _process(delta):

	if follow_horizontal:
		# if the player is in the right or left quarter of screen, 
		# start moving to center player
		var d = position.x - player.position.x
		if abs(d) > follow_distance.x:
			position.x -= delta * follow_speed * sign(d)
	
	# follow horizontal ignores track setting
	elif track_horizontal:
		position.x = player.position.x
	
	# same thing for vertical
	if follow_vertical:
		var d = position.y - player.position.y
		if abs(d) > follow_distance.y:
			position.y -= delta * follow_speed * sign(d)
			
	elif track_vertical:
		position.y = player.position.y


```
