---
layout: notes
title: Scene Manager
return: ./labs
label: Labs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/30I1BoK4UJ8?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers adding a simple SceneManager script to a Godot scene and the NodePath and Signal concepts in Godot.

## 1. Setting up the Godot Project
- Start with the project created in the previous lab, or Download the [Default Project Template](./270_Template.zip) folder
- Continue working with your PlayerController script from The Programming Intro lab or add the `PlayerSimple.gd` from [Assets](./270_Assets.zip) if needed
- Use the DefaultSimple scene or a new scene and add a SceneManager node as the first node in the scene hierarchy

## 2. Create SceneManager.gd script
- This script is used to communicate between objects and events in the scene
- Add a signal to the player to trigger game over

## 3. Documentation
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