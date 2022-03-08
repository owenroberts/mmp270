---
layout: notes
title: Interface Sounds
return: ./labs
label: Labs
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/lT2AxXgInos?rel=0" frameborder="0" allowfullscreen></iframe> -->


Add sounds to user interface elements in a Godot scene.

## 1. Create sound effects
- Using [JFXR](https://jfxr.frozenfractal.com/){:target="_blank"}, [FreeSound](https://freesound.org/){:target="_blank"} or another sound design program, create SFX for the player movement sounds, obstacle sounds and other sound effects for collisions or state changes in the game.
	- Button Hover and Click
	- Game Over and Win Game

## 2. Add SFX to Godot
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if needed
- Create a folder for `Audio` and copy your sound files
- Find or Add an `AudioStreamPlayer` node for each sound effect in the StartMenu, GameOver and Instructions Scenes, and UIScene
- Find the code to play each sound by searching for the sound names
- Uncomment the line of code by removing the `#` at the beginning

Before:

```
# func _on_button_down():
#	$ClickSound.play()
```

After:

```
func _on_button_down():
	$ClickSound.play()
```

## 3. Documentation
- Post either the sound files or links to the resources on the Open Lab

## Resources
- [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html){:target="_blank"}
- [sfxr](https://www.drpetter.se/project_sfxr.html){:target="_blank"}
- [Audacity](https://www.audacityteam.org/){:target="_blank"}
