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
					"video": "link to video",
					"type": "Open Lab",
					"assignment": "link to assignment?",
					"points": 1,
					"parents": [],
					"children": ['0-1', '0-2'],
				},
				"Art Intro": {
					"id": 1,
					"video": "link",
					"assignment": "link",
					"type": "Art",
					"points": 1,
					"parents": ['0-0'],
					"children": ['1-0', '2-0', '3-0'],
				},
				"Godot Intro": {
					"id": 2,
					"video": "link",
					"assignment": "link",
					"type": "Godot",
					"points": 1,
					"parents": ['0-0'],
					"children": ['1-0', '2-0', '3-0'],
				}
			}
		},
		"Developer": {
			"id": 1,
			"modules": {
				"Programming Intro": {
					"id": 0,
					"video": "link to video",
					"assignment": "link to assignment?",
					"points": 2,
					"parents": ['0-1', '0-2'],
					"children": ['0-1', '0-2'],
					"type": "Godot",
				},
				"Obstacles and Collisions": {
					"id": 1,
					"video": "link to video",
					"assignment": "link to assignment?",
					"points": 2,
					"parents": ['1-0'],
					"children": ['1-4', '1-5'],
				},
				"Collecting Items": {
					"id": 2,
					"type": "Godot",
					"points": 2,
					"parents": ['1-0'],
				},
				"Dialog System and Plugins": {
					"id": 3,
					"type": "Godot",
					"points": 2,
					"parents": ['1-0'],
				},
				"NPCs": {
					"id": 4,
					"type": "Godot",
					"points": 3,
					"parents": ['1-1'],
				},
				"Physics": {
					"id": 5,
					"type": "Godot",
					"points": 3,
					"parents": ['1-1'],
				}
			}
		},
		"Artist": {
			"id": 2,
			"modules": {
				"Character Design": {
					"id": 0,
					"type": "Art",
					"points": 2,
					"parents": ['0-1', '0-2'],
					"children": ['2-1', '2-2', '2-3']
				},
				"Character Animation": {
					"id": 1,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
				},
				"Rewards": {
					"id": 2,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
				},
				"Obstacles and Enemies": {
					"id": 3,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"children": ['2-4']
				},
				"NPCs": {
					"id": 4,
					"type": "Art",
					"points": 4,
					"parents": ['2-3'],
				},
				"Background and Scenery": {
					"id": 5,
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"children": ['2-6']
				},
				"Platforms": {
					"id": 6,
					"type": "Art",
					"points": 3,
					"parents": ['2-5'],
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
					"parents": ['0-1', '0-2'],
					"children": ['3-1', '3-2'],
				},
				"Checkpoints": {
					"id": 1,
					"points": 3,
					"type": "Godot",
					"parents": ['3-0'],
				},
				"Portals": {
					"id": 2,
					"points": 3,
					"type": "Godot",
					"parents": ['3-0']
				},
				"User Interface Design": {
					"id": 3,
					"points": 2,
					"type": "Art",
					"parents": ['0-1', '0-2'],
					"children": ['3-4', '3-5'],
				},
				"User Interface Layout": {
					"id": 4,
					"points": 3,
					"type": "Godot",
					"parents": ['3-3']
				},
				"Metrics": {
					"id": 5,
					"points": 3,
					"type": "Godot",
					"parents": ['3-3']
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
					"parents": ['0-1', '0-2'],
				},
				"Interface Sounds": {
					"id": 1,
					"points": 2,
					"type": "Audio",
					"parents": ['0-1', '0-2'],
				},
				"Background Music": {
					"id": 2,
					"points": 2,
					"type": "Audio",
					"parents": ['0-1', '0-2'],
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
				},
				"Publishing on Itch.io": {
					"id": 1,
					"type": "Itch",
					"points": 5,
					"parents": ['5-0'],
				},
			}
		},
		"Quality Assurance": {
			"id": 6,
			"modules": {
				"User Testing": {
					"id": 0,
					"type": "Open Lab",
					"points": 5,
					"parents": ['5-1'],
				}
			}
		}
	};
}