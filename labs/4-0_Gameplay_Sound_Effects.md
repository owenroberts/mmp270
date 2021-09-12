---
layout: notes
title: Gameplay Sound Effects
return: ./labs
label: Labs
---

This lab covers creating sound effects using JFXR and adding them to a Godot scene.

## 1. Create sound effects
- Using [JFXR](https://jfxr.frozenfractal.com/){:target="_blank"}, [FreeSound](https://freesound.org/){:target="_blank"} or another sound design program, create SFX for the player movement sounds, obstacle sounds and other sound effects for collisions or state changes in the game.
	- Player: Jump, Land, Hit, Dies
	- Obstacle hit
	- Item collected
	- Win game
	- Portal and checkpoint

## 2. Add SFX to Godot
- Download the [Assets_MMP270](./Assets_MMP270.zip) folder
- Use a previous project and add the assets or download the [Blank Template](./Blank_Template_MMP270.zip) folder and add in necessary assets
- Add an AudioStreamPlayer to the object that is associated with the SFX
- Find the code to play each sound by searching for the sound names
- Uncomment the line of code by removing the `#` at the beginning

Before:

```
# remove comments to play sfx
# $JumpSound.play()
```

After:

```
# remove comments to play sfx
$JumpSound.play()
```

## 3. Post documentation and sound effects on Open Lab
