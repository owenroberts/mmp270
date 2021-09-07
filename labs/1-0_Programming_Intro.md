---
layout: notes
title: Programming Intro
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

# comments
# anything after # is ignored by godot
# use it to make notes for yourself, other developers

# Global saves values that are tracked throughout all game scenes

var total_lives = 3 # how many lives player starts with
var player_lives = total_lives # use this to keep track of player lives
var item_count = 0 # count generic items, can add more, use specific names like apple_count

```

## Full PlayerController.gd script
```
extends KinematicBody2D

# controls player movement

# physics settings 
export var speed = 100
export var use_gravity = true # default
export var gravity = 800
export var jump_force = 400
export var wall_jump_enabled = false

# "private" vars
var is_alive = true
var velocity = Vector2()

func _physics_process(delta):
	if is_alive:
		player_update(delta)
	
func player_update(delta):
	# assume player not moving
	velocity.x = 0
	
	if not use_gravity:
		velocity.y = 0
	
	if Input.is_action_pressed("move_right"):
		velocity.x += speed # += is x = x + speed
	if Input.is_action_pressed("move_left"):
		velocity.x -= speed
	if Input.is_action_pressed("move_up") and not use_gravity:
		velocity.y -= speed
	if Input.is_action_pressed("move_down") and not use_gravity:
		velocity.y += speed
	
	velocity = move_and_slide(velocity, Vector2.UP)
	
	if use_gravity:
		velocity.y += gravity * delta
	
	var can_jump = is_on_floor() or (wall_jump_enabled and is_on_wall())
	if Input.is_action_just_pressed("jump") and can_jump:
		velocity.y -= jump_force
	
	# falls below the window
	if use_gravity and position.y > get_viewport().size.y * 2 and is_alive:
		# place holder
		position = Vector2(0, 0)
		
	# set animation
	if use_gravity:
		if not is_on_floor():
			$AnimatedSprite.play("Jump")
		elif abs(velocity.x) > 0.25: # else if
			$AnimatedSprite.play("Walk")
		else:
			$AnimatedSprite.play("Idle")
	else:
		if abs(velocity.x) + abs(velocity.y) > 0.25:
			$AnimatedSprite.play("Walk")
		else:
			$AnimatedSprite.play("Idle")

	if velocity.x > 0.1:
		$AnimatedSprite.flip_h = false
	
	if velocity.x < -0.1:
		$AnimatedSprite.flip_h = true

```

## Full CameraController.gd script

```
extends Camera2D

# track or follow player 

export (NodePath) var player_path
onready var player = get_node(player_path)

# track player, camera moves with player
export var track_horizontal = true # default
export var track_vertical = true

# follow player, allow player to move within range before camera moves
export var follow_horizontal = false
export var follow_vertical = false

# how far player can move before camera follows
# can't be more that 1/2 the window dimensions
export var follow_distance = Vector2(100, 100)

# how fast the camera moves
# can't be faster than player
export var follow_speed = 100

func _process(delta):
	
	if follow_horizontal:
		# get distance of player from camera
		var distance = position.x - player.position.x
		if abs(distance) > follow_distance.x:
			position.x -= delta * follow_speed * sign(distance)
	
	elif track_horizontal:
		position.x = player.position.x
	
	if follow_vertical:
		var distance = position.y - player.position.y
		if abs(distance) > follow_distance.y:
			position.y -= delta * follow_speed * sign(distance)
			
	elif track_vertical:
		position.y = player.position.y

```
