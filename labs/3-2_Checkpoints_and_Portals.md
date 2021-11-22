---
layout: notes
title: Checkpoints and Portals
return: ./labs
label: Labs
---

This lab covers adding checkpoints and portals into Godot.  Checkpoints save the progess of the player on a level.  Portals open a new scene or state in the game.

This lab can be paired with the [Checkpoints and Portals](./2-8_Checkpoints_and_Portals) art lab.

## 1. Setup Godot project
- Use an existing project or download the [Designer Default](./Designer_Default.zip)
- Use the DefaultScene or add on to the level created in the Level Design lab

## 2. Adding checkpoints
- The functionality of checkpoints is actually a bit complex, this uses three separate scripts to hangle specific checkpoints, checkpoints data and global checkpoints for switching between levels
- Add the `CheckpointsGlobal.gd` script in `Project > Project Settings > Autoload`
- Add a new `Node2D` to the scene and call it `Checkpoints`
- Attach the `CheckpointsManager` script
- Add the `Player` node and scene objects into the Script Variables
- Give the scene a name in Scene Name variable
- Connect the `SceneManager` `game_over()` signal to the `CheckpointsManager`
- Instance a child scene of the `Checkpoint.tscn` scene
- Update the artwork if you have art or are collaborating with an artist


## 3. Adding portals
- There are two types of portal scripts
	- PortalNextLevel opens a new level
	- PortalEndGame triggers the end of the game
- These can be modified to include other bevaviors
- Add a portal to the end of the Level and add the `PortalNextLevel` script
- Duplicate the level and add it to the `Script Variables` to test
- Add another portal to the end of the new level and add the `PortalEndGame` script
- Connect the `on_activate` singal to the `SceneManager`

## 3. Documenation
- Post screen shots on the Open Lab
