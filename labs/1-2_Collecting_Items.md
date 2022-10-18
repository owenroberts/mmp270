---
layout: notes
title: Collecting Items
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/CLiS-J8SAM8?rel=0" frameborder="0" allowfullscreen></iframe> -->

Add items and to be collected in Godot. This lab is good to pair with the [Rewards](2-3_Rewards.md) lab.

## 1. Setting up the Godot Project
- Continue working with your game project, or download the [Default Project Template](./270_BlankTemplate.zip)
- This lab requires the Metrics to be set up in the scene, so grab the following things from [Assets](./270_Assets.zip)
- This lab requires animated sprites for a collectible item such as a coin, or life

## 2. Add Items
- Add a Node2D to the scene hierarchy and name it `Items`
- Add a child instance of *Item.tscn* using the link button
- Add a script to the Item node called *ItemManager.gd* and save in the `Scripts` folder

## 3. Update the Scene Manager
- Update the scene manager to update Global values and metrics with items

## 4. Add a third item
- What other types of items might be useful in your game? Add an extra item and explain what it would be used for in the documentation
- Example could be a specific key, powerup, story items, inventory items or anything else you can collect in a game

## 5. Documentation
- Document with a screen shot or video and post on Open Lab


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