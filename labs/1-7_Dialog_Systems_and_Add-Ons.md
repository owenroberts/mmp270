---
layout: notes
title: Dialog Systems and Add-Ons
return: ./labs
label: Labs
---

This lab demonstrates creating a dialog system using the Godot Add-On Dialogic.

This lab goes along with the [NPC](./2-5_NPCs) art lab.

## 1. Setup
- Use a game that you're currently working on, or use a copy of the [Developer Default](./Developer_Default.zip) project
- Download the [Assets](./Assets.zip) folder for any scenes or art you may need
- Get a font from [BitFontMaker2](http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/){:target="_blank"} or make one
- Download [Dialogic](https://github.com/coppolaemilio/dialogic){:target="_blank"} in Godot's Asset Library
- Duplicate the `DefaultScene` and add in a `SceneManager` and `UI` node
- Use the `PlayerSimple` script for the player controller

## 2. Create the NPC scene
- Make a new scene called `NPC` and add it to the default scene
- The default node is an `Area2D`
- Add an `AnimatedSprite` with the `Idle` and `Talk` animations
- Add a `CollisionShape2D` to create the activation area
- Create a new `NPC` layer in the and add the `Player` layer to the NPC mask on the `Area2D`
- Create the `NPC` script
- Connect signals for the player enter and exit

## 3. Create a Dialogic dialog
- Start by adding the characters using the character portraits created in the [NPCs](./2-5_NPCs) art lab
- Adjust the theme
- Add a timeline for a test dialog
- Create events in the timeline
- Add definitions to update the item count

## 4. Connect the Dialogic dialog to the NPC
- Use the `NPC` export variable `dialog_name` to launch the NPCs dialog
- Update the `PlayerSimple` script to play the `Talk` animation
- Update the `SceneManager` to show changes to the `Metrics`

## 5. Documentation
- Take screen shots or video of the dialog and NPC

## Full NPC Script
```
extends Area2D

export var dialog_name = "Dialog Name"
var player = null
var dialog = null
signal update_metrics

func _on_NPC_body_entered(body):
	# automatically start dialog
	dialog = Dialogic.start(dialog_name)
	Dialogic.set_variable("apple_count", Global.item_count)
	add_child(dialog)
	
	player = body
	player.talk()
	$AnimatedSprite.play('Talk')
	
	dialog.connect('timeline_end', self, 'end_dialog')
	dialog.connect("dialogic_signal", self, "add_fireball")

func end_dialog(_param):
	$AnimatedSprite.play('Idle')
	player.move()

func add_fireball(param):
	if param == 'add_fireball':
		print("Added a fireball!")
	if param == 'remove_apple':
		Global.item_count -= 1
	emit_signal("update_metrics")

func _on_NPC_body_exited(body):
	# player leaves
	remove_child(dialog)
	end_dialog(null)
```

## Update PlayerSimple.gd
```
# variables
var is_moving = true

func talk():
	$AnimatedSprite.play('Talk')
	is_moving = false
	
func move():
	is_moving = true
```

## Update SceneManager.gd
```
func _on_NPC_update_metrics():
	metrics.update_display()
```