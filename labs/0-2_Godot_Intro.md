---
layout: notes
title: Godot Intro
return: ./labs
label: Labs
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/y_dHEGCDyZ8?rel=0" frameborder="0" allowfullscreen></iframe>

In this lab we will go over the basics of the Godot Game engine and add a simple character to a Godot scene.

## 1. Download Godot
- [Download](https://godotengine.org/download/){:target="_blank"}

## 2. Create a basic scene
- Open Godot and click `New Project`
- Select a your class folder and create a new folder for the project `Godot Intro`
- Choose `OpenGL ES 2.0` (better for pixel graphics)
- Click `Create & Edit`

## 3. Organize folders
- In the *FileSystem* panel, create three folders, `Scenes` and `Sprites` and `Scripts`
- In your Finder or FileExplorer, move your avatar art into the `Sprites` folder

## 4. Create a Scene
- In the *Scene* panel, click the 2D Node button and rename it default scene
- Name is `DefaultScene`

## 5. Add some sprites
- Click the `+` button to add a new node
- Choose `Node2D` and name it `Scenery`
- Rick-click on the `Scenery` node and click `Add Node`
- Choose `Sprite`
- In the `Inspector` menu, click the `[empty]` box next to `Texture` and click `Load`
- Choose one of the tree sprites

## 6. Create a Player scene
- Right click on the Scenes folder and click `New Scene`
- Make sure it is in the `Scenes` folder
- Name it `Player`
- Open the player scene and click `Other Node` and choose `KinematicBody2D`
- Rename the main node `Player`
- Click the `+` button to add a new node
- Choose a `Sprite`
- Add your avatar image to the sprite texture

## 7. Add the Player Script to the Player
- [Download the lab zip file](0-2_Godot_Intro.zip)
- Extract the `PlayerController.gd` file and drag into the Scripts folder
- In the Player scene `Inspector` click the `[empty]` next to `Script` and then choose the player script
- Adjust the properties in the `Script Variables`

## 8. Add Player to Default Scene
- Switch back to the DefaultScene
- Click the `Instance Child Scene` button that looks like a chain link
- Choose `Player.tscn`

## 9. Setup the input
- Open `Project > Settings`
- Go to the `Input Map` tab
- Type in `move_right` into the `Action` bar and click `Add`
- Click the `+` next to the new input and click `Key`
- Press `Right Arrow` or `D` and then click Enter (don't hit the Enter button it will change the mapping)
- Continue with input for `move_left`, `move_up`, `move_down`

## 10. Add a camera
- Click the `+` button to add a new node
- Choose Camera2D
- Add the `CameraController.gd` script
- Adjust the properties in the `Script Variables`
- Set `Current` to `On`
- Add the `Player` scene instance to the `Player Path` variable

## 11. Preview the scene
- Click the Play button or Play Scene button
- Screen shot the window for documentation

## 12. Bonus: Add some scenery
- To make your scene a little more interesting, draw some sprites for scenery and add them into the scene

## Resources
- [The Godot Game Engine Explained in 5 Minutes](https://www.youtube.com/watch?v=KjX5llYZ5eQ){:target="_blank"}
- [Godot Basics Tutorial Series](https://www.youtube.com/playlist?list=PLJ690cxlZTgIsmdEhFufnB7O6KWoMS8M6){:target="_blank"}
- [Learn the GODOT Game Engine in 50 MINUTES](https://www.youtube.com/watch?v=QftpPI5iYrY){:target="_blank"}
- [2D Camera Tracking](https://www.youtube.com/watch?v=AJq5jrAo4EY){:target="_blank"}