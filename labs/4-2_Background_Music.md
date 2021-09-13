---
layout: notes
title: Background Music
return: ./labs
label: Labs
---

This lab covers sourcing background music and adding it to a Godot scene.

## 1. Find (or create) background music 
- Find music on the [Free Music Archive](https://freemusicarchive.org/search){:target="_blank"} or [Open Game Art](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=12&sort_by=count&sort_order=DESC){:target="_blank"} or another Creative Commons licensed source
- You can also make your own music if you are familiar with music production
- Edit with Audacity if necessary
- Save files as `.ogg` or `.mpr3` format

## 2. Add files to Godot
- Use a previous project and add the assets or download the [Sound Default](./Sound_Default.zip) folder 
- Add music to the `Audio` folder or create one
- Make sure the Import settings are set to `Loop`
- For each background sound, find or create an `AudioStreamPlayer` and add the track
- Add the file to the player and turn on `AutoPlay`

## 3. Documentation
- Post either the sound files or links to the resources on the Open Lab

## Resources
- [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html){:target="_blank"}
- [Audacity](https://www.audacityteam.org/){:target="_blank"}