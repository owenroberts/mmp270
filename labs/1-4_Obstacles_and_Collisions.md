---
layout: notes
title: Obstacles and Collisions
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/BWq6JFKtbUk?rel=0" frameborder="0" allowfullscreen></iframe> -->


Add obstacles and collions in Godot using graphics from the [Obstacles and Enemies](2-4_Obstacles_and_Enemies) lab.

## 1. Setting up the Godot project
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if you need any assets

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

## 3. Add a static obstacle
- The first obstacle will not be moving
- Add a sprite and collider
- Add `ObstacleSimple.gd` script
- Modify `PlayerController.gd` for hitting obstacle


## 4. Add a second obstacle scene
- Make something unique about this obstacle, for example it could deal more damage to the player, or disappear if the player runs into it

## 5. Documentation
- Post screen shots or video on Open Lab


## Updates to PlayerController.gd script
```
func obstacle_collision():
	is_alive = false # player movement suspended before determining state
	$AnimatedSprite.play('Hit')


# after hit animation, test if player is still alive
func _on_AnimatedSprite_animation_finished():
	if $AnimatedSprite.animation == 'Hit':
		is_alive = true
		emit_signal("player_hit", is_alive) # don't know if player should die yet
```

## Updates to SceneManager.gd script
```
func _on_player_hit(is_alive):
	
	if is_alive and Global.player_lives > 0:
		Global.player_lives = Global.player_lives - 1
		
	if not is_alive or Global.player_lives <= 0:
		player.dies()
```

## Full ObstacleSimple.gd script
```
extends Area2D

# choose frame from sprite sheet
export var frame_number = 0 

func _ready():
	$Sprite.frame = frame_number

func _on_Obstacle_body_entered(body):
	body.enemy_collision() # call enemy collision func in player
	$HitSound.play()
```

