---
layout: notes
title: Scene Manager
return: ./labs
label: Labs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/30I1BoK4UJ8?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers adding a simple SceneManager script to a Godot scene and the NodePath and Signal concepts in Godot.

## 1. Setting up the Godot Project
- Start with the project created in the previous lab, or Download the [Developer Default](./Developer_Default.zip) folder
- Download the folder if necessary
- Add the `PlayerSimple.gd` from [Assets](./Assets.zip) or use the one from [Programming Intro](1-0_Programming_Intro)
- Use the DefaultSimple scene or a new scene and add a SceneManager node as the first node in the scene hierarchy

## 2. Create SceneManager.gd script
- This script is used to communicate between objects and events in the scene
- Add a signal to the player to trigger game over

## 3. Documentation
- Add screen shots or video on Open Lab

## Full SceneManager.gd script
```
extends Node

export (NodePath) var player_path
onready var player = get_node(player_path)

export (NodePath) var game_over_path
onready var game_over_ui = get_node(game_over_path)

_ready():
	game_over_ui.visible = false

func game_over():
	game_over_ui.visible = true
	player.dies()

func _on_player_hit(is_alive):
	if not is_alive:
		game_over()

```