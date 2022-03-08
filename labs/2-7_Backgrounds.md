---
layout: notes
title: Backgrounds
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/E39rVWlHlkA?rel=0" frameborder="0" allowfullscreen></iframe> -->

Create a seamless background in Piskel and add it in Godot.

## 1. Create the background
- Using Piskel or another editor create a seamless background
- Start by drawing background design
- Use the Move tool with wrap to wrap the design horizontally or vertically or both
- Fill in the edge with new art
- Export at a size that will be the same size or larger than the game window

## 2. Setup Godot project
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if needed
- In the *DefaultScene*, add a new *ParallaxBackground* node
- Then add a *ParallaxLayer* node with a *Sprite* node child
- Add your background image as the texture 
- In the *ParallaxLayer* node set the motion and mirroring settings

## 3. Documentation
- Take screenshots or record a video of the background
- Post on Open Lab

## Resources
- [Godot 3.2: Let's Build a 2D Platformer!: Part 8 (Parallax Backgrounds)](https://www.youtube.com/watch?v=dC6G7Y9qRbQ){:target="_blank"}