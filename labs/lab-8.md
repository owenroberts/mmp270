---
layout: notes
title: Godot Lab 8
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/QriY5gF8TT0?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers adding level design concepts to design the first level of the game, a win game ending and win game UI.

Optional: [Download the lab files](lab-8.zip)

The video covers creating all components and scripts from scratch, but these files can also be used.

## 1. Create art/graphics assets for Win Game and End Level
- Create a graphic for when the player wins the game and download as `.png`
- Create a graphic/animation for the end of the level and download *spritesheet* as `.png`

## 2. Update the start menu scene
- Add new code to StartMenu.gd to open a scene (replacing hard coded MainScene.tscn)
- New script is included in download
- Final code

```
extends Control

export(String, FILE, "*.tscn") var load_level_path

func _on_StartButton_pressed():
	get_tree().change_scene(load_level_path)

func _on_QuitButton_pressed():
	get_tree().quit()

func _on_InstructionsButton_pressed():
	get_tree().change_scene("res://Scenes/Instructions.tscn")

func _on_PlayAgainButton_pressed():
	get_tree().change_scene(load_level_path)
```

## 3. Create Level 1
- Duplicate MainScene.tscn or create new scene and name it `Level1.tscn`
- Design level 1!
- Make sure to include
	- Introduction of mechanics (jumping, platforms, movement)
	- Rewards
	- Obstacles
	- Add other techniques/principles like branching, risk vs reward, foreshadowing, bottle necking, gating, signposting, etc.

## 4. Add level end scene
- Make a new scene for the level ending (will be turned into a portal later)
- Add the script for the level ending
	- I made a mistake in the video by adding the new `LevelEndPortal.gd` script into the `Scenes` folder, I got over how to fix it but you can avoid this by clicking on the folder for the location when creating the script
- Attach script
- Script code:

```
extends Node2D

onready var WinGameUI = $'../UI/WinGame'
onready var sprite = $AnimatedSprite

func _ready():
	WinGameUI.visible = false

func _on_EndLevel_body_entered(body):
	if body.name == 'Player':
		WinGameUI.visible = true
		sprite.play('End')
```

## 5. Make WinGame UI
- Duplicate the Gameover scene or create a new scene with a graphic for winning the game and buttons to play again or start over

## 6. Add the WinGame UI and EndLevel 
- In `Level1.tscn` use the link button to add the new scenes
- The WinGame UI shouldn't need to be moved anywhere
- Move the EndLevel to the end of the level or wherever is appropriate

Next week we will export the new game with a full level and use it to do some user testing.

