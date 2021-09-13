---
layout: notes
title: Interface Sounds
return: ./labs
label: Labs
---

This lab covers adding sounds to user interface elements in a Godot scene.0

## 1. Create sound effects
- Using [JFXR](https://jfxr.frozenfractal.com/){:target="_blank"}, [FreeSound](https://freesound.org/){:target="_blank"} or another sound design program, create SFX for the player movement sounds, obstacle sounds and other sound effects for collisions or state changes in the game.
	- Button Hover and Click
	- Game Over and Win Game

## 2. Add SFX to Godot
- Use a previous project and add the assets or download the [Sound Default](./Sound_Default.zip) folder 
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