---
layout: notes
title: Scene Manager
return: ./labs
label: Labs
---

This lab covers collecting items in Godot.

## 1. Setting up the Godot Project
- Continue working with a previous project, or Download the [Developer Default](./Developer_Default.zip) folder
- If necessary, download the [Assets Folder](./Assets.zip) and get the *MetricsManager.gd*, *MetricCount.gd* and *MetricToggle.gd* scripts and add them to the `Scripts` folder
- Add in a `CanvasLayer` called *UI* with the `GameOver` and `Metrics` scenes 

## 2. Add Items
- Add a Node2D to the scene hierarchy and name it `Items`
- Add a child instance of *Item.tscn* using the link button
- Add a script to the Item node called *ItemManager.gd* and save in the `Scripts` folder

## 3. Update the Scene Manager
- Update the scene manager to update Global values and metrics with items

## 4. Documentation
- Document with a screen shot or video and post on Open Lab

## Full ItemManager.gd script
```
extends Area2D

# support multiple "type" of items, 
# need to duplicate the original scene instance and replace animations

export var item_type = "apple"

# "private" vars

signal item_collected # send signal to metrics or other places
var item_is_collected = false # prevents item from being collected during exit animation

# when player body enters item area -- area2d does not cause collisions

func _on_Item_body_entered(_body):
	
	# this assumes layer/mask setup only allows collisions with player
	if not item_is_collected:
		# prevent multiple collections during animation
		item_is_collected = true
		$AnimatedSprite.play('Collected')
		$AnimatedSprite.frame = 0 # make sure it plays from beginning
		
		# emit signal to add to global item count
		emit_signal('item_collected', item_type)
		
		# remove comment to play sfx
		# $CollectedSound.play()

# when the collected animation finishing play, remove the item
func _on_AnimatedSprite_animation_finished():
	if item_is_collected:
		queue_free()

```

## Add to SceneManager.gd
```
# update Global based on items, update metrics display

func _on_item_collected(item_type):
	if item_type == 'apple':
		Global.item_count = Global.item_count + 1

	if item_type == 'life' and Global.player_lives < Global.total_lives:
		Global.player_lives = Global.player_lives + 1
	
	metrics.update_display()

```