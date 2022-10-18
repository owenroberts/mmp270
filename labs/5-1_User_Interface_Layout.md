---
layout: notes
title: User Interface Layout
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/n2HdxTPCYIA?rel=0" frameborder="0" allowfullscreen></iframe> -->

Design the user interface using Godot UI layouts.  It uses the art created in the [User Interface Design](3-5_User_Interface_Design) lab.

The lab [Interface Sounds](4-1_Interface_Sounds) goes over adding sounds to the interface.

## 1. Setup
- Use your game project or download the [Default Project Template](./270_BlankTemplate.zip)
- Download the [Assets](./270_Assets.zip) folder if needed
- Import the sprite sheets created in User Interface Design lab
- Delete the existing `StartMenu.tscn`, `Instructions.tscn`, `GameOver.tscn` and `YouWin.tscn` scene files, we'll build them from scratch

## 2. Start Menu
- We're going to rebuild this scene from scratch to go over layout basics
- Start with a Control node, this is the default node for Godot UI
- Continue building the scene using UI Graphics, Containers and Buttons
- We'll go over some of the basics, you can also explore UI elements in the Godot UI Documentation linked in resources

## 3. Instructions, Game Over and Win Game
- Duplicate the `StartMenu.tscn` file to create the other UI scenes
- Update the graphics, everything else should stay the same

## 4. Documentation
- Post screen shots of the Godot layouts on Open Lab

## Resources
- [Godot UI Docs](https://docs.godotengine.org/en/stable/getting_started/step_by_step/ui_introduction_to_the_ui_system.html){:target="_blank"}