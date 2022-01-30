---
layout: notes
title: Programming Intro
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/go0W1zRwJlw?rel=0" frameborder="0" allowfullscreen></iframe> -->

This lab covers making Global and PlayerContollerSimple scripts, while covering programming basics.

## 1. Adding scripts to Godot
- Download the [Assets](./270_Assets.zip) folder
- Create a new Godot Project or use the [Default Project Template](./270_Template.zip)
- Add folders for Scripts, Scenes, Sprites and TileSets

## 2. Create the Global.gd script
- Go to the Script view
- Create a new Script called Global.gd
- Add Global.gd to Project Settings > AutoLoad

## 3. Add player and scenery to the default scene
- Use the Scene from the [Godot Intro](./0-2_Godot_Intro) or create a new one
- Open `DefaultScene` and add the Player and Camera
- Add some scenery for the player to walk around in

## 4. Add movement to Player
- Create a new script called PlayerController.gd
- Add variables for movement
- Update movement
- Update animations to follow movement

## 5. Add one of the following to the script
- Add new animations for up and down movement
- Extra challenge: Add two players with different controls for local two player setup

## 6. Documentation
- Add screen shots or video on Open Lab

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
var player_lives = 3 # use this to keep track of player lives
var item_count = 0 # count generic items, can add more, use specific names like apple_count

```

## Full PlayerControllerSimple.gd script
```
extends KinematicBody2D

# controls player movement

# physics settings 
export var speed = 100

# member vars
var is_alive = true
var velocity = Vector2()

func _physics_process(delta):
	if is_alive:
		player_update(delta)
	
func player_update(delta):
	# assume player not moving
	velocity.x = 0
	velocity.y = 0
	
	if Input.is_action_pressed("move_right"):
		# += is short hand for  x = x + speed
		velocity.x += speed 

	if Input.is_action_pressed("move_left"):
		velocity.x -= speed

	if Input.is_action_pressed("move_up"):
		velocity.y -= speed

	if Input.is_action_pressed("move_down"):
		velocity.y += speed
	
	velocity = move_and_slide(velocity, Vector2.UP)
		
	# set animation
	if velocity.length_squared() > 1:
		$AnimatedSprite.play("Walk")
	else:
		$AnimatedSprite.play("Idle")

	if velocity.x > 1:
		$AnimatedSprite.flip_h = false
	
	if velocity.x < -1:
		$AnimatedSprite.flip_h = true

```