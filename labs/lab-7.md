---
layout: notes
title: Godot Lab 7
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/FduIciMy3EA?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers exporting your project for multiple platforms.  There are no new files needed to be downloaded.  These instructions cover the basics, watch the video for more detailed explanations.

## 1. Make a custom icon for you game
- Use your current lab folder or duplicate it
- You can call this folder `Midterm`, this is the last lab before the midterm
- Time to replace the default Godot icon
- Choose some art you already created or make something new
- The icon should be a 128x128 .png file
	- Transparency is supported
- Name the file `icon.png` and replace the current Godot icon in the project folder

## 2. Window setting
- Decide if you want your game window to be resizable by the player
- If yes, do nothing
- If no, to to the the `Project` menu and open `Project Settings`
	- In `General` tab, scroll down to `Display`
	- Click on `Window`
	- Uncheck `Resizable` parameter

## 3. Choose Mac, Windows or Web build

## 3a. Export Mac Build
- Go to `Project` menu and and click `Export`
- Next to `Presets` window, click `Add...` and choose `Mac OSX`
- If you have not downloaded the build files it will prompt you to download them
	- Download the latest files
- Click folder next to Export Path
- Make a `Builds` folder and choose it
- Click `Export Project`
	- Type in the file name, `MyGame` or the name of your game
	- Choose the filetype `.dmg`
	- Click `Save`
	- The project will build
	- Right click on the file and `Archive` the project
	- Upload `Archive` to Blackboard
	- Add to Discord #mmp270 channel for classmates to play
		- Specify if its Mac so classmates know if they can play it

## 3b. Export Windows Build
- Go to `Project` menu and and click `Export`
- Next to `Presets` window, click `Add...` and choose `Windows Desktop`
- If you have not downloaded the build files it will prompt you to download them
	- Download the latest files
- Click folder next to Export Path
- Make a `Builds` folder and choose it
- Click `Export Project`
	- Type in the file name, `MyGame` or the name of your game
	- Choose the filetype `.exe`
	- Click `Save`
	- The project will build two files, `MyGame.exe` and `MyGame.pck`
	- To archive, either select both files and right click, or put them in a folder together and right click the folder
	- Right click on the file and `Archive` the project
	- Upload `Archive` to Blackboard
	- Add to Discord #mmp270 channel for classmates to play
		- Specify if its Mac so classmates know if they can play it

## 3c. Export Web Build
- Go to `Project` menu and and click `Export`
- Next to `Presets` window, click `Add...` and choose `HTML5`
- If you have not downloaded the build files it will prompt you to download them
	- Download the latest files
- Click folder next to Export Path
- Make a `Builds` folder and choose it
- Add a `Web` folder and choose that
	- The web build makes several files, its good to put them in a seperate folder
- Click `Export Project`
	- Use `index.html` as the file name
	- Click `Save`
	- The project will build several files:
		- index.wasm
		- index.png
		- index.pck
		- index.js
		- index.html
		- favicon.png
	- Right click on the `Web` folder and `Archive` the project
	- Upload `Archive` to Blackboard
	- To make this playable it should be published online
		- If you have GitHub you can make a repository and add it there and publish with GitHub Pages
		- If you have a personal website, add via FTP
		- If you have an itch.io profile, make a new game and upload the zip
		- Add the link in the Discord #mmp270 for classmates to play