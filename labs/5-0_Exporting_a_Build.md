---
layout: notes
title: Exporting a Build
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/?rel=0" frameborder="0" allowfullscreen></iframe> -->

This lab covers exporting a Godot project

## 1. Setup
- Create a folder for `Builds`
- Add subfolders for `Web` and other platforms you want to build, `Mac`, `Windows` and `Linux`

## 2. Update your project
- You may need to add scenes or assets from other projects
- For adding scenes across projects, copy and paste the scene file and all of the assets required (Sprites, TileSets, Audio, Scripts, Fonts etc)
- Open the scene and replace or ignore missing references
- Within a project, use the *Merge From Scene* function to add components to other scenes
- In `Project Settings` update the projects settings
	- `Application > Config > Name` to choose a project name
	- `Application > Config > Icon` to choose a project icon
	- `Application > Run > Main Scene` to choose the dfeault scene
	- `Application > Boot Splash > Image` to add a loading image
	- `Display > Window` set window width and size and Resizable

## 3. Choose a build
- Start with a web build, this will be the easiest to play because users can play it directly in the browser
- You can also build for Mac, Windows or Linux

## 4. Export project from Godot
- Go to `Project > Export`
- Create a Preset by clicking `Add` and choose the platform
- If you have not downloaded the build template you will see an error `No Export Template`
	- Click `Manage Template Exports`
	- Click `Download` on the stable version
	- Select a Mirror to Download
- Return to `Project > Export`
- Optional: In the `Resources` tab you can include only specific resources in your build
	- This could be useful if you are getting errors on the build
- Optional: Some platforms have an option to turn off debug features
- Click export project and choose the `Builds` folder and the correct platform
- Different builds will have different numbers of files
- For web, rename the HTML file `index.html` (for itch.io)
- Zip the Platform folder for distribution on Itch.io

## 5. Post your project on Open Lab
- You can wait until you finish the Itch.io lab or post your zip directly on the Open Lab