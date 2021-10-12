---
layout: notes
title: Backgrounds
return: ./labs
label: Labs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/E39rVWlHlkA?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers creating a seamless background in Piskel and implementing it in Godot.

## 1. Create the background
- Using Piskel or another editor create a seamless background
- Start by drawing background design
- Use the Move tool with wrap to wrap the design horizontally or vertically or both
- Fill in the edge with new art
- Export at a size that will be the same size or larger than the game window

## 2. Setup Godot project
- Use a previous project and add the assets or download the [Artist Default](./Artist_Default.zip) folder
- Download [Assets Folder](./Assets.zip) if needed
- In the *DefaultScene*, add a new *ParallaxBackground* node
- Then add a *ParallaxLayer* node with a *Sprite* node child
- Add your background image as the texture 
- In the *ParallaxLayer* node set the motion and mirroring settings

## 3. Documentation
- Take screenshots of a video of the background
- Post on Open Lab

## Resources
- [Godot 3.2: Let's Build a 2D Platformer!: Part 8 (Parallax Backgrounds)](https://www.youtube.com/watch?v=dC6G7Y9qRbQ){:target="_blank"}