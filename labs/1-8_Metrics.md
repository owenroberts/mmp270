---
layout: notes
title: Metrics
return: ./labs
label: Labs
---

Add Metrics to your Godot game to show the player lives or health and collected items.

## 1. Setup
- Use your game project or download the [Default Project Template](./270_Template.zip)
- Download the [Assets](./270_Assets.zip) folder if you need any assets

## 2. Create the MetricsManager scene
- Create a new Control scene called `Metrics`
- Add Icons for each metric 
- Add a Label for the item_count
- Add Sprites for the number of player lives

## 3. Add scripts
- Create a `MetricsManager.gd` script for the Metrics node
- Create a `MetricCount.gd` script for the item_count
- Crate a `MetricToggle.gd` script for the player lives
- Attach scripts to the appropriate nodes

## 4. Add Metrics into scene
- Create a `CanvasLayer` node called `UI`
- Instance a child scene of `Metrics`

## 5. Add a third metric
- Using this process, think of a third metric for the game, such as enemies defeated, special keys or other items to be collected

## 6. Documentation
- Post screen shots or video on Open Lab

## Full MetricsManager.gd script
```
extends Node

# get an array (list) of references to display nodes for each metric
export (Array, NodePath) var metrics_paths
var metrics = Array()

func _ready():
	# load the metrics from path
	for path in metrics_paths:
		var metric = get_node(path)
		metrics.push_front(metric)

# update display of each metric when state changes in game
func update_display():
	for metric in metrics:
		metric.update_display()
```

## Full MetricCount.gd script
```
extends Label

# metric that counts up from 0

# reference to Global value
export var item_name = "item_count"

# display on ready, also when metrics update
func _ready():
	update_display()
	
# update value from Global
func update_display():
	text = String(Global[item_name])
```

## Full MetricToggle.gd script
```
extends Node

# metric that is either on or off based on a value number, like number of lives
export var metric_name = "player_lives"
export var value = 1 # value to compare 

# update on scene start
func _ready():
	update_display()
	
# update called by metrics manager
func update_display():
	self.visible = true if Global[metric_name] >= value else false
```