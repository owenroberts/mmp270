---
layout: notes
title: Scene Manager
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/30I1BoK4UJ8?rel=0" frameborder="0" allowfullscreen></iframe> -->

Add a SceneManager script to a Godot that communicates between the components of a scene.

## 1. Setting up the Godot Project
- Start with the project created in the previous lab, or Download the [Default Project Template](./270_BlankTemplate.zip) folder
- Continue working with your PlayerController script from The Programming Intro lab or add the `PlayerSimple.gd` from [Assets](./270_BlankAssets.zip) if needed
- Use the DefaultSimple scene or a new scene and add a SceneManager node as the first node in the scene hierarchy

## 2. Create SceneManager.gd script
- This script is used to communicate between objects and events in the scene
- Get a reference to the player

## 4. Update the PlayerController
- Add an "Enemy" Area2D to interact with the player
- Add a signal to the PlayerController to communicate with the SceneManager

## 5. Log the player signal
- Use the Godot Debug Logger to print statements on signal events

## 6. Add an Item
- Add an "Item" Area2D to update the Global item_count value

## 7. Add another example Area
- Make another area for the player to interact with, it could be a key, a door, an NPC character or something else that would occur in a game
- Change the debug print statement to show the player is interacting with something new

## 8. Documentation
- Add screen shots or video on Open Lab

## Full SceneManager.gd script
```
extends Node2D

# communicate between scene components

export (NodePath) var player_path
onready var player = get_node(player_path)

func _on_player_hit():
	print('player hit!', Global.player_lives)
	if Global.player_lives > 1:
		Global.player_lives -= 1
	else:
		print('game over!')
		player.dies()


func _on_item_collected():
	Global.item_count += 1
	print("you have ", Global.item_count, " items")

```

## Added to PlayerController
```
# member variables
signal player_hit

func _on_Enemy_body_entered(body):
	emit_signal("player_hit")

func dies():
	is_alive = false
	$AnimatedSprite.play('Dies')
```

## ItemManager.gd
```
extends Area2D

signal item_collected


func _on_Item_body_entered(body):
	emit_signal("item_collected")

```