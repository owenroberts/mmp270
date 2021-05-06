---
layout: notes
title: Godot Lab 10
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/gwRjS8KQPnA?rel=0" frameborder="0" allowfullscreen></iframe>


This Godot lab covers adding global variables, a player lives counter and life item.

## 1. Add global variables script
- In the Script area in the Godot editor, goto *File* and click *New Script*
- Name the script `Global.gd` and add it to the *Scripts* folder
- Add the following code in the script (this is covered in more depth in the video)

```
extends Node

var itemCount = 0
```

## 2. Update Metrics.gd
- The `Metrics.gd` script must be updated to use the new Global variables
- Change each instance of `itemCount` to `Global.itemCount`

```
extends Control

func _ready():
	update_count_display()
	
func update_count_display():
	$ItemCount.text = String(Global.itemCount)

func on_item_collected(item_type):
	Global.itemCount = Global.itemCount + 1
	update_count_display()

func _on_Item_item_collected(item_type):
	on_item_collected(item_type)
```

## 3. Add Global.md to AutoLoad
- Open *Project > Project Settings* and click on the *AutoLoad* tab
- Click the folder for *Path* and then click *Add*

That's it! Everything after this is optional.

## 4. Add player lives art
- Using Piskel or another graphics editor create an animation for a life icon and one for collecting a life
- Download sprite sheets and add them to the *Sprites* folder

## 5. Add Life icon to metrics
- Duplicate the Apple/Item icon
- Replace the sprite with Heart/Life sprite
- Duplicate the new sprite 3 times and name them *Life1*, *Life2* and *Life3*

## 6. Update scripts
- Add `playerLives` to *Global.gd*

```
extends Node

var itemCount = 0
var playerLives = 3
var totalLives = 3
```

- Update *Metrics.gd* script with new code to display the right number of lives

```
func _ready():
	update_count_display()
	update_life_display()

func update_life_display():
	$Life1.visible = true if Global.playerLives >= 1 else false
	$Life2.visible = true if Global.playerLives >= 2 else false
	$Life3.visible = true if Global.playerLives >= 3 else false
```

## 7. Add player Hit animation
- Create a new animation or build one from existing death animation

## 8. Update Player.gd script
- Add `Metrics` variable

```
onready var Gameover = $'../UI/Gameover'
onready var Metrics = $'../UI/Metrics'
```

- Update the script to check the `playerLives` in the `enemy_collision` function

```
func enemy_collision():
	is_alive = false
	Global.playerLives = Global.playerLives - 1
	Metrics.update_life_display()
	if Global.playerLives > 0:
		animPlayer.play('Hit')
	else:
		animPlayer.play('Die')
```

- Update the `_on_AnimationPlayer_animation_finished` function 

```
func _on_AnimationPlayer_animation_finished(anim_name):
	if anim_name == 'Die':
		game_over()
	if anim_name == 'Hit':
		is_alive = true
```

- Update the `game_over` function to reset the player lives

```
func game_over():
	$GameoverSound.play()
	Gameover.visible = true
	is_alive = false
	Global.playerLives = Global.totalLives
```

## 9. Update Obstacle
- Set obstacle *Attack* animation loop to off
- Add a temp_speed variable to reset speed in *Obstacle.gd*

```
export var speed = 50
var temp_speed = speed

func _ready():
	temp_speed = speed
```

- Check animation when animation finished

```
func _on_AnimatedSprite_animation_finished():
	if not is_alive:
		queue_free()
	if animations.animation == 'Attack':
		speed = temp_speed
```


## 10. Merge Life icons to Level2 and Level3
- There will be errors if the Metrics script is trying to reference icons that don't exist in other scenes
- Open *Level2.tscn*
- Right click on Metrics and click *Merge from Scene*
- Open *Level1.tscn*, choose the Life icons, and click Merge
- Repeat with *Level3.tscn*

## 11. Add Life item
- Duplicate *Item.tscn* and name it *Life.tscn* (this can be other types of new items as well)
- Replace Item sprites with Life sprites

## 12. Update Item.gd script
- Add export var for the item type
```
export var item_type = 'apple'
```
- Default is set to *apple* because I'm using an apple, it can be whatever your default item is
- Update `emit_signal` function
```
emit_signal("item_collected", item_type)
```
- Change Script Variables *Item Type* to "life" for life (or whatever the new item is)

- Add signal to Life item to go to `_on_Item_item_collected` in *Metrics*

## 13. Update Metrics.gd script
- Update *Metrics.gd* to use the `item_type` parameter

```
func on_item_collected(item_type):
	if item_type == 'apple':
		Global.itemCount = Global.itemCount + 1
		update_count_display()
	if item_type == 'life' and Global.playerLives < Global.totalLives:
		Global.playerLives = Global.playerLives + 1
		update_life_display()


func _on_Item_item_collected(item_type):
	on_item_collected(item_type)
```