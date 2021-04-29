---
layout: notes
title: Godot Lab 9
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/sxvjjInjVbw?rel=0" frameborder="0" allowfullscreen></iframe>


This Godot lab covers adding portals to go to the next level.

## 1. Create End Level Portal
- Duplicate the existing EndLevelPortal scene and rename it to EndGamePortal
- We will update/repurpose the EndLevelPortal to change levels

## 2. EndLevelPortal script
- Create a new script called *EndLevelPortal.gd*
- Use the blank script template
- Save it in the Scripts folder
- Disconnect the `body_entered` signal from the old script and attach it to the new script
- This adds some code which we need to add to
- Final code looks like this

```
extends Node2D

export(String, FILE, "*.tscn") var load_level_path

func _on_EndLevel_body_entered(body):
	if body.name == 'Player':
		get_tree().change_scene(load_level_path)
```

## 3. Create new levels
- Duplicate *Level1.tscn* and call it *Level2.tscn*
- Duplicate either level to make *Level3.tscn*

## 4. Replace end game portal with end level portal
- In *Level1* find the end game portal and replace with new end level portal scene
- Update the Load Level Path value to *Level2.tscn*

## 5. Update level 2 and 3
- Make some changes to level 2 and 3
- I just did a couple of examples, this should be a full level design like level 1 but different
- Review the level design lecture and lab if needed

## 6. Set Load Level Path for scene 2
- Set the Load Level Path in the EndLevelPortal in Level2 to open Level3

## 7. Add EndGamePortal to level 3
- Add back in the EndGamePortal at the end of level 3

## 8. Clean things up a bit
- Remove the WinGame UI nodes from Level1 and Level2
- Take out other unneeded components of different levels

## 9. Update Gameover
- Update the Load Level Path in the Gameover instances on each level to match the level
- Or not! You can force the player to start over from level 1

## 10. Add more levels!
- If you want ;)


