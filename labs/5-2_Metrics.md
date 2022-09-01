---
layout: notes
title: User Interface Metrics
return: ./labs
label: Labs
---


<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/5xbeB4as8Lg?rel=0" frameborder="0" allowfullscreen></iframe> -->

Add visible metrics to a game scene to show the score, number of items or lives.  It uses art created in the [Rewards](2-3_Rewards) art lab 

## 1. Setup
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if needed
- For artwork, you will need the rewards such as extra lives and items and any other icons you may want to use to represent in the metrics
- We're going to rebuild the `Metrics.tscn` scene so delete the one in the default folder

## 2. Create Metrics scene
- Create a new scene called `Metrics.tscn`
- Use a `Control` node for the main node
- Add the `MetricsManager` script to the main node
- Add a `Sprite` or `AnimatedSprite` for each icon for the metrics, for items and extra lives
- Add a Label and script for `MetricCount`, a counter than goes with a number
	- Optional: Use a custom font
- An Icon can also use a `MetricToggle` script to hide or show a life or other object

## 3. Add Metrics
- Use the `DeafaultScene` or `Level1` and add `Metrics` to the `UI` scene
- Select the `SceneManager` and connect the `Metrics` node to the Script Variables

## 4. Documentation
- Post screen shots of the Godot layouts on Open Lab