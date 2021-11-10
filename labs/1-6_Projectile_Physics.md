---
layout: notes
title: Projectile Physics
return: ./labs
label: Labs
---

This lab covers adding projectiles using a `PackedScene` with physics in Godot.

## 1. Setup
- Use a game that you're currently working on, or use a copy of the [Developer Default](./Developer_Default.zip) project
- Download the [Assets](./Assets.zip) folder for any scenes or art you may need

## 2. Create the Projectile scene
- Create a new scene called `Projectile.tscn`
- The default Node2D is an `Area2D`
- Name the node `Projectile`
- Set the collision layer to `Projectile`
	- You may need to add a label for a new Projectile layer in `Project > Project Settings > Layer Names > 2d Physics`
- Set the Mask to `ObstacleHit` and `Platform`
- Add an `AnimatedSprite` and add the projectile animations for `Fly` and `Hit`
- Add a `CollisionShape2D` with a shape that matches the projectile art
- Add a `VisibilityNotifier2D`
- Add the `Projectile.gd` script

## 3. Modify PlayerController.gd
- Add a `PackedScene` export variable and then choose the `Projectile` scene in the `Script Variables`
- Update the `PlayerController.gd` script

## 4. Documentation
- Post screen shots or video on Open Lab

## Bonus
- #1 - Add an item that the player has to collect to enable the projectile
- #2 - Add projectile to an Enemy

## Update to PlayerController.gd
```
# add to global values
export (PackedScene) var projectile
var is_moving = true

func player_update(delta):
	# after input
	# shoot projectile
	if Input.is_action_just_pressed("shoot"):
		$AnimatedSprite.play('Shoot')
		is_moving = false
		shoot()

	# updated animations
	if not is_on_floor() and is_moving:
		$AnimatedSprite.play("Jump")
	elif abs(velocity.x) > 1 and is_moving:
		$AnimatedSprite.play("Walk")
	elif is_moving:
		$AnimatedSprite.play("Idle")
```

## Full Projectile.gd script
```
extends Area2D

var speed = 200
var velocity = Vector2()
var is_flying = true

func _ready():
	velocity = get_local_mouse_position().normalized() * speed

func _physics_process(delta):
	if is_flying:
		velocity.y += gravity * delta
		position += velocity * delta
		rotation = velocity.angle()
		
	if not $VisibilityNotifier2D.is_on_screen():
		queue_free()

func _on_Projectile_area_entered(area):
	# assume body is moving obstacle
	area.get_parent().hit()
	is_flying = false
	$AnimatedSprite.play('Hit')

func _on_Projectile_body_entered(body):
	is_flying = false
	$AnimatedSprite.play('Hit')
	
func _on_AnimatedSprite_animation_finished():
	if not is_flying:
		queue_free()
```