---
layout: notes
title: Collecting Items
return: ./labs
label: Labs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/CLiS-J8SAM8?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers collecting items in Godot.

This lab is good to pair with the [Rewards](2-3_Rewards.md) lab.

## 1. Setting up the Godot Project
- Continue working with a previous project, or download the [Developer Default](./Developer_Default.zip) folder
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

## Bonus
- What other types of items might be useful in your game? Add an extra item and explain what it would be used for in the documentation.

## Full ItemManager.gd script
```
extends Area2D

# support for multiple item types
export var item_type = "apple"
# duplicate scene and replace art for new items

# when item is collected send signal to scene manager and update metrics
signal item_collected

# prevents item being collected multiple times
var item_is_collected = false


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