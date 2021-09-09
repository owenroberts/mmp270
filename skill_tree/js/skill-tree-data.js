/*
	all of the data in json format
	the main type is a skill section
*/

export default function SkillTreeDataProvider() {
	return {
		"Apprentice": {
			"id": 0,
			"modules": {
				"Open Lab Intro": {
					"id": 0,
					"link": "0-0_Open_Lab_Intro",
					"type": "Open Lab",
					"points": 1,
					"parents": [],
					"children": ['0-1', '6-0'],
					"dek": "Overview of posting assignments on the Open Lab.  Covers first assigment using skill tree and Open Lab."
				},
				"Art Intro": {
					"id": 1,
					"link": "0-1_Art_Intro",
					"type": "Art",
					"points": 1,
					"parents": ['0-0'],
					"children": ['0-2'],
					"dek": "Overview of using Piskel pixel art editor.  Create a user avatar for Open Lab account icon."
				},
				"Godot Intro": {
					"id": 2,
					"link": "0-2_Godot_Intro",
					"type": "Godot",
					"points": 1,
					"parents": ['0-1'],
					"children": ['1-0', '2-0', '3-0', '4-0', '4-1', '4-2'],
					"dek": "Overview of Godot game engine editor and interface.  Add your avatar into a simple Godot game."
				}
			}
		},
		"Developer": {
			"id": 1,
			"modules": {
				"Programming Intro": {
					"id": 0,
					"video": "link to video",
					"points": 2,
					"parents": ['0-2'],
					"children": ['1-1', '1-5'],
					"type": "Godot",
					"dek": "Covers basics of adding scripts to Godot.  This will add a global score variable and number of lives for the player."
				},
				"Player Physics": {
					"id": 1,
					"video": "link to video",
					"points": 2,
					"parents": ['1-0'],
					"children": ['1-2', '1-3'],
					"type": "Godot",
					"dek": "Adding platformer physics to the PlayerController."
				},
				"Obstacles and Collisions": {
					"id": 2,
					"video": "link to video",
					"points": 2,
					"parents": ['1-1'],
					"children": ['1-4'],
					"dek": "Covers scripting for basic obstacles and collisions between the player and other components in the game."
				},
				"Collecting Items": {
					"id": 3,
					"type": "Godot",
					"points": 2,
					"parents": ['1-1'],
					"dek": "Covers writing a script to collect items."
				},
				"Physics": {
					"id": 4,
					"type": "Godot",
					"points": 3,
					"parents": ['1-2'],
					"dek": "Overview of physics in scripts and adding projectiles."
				},

				// switch these??
				"Dialog System and Plugins": {
					"id": 5,
					"type": "Godot",
					"points": 2,
					"parents": ['1-0'],
					"dek": "Using a Godot Plugin, this adds the ability to add dialog to NPCs."
				},
				"NPCs": {
					"id": 6,
					"type": "Godot",
					"points": 3,
					"parents": ['1-5'],
					"dek": "Adding NPCs (non-player-characters) to an RPG game."
				}
			}
		},
		"Artist": {
			"id": 2,
			"modules": {
				"Character Design": {
					"id": 0,
					"type": "Art",
					"link": "2-0_Character_Design",
					"points": 2,
					"parents": ['0-2'],
					"children": ['2-1', '2-2', '2-3'],
					"dek": "Overivew of designing characters.  Create three versions of a character design."
				},
				"Character Animation": {
					"id": 1,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"dek": "Overview of creating a Sprite animation.  Create character animations for idle, walk, and jump states.  Add animations into Godot using Animation editor."
				},
				"Rewards": {
					"id": 2,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"dek": "Design three types of rewards.  Create one Sprite animation and add to Godot."
				},
				"Obstacles and Enemies": {
					"id": 3,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"children": ['2-4'],
					"dek": "Design three enemies and/or obstacles.  Create one Sprite animation and add to Godot."
				},
				"NPCs": {
					"id": 4,
					"type": "Art",
					"points": 4,
					"parents": ['2-3'],
					"dek": "Design an NPC character.  Create an Idle sprite animation and add to Godot."
				},
				"Scenery": {
					"id": 5,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"children": ['2-6', '2-7'],
					"dek": "Design three scenic elements and add to Godot using Godot Canvas layers."
				},
				"Backgrounds": {
					"id": 6,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"dek": "Add a background and setup paralax scrolling"
				},
				"Platforms": {
					"id": 7,
					"type": "Art",
					"points": 3,
					"parents": ['2-5'],
					"dek": "Design platforms and add a Tilemap in Godot."
				}
			}
		},
		"Designer": {
			"id": 3,
			"modules": {
				"Level Design": {
					"id": 0,
					"points": 2,
					"type": "Godot",
					"parents": ['0-2'],
					"children": ['3-1', '3-2'],
					"dek": "Overview of Level Design and creating a level in Godot."
				},
				"Checkpoints": {
					"id": 1,
					"points": 3,
					"type": "Godot",
					"parents": ['3-0'],
					"dek": "Adding check points to save level progress in Godot."
				},
				"Portals": {
					"id": 2,
					"points": 3,
					"type": "Godot",
					"parents": ['3-0'],
					"dek": "Adding portals to go to new levels in Godot."
				},
				"Level Design 2": {
					"id": 3,
					"points": 3,
					"type": "Godot",
					"parents": ['3-0'],
					"dek": "Design a second level in Godot."
				},
				"User Interface Design": {
					"id": 4,
					"points": 2,
					"type": "Art",
					"parents": ['0-2'],
					"children": ['3-4', '3-5'],
					"dek": "Create visual assets to use for interface like buttons and title screens."
				},
				"User Interface Layout": {
					"id": 5,
					"points": 3,
					"type": "Godot",
					"parents": ['3-3'],
					"dek": "Adding visual assets for UI into Godot and overview of Godot UI layout."
				},
				"Metrics": {
					"id": 6,
					"points": 3,
					"type": "Godot",
					"parents": ['3-3'],
					"dek": "Art for metrics like score and player lives and layout for Metrics in Godot."
				}
			}
		},
		"Sound Design": {
			"id": 4,
			"modules": {
				"Gameplay Sound Effects": {
					"id": 0,
					"points": 2,
					"type": "Audio",
					"parents": ['0-2'],
					"dek": "Creating sound effects and adding them into Godot scene."
				},
				"Interface Sounds": {
					"id": 1,
					"points": 2,
					"type": "Audio",
					"parents": ['0-2'],
					"dek": "Sound effects for UI interacations."
				},
				"Background Music": {
					"id": 2,
					"points": 2,
					"type": "Audio",
					"parents": ['0-2'],
					"dek": "Adding background music in Godot."
				},
			}
		},
		"Publishing": {
			"id": 5,
			"modules": {
				"Exporing a Build": {
					"id": 0,
					"type": "Godot",
					"points": 5,
					"parents": ['@0', '@1', '@2'],
					"dek": "Overview of creating builds for Mac, Windows and Web platforms from Godot."
				},
				"Publishing on Itch.io": {
					"id": 1,
					"type": "Itch",
					"points": 5,
					"parents": ['5-0'],
					"dek": "Creating an Itch account to publish a Godot project."
				},
				"User Testing": {
					"id": 2,
					"type": "Open Lab",
					"points": 5,
					"parents": ['5-1'],
					"dek": "Create a user testing survey and share with classmates.  Write an Open Lab post analyzing the survey results."
				}
			}
		},
		"Research": {
			"id": 6,
			"modules": {
				"Crawford Chapter 1": {
					"id": 0,
					"type": "Reading",
					"link": '6-0_Research',
					"points": 1,
					"parents": ['0-0'],
					"research": "https://www.digitpress.com/library/books/book_art_of_computer_game_design.pdf",
					"isAvailable": true,
					"dek": "The Art of Computer Game Design by Chris Crawford, Chapter 1: What is a Game?"
				},
				"Understanding Comics Chapter 2": {
					"id": 1,
					"type": "Reading",
					"link": '6-0_Research',
					"points": 1,
					"parents": ['0-0'],
					"research": "http://270.owen.cool/notes/character/readings/mccloud.pdf",
					"isAvailable": true,
					"dek": "Understanding Comics by Scott McCloud, Chapter 2: The Vocabulary of Comics"
				}
			}
		}
	};
}