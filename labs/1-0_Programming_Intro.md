---
layout: notes
title: Programming Intro
return: ./labs
label: Labs
---

This lab covers making Global and PlayerContoller scripts, while covering programming basics.

## 1. Adding scripts to Godot
- Download the [Assets_MMP270](./Assets_MMP270.zip) folder
- Create a new Godot Project or use an existing one
- Add folders for Scripts, Scenes, Sprites and TileSets
- For this lab we need the character animation sprites, the tree for scenery, the Player scene and 1-0_Programming_Intro scenes

## 2. Create the Global.gd script
- Go to the Script view
- Create a new Script called Global.gd
- Add Global.gd to Project Settings > AutoLoad

## 3. Open 1-0_Programming_Intro
- This default scene has a player and some scenery
- Remove the PlayerController script from the Player, we're going to write this from scratch

## 4. Add movement to Player
- Create a new script called PlayerController.gd
- Add variables for movement
- Update movement
- Update animations to follow movement

## Bonus
- Add new animations for walking up and down

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

## Full PlayerController.gd script
```
extends KinematicBody2D

# controls player movement

# physics settings 
export var speed = 100

# "private" vars
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
		velocity.x += speed # += is x = x + speed
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

	if velocity.x > 0.1:
		$AnimatedSprite.flip_h = false
	
	if velocity.x < -0.1:
		$AnimatedSprite.flip_h = true

```