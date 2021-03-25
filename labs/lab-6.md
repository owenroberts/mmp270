---
layout: notes
title: Godot Lab 6
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/UZwJCs57pGA?rel=0" frameborder="0" allowfullscreen></iframe>

This lab covers adding sound effects and background music to the scene.  There are no files needed to download for this lab.

These instructions give a basic checklist, consult the video for more detailed explanations.

## 1. Download sound files
- Start by downloading the sound files that will be added to the game.
- Here are some sites where you can find free/open source/creative commons sounds.  There are many more, these are just a selection.
	- [itch.io game assets](https://itch.io/game-assets){:target="_blank"}
	- [Open Game Art ~ Library of Game Sounds](https://opengameart.org/content/library-of-game-sounds){:target="_blank"}
	- [freesound.org](https://freesound.org/){:target="_blank"}
	- [Free Music Archive](https://freemusicarchive.org/search){:target="_blank"}
- [JFXR](https://jfxr.frozenfractal.com/){:target="_blank"} is a program for generating original game style sound effects.
- Godot can only play .wav and .ogg (Ogg Vorbis) file types.
	- To convert .mp3 files to .ogg use [Audacity](https://www.audacityteam.org/download/){:target="_blank"} 
- Get at least one music track.
	- You can use one music track per scene, or a different one in each scene.
- Get sound effects for the following events:
	- Change of scene
	- Player jump
	- Player die/game over
	- Obstacle hit/dies
	- Obstacle hits/attacks player
	- Reward Item collected
- There are more places where sound effects can be added, if there are specific sounds you want to add we can discuss


## 2. Add Audio folder
- Once you have downloaded your files, add them all into an Audio folder inside of your Godot project.
- You can use the same folder from the preivous project or duplicate the folder and rename it `Lab-6`

## 3. Add background music 
- Starting with the StartMenu scene, add background music.
- Add a new node (right click on the Control node or click the + button)
- Choose the `AudioStreamPlayer` node
	- Do <strong>not</strong> use the `AudioStreamPlayer2D` node (this will anchor your sound to a specific position in the scene)
- Rename the node `BgMusic` or `BackgroundMusic`
- Select the node and then click on the empty stream parameter
- Click load and find the background music file in the Audio folder
	- You can also drag the file to the empty stream parameter
- Check `Autoplay` to be on
	- This makes the track play as soon as the scene loads
- If the track stop playing after one playthrough, double click the audio file in the file system and then check the `Loop` parameter to be on in the Inspector

## 4. Repeat for other scenes
- Repeat this step to add background music to the MainScene and any other scenes that need background music.

## 5. Add scene change sound
- Add Scene Change sound effect.
- On the MainScene and any other scenes besides the start menu, add a new `AudioStreamPlayer` node
- Add the Scene Change sound effect and enable the `Autoplay` setting
- Double click the file to make sure `Loop` is turned off, we don't want this sound to loop over and over

## 6. Add player sound effects
- Open the `Player` scene
- Add two new `AudioStreamPlayer` nodes to the player hierarchy
- Name one `JumpSound` and the other `GameoverSound`
- Add the respective sounds to each
- Make sure the sounds are not set to loop
- Open the `Player.gd` script
- Edit the code to play the sounds
	- The JumpSound goes in the main `player_update` function in the middle of the code
	- The GameoverSound goes at the end in the `game_over` function
- The `$` is used to get a reference to the object in the player hierarchy
- The name following the `$` needs to match the audio player node

```
# jump input
if Input.is_action_just_pressed("jump") and is_on_floor():
	vel.y -= jumpForce
	$JumpSound.play() # <--- add sound here
```

```
func game_over():
	Gameover.visible = true
	is_alive = false
	$GameoverSound.play() # <--- add sound here
```

## 7. Add obstacles sound effects
- Similar to player sound effects
- Add two new `AudioStreamPlayer` nodes to the player hierarchy
- Name one `AttackSound` and the other `HitSound`
- Add the respective sounds to each
- Make sure the sounds are not set to loop
- Open the `Obstacle.gd` script

```
func _on_TopCheck_body_entered(body):
	is_alive = false
	animations.play('Die')
	$TopCheck.set_collision_layer_bit(3, false)
	$TopCheck.set_collision_mask_bit(0, false)
	$SidesCheck.set_collision_layer_bit(3, false)
	$SidesCheck.set_collision_mask_bit(0, false)
	$HitSound.play() # <--- add sound here
```

```
func _on_FrontCheck_body_entered(body):
	animations.play('Attack')
	speed = 0
	body.enemy_collision()
	$AttackSound.play() # <--- add sound here
```

## 8. Add item collected soun
- Last step!
- Similar to player and obstacle
- Add new `AudioStreamPlayer` node to the player hierarchy
- Name it `CollectSound`
- Add the sound
- Make sure the sounds are not set to loop
- Open the `Item.gd` script

```
func _on_Item_body_entered(body):
	if not item_is_collected:
		$Item.visible = false
		$Collected.visible = true
		$Collected.frame = 0
		$Collected.playing = true
		item_is_collected = true
		emit_signal("item_collected")
		$CollectSound.play()  # <--- add sound here
```