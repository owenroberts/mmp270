---
layout: notes
title: Projectile Physics
return: ./labs
label: Labs
---

This lab covers adding projectiles using a `PackedScene` with physics in Godot.


## Update to PlayerController.gd
```
# add to global values
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