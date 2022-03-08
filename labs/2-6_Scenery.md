---
layout: notes
title: Scenery
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/BaEwhW1uNT4?rel=0" frameborder="0" allowfullscreen></iframe> -->

Create scenery and add it into a Godot scene.

## 1. Draw scenic elements
- Choose 3 scenic elements to add to your game
- These elements should communicate something about the game world
- Draw the elements in Piskel
- Try variations and choose the best ones

## 2. Setup Godot project
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if needed
- Add sprites and duplicate them to arrange scenery

## 3. (Optional) Use YSort in Godot
- In Godot, `YSort` is a 2D Node that will sort your scenery and sprites according to their vertical (Y) position in the scene
- Change the `DefaultScene` node type to `YSort`
- Add a child `YSort` node and name it *Scenery*
- Add your scenery Sprites into the *Scenery* Node and offset the bottom
- Edit your *Player* scene so the *AnimatedSprite* and *CollisionShape2D* are sitting with the bottom at the origin

<!-- ## 3. Setup a Parallax Background
- In the *DefaultScene*, add a new *ParallaxBackground* node
- Then add a *ParallaxLayer*
- Add some elements to the layer
- Add your background image as the texture 
- In the *ParallaxLayer* node set the motion and mirroring settings
- Repeat with multiple layers for different elements -->

## 4. Documentation
- Take screenshots of a video of the background
- Post on Open Lab

