---
layout: notes
title: Godot Lab 5
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8G-rC7Y_1XA?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers adding obstacles to the scene.  [Download the lab files here](lab-5.zip).

These instructions cover the basics of the lab, the video contains more detailed explanations.

1. [Download the lab files](lab-5.zip).
	- Optional: Duplicate Lab-4 and title it Lab-5, or continue adding to class lab folder
	- Unzip the archive
	- Move Obstacle.md in the Scripts folder
	- Replace Player.md with the new file in Script folder
	- Move Obstacle.tscn to Scenes folder


2. Prepare obstacle art
	- Choose one of your obstacles designs
	- Create sprites sheets for 4 Animation states
		- Idle
		- Walk
		- Attack
		- Die
	- These are required for the Obstacle code, discuss with me if you want to make modifications
	- Download sprite sheets and place them in Sprites folder


2. Create death animation for player
	- Export sprite sheet and add to Sprites folder


3. Open project.godot in Godot


4. Add death animation to Player
	- Add a new track to the AnimationPlayer inside the Player scene called "Die"
	- Key frame the Die animation using new death animation sprite sheet
	- Add visibility keyframes to the Walk, Jump and Idle animations to hide the new Die animation


5. Add obstacle animations
	- Open Obstacle.tscn
	- Click on the AnimatedSprite node
	- There are animation spots for each animation built in, click the waffle icon to add the spritesheet for each one
	- Choose the number of frames and then click on the frames in the spritesheet
	- Change speed and loop setting if needed  


6. Ajust the obstacle colliders
	- The obstacles has four colliders, related to different settings
	- Collider
		- This is the physics collider that interacts with platforms and walls in the scene
		- This should match the bottom of the art and be close to or a little smaller than the obstacle animation/art
		- The scene is setup with a circle collider, it can be changed to a rectangle, but that requires changing the code, see video at 22:30 for details
	- TopCheck
		- Area to collide with player jumping on top of the obstacles head to kill obstacle
		- Disable this collider to turn off this functionality
	- SidesCheck
		- Area that will kill player if collides
		- This should match the art on the sides, but not overlap with the TopCheck
	- PlayerDetect
		- This will trigger the movement of the obstacle to start when Player is near
		- The is off by default, change in scene or instance settings

7. Adjust Raycast floor check
	- Make sure the FloorCheck raycast arrow is below the Collider

7. Add instances of obstacle to scene
	- Create a Node2D node in the main scene and call it Obstacles
		- If you have multiple types of obstacles, call it based on the type
	- Use the link/instance button to add instances of the obstacle
		- Instances can have different settings, like the speed, color, falling off platforms, movement
	- Place obstacles into the scene to add challenges for the player

8. Add signal to the Player's AnimationPlayer that connects to Gameover function
	- Select AnimationPlayer and go to Node menu
	- Double click animated_finished signal
	- It should automatically connect, if not we can trouble shoot

9. Test game and adjust obstacle positioning

