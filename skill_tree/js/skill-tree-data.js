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
					"points": 10,
					"parents": [],
					"children": ['0.1', '0.2'],
				},
				"Art Intro": {
					"id": 1,
					"video": "link",
					"assignment": "link",
					"type": "Art",
					"points": 10,
					"parents": ['0.0'],
					"children": ['1.0', '2.0', '3.0'],
				},
				"Godot Intro": {
					"id": 2,
					"video": "link",
					"assignment": "link",
					"type": "Godot",
					"points": 10,
					"parents": ['0.0'],
					"children": ['1.0', '2.0', '3.0'],
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
					"points": 10,
					"parents": ['0.1', '0.2'],
					"children": ['0.1', '0.2'],
					"type": "Godot",
					// "sub": {
					// 	"Platformer / Arcade": {
					// 		"Physics": {
					// 			"id": 1,
					// 			"video": "link to video",
					// 			"assignment": "link to assignment?",
					// 			"points": 10,
					// 			"parents": [1.0],
					// 			"opens": [1.2],
					// 		},
					// 		"Mechanics": {
					// 			"id": 2,
					// 			"video": "link to video",
					// 			"assignment": "link to assignment?",
					// 			"points": 10,
					// 			"parents": [1.0],
					// 			"opens": [1.2],
					// 		},
					// 	}
					// }
				},
				
			}
		},
		"Artist": {
			"id": 2,
		},
		"Designer": {
			"id": 3,
		},
		"Sound Design": {
			"id": 4,
		},
		"Publishing": {
			"id": 5,
		},
		"Quality Assurance": {
			"id": 6,
		}
	};
}