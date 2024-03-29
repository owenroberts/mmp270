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
					"video": 'https://www.youtube.com/watch?v=AFWP4vFI8sM&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=2',
					"link": "0-0_Open_Lab_Intro",
					"type": "Open Lab",
					"points": 1,
					"parents": [],
					"children": ['0-1', '6-0'],
					"dek": "Overview of posting assignments on the Open Lab.  Covers first assigment using skill tree and Open Lab."
				},
				"Art Intro": {
					"id": 1,
					"video": 'https://www.youtube.com/watch?v=HK_e2QnF-TA&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=3',
					"link": "0-1_Art_Intro",
					"type": "Art",
					"points": 1,
					"parents": ['0-0'],
					"children": ['0-2'],
					"dek": "Overview of using Piskel pixel art editor.  Create a user avatar for Open Lab account icon."
				},
				"Godot Intro": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=0-rs77ttuLE&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=4&t=4s",
					"link": "0-2_Godot_Intro",
					"type": "Godot",
					"points": 1,
					"parents": ['0-1'],
					"children": ['1-0', '2-0', '3-0', '4-0', '4-1', '4-2', '5-0'],
					"dek": "Overview of Godot game engine editor and interface.  Add your avatar into a simple Godot game."
				}
			}
		},
		"Developer": {
			"id": 1,
			"modules": {
				"Programming Intro": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=fVj_LgCJiRc&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=13",
					"link": "1-0_Programming_Intro",
					"points": 2,
					"parents": ['0-2'],
					"children": ['1-1', '1-5'],
					"type": "Godot",
					"dek": "Covers basics of adding scripts to Godot.  This will add a global score variable and number of lives for the player.",
					"bonus": true,
					"collab": true,
				},
				"Scene Manager": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=gE1pRrSoLog",
					"link": "1-1_Scene_Manager",
					"points": 2,
					"parents": ['1-0'],
					"children": ['1-2', '1-3'],
					"type": "Godot",
					"dek": "Covers basics of adding scripts to Godot.  This will add a global score variable and number of lives for the player."
				},
				"Collecting Items": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=gE1pRrSoLog",
					"link": "1-2_Collecting_Items",
					"type": "Godot",
					"points": 2,
					"parents": ['1-1'],
					"dek": "Covers writing a script to collect items.",
					"bonus": true,
					"collab": true,
				},
				"Player Physics": {
					"id": 3,
					"video": "https://www.youtube.com/watch?v=i1dUOVQc6hA&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=27",
					"link": "1-3_Player_Physics",
					"points": 2,
					"parents": ['1-1'],
					"children": ['1-4'],
					"type": "Godot",
					"dek": "Adding platformer physics to the PlayerController.",
					"bonus": true,
					"collab": true,
				},
				"Obstacles and Collisions": {
					"id": 4,
					"video": "https://www.youtube.com/watch?v=SFZur_7HNfQ&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=29",
					"link": "1-4_Obstacles_and_Collisions",
					"points": 3,
					"parents": ['1-3'],
					"children": ['1-5'],
					"dek": "Covers scripting for basic obstacles and collisions between the player and other components in the game.",
					"bonus": true,
					"collab": true,	
				},
				"Enemies": {
					"id": 5,
					"video": "https://www.youtube.com/watch?v=Ku25456Te4U&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=30",
					"points": 3,
					"link": "1-5_Enemies",
					"parents": ['1-4'],
					"children": ['1-6'],
					"dek": "Continuing from obstacles and collisions, this lab covers creating moving enemies.",
					"bonus": true,
					"collab": true,	
				},
				"Projectile Physics": {
					"id": 6,
					"video": "https://www.youtube.com/watch?v=7So3eZlfLUo&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=37",
					"link": "1-6_Projectile_Physics",
					"type": "Godot",
					"points": 3,
					"parents": ['1-4'],
					"dek": "Overview of physics in scripts and adding projectiles.",
					"collab": true,	
				},
				// switch these??
				"Dialog System and Plugins": {
					"id": 7,
					"video": "https://www.youtube.com/watch?v=hLuyeVXQ1_c&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=24",
					"link": "1-7_Dialog_Systems_and_Add-Ons",
					"type": "Godot",
					"points": 3,
					"parents": ['1-0'],
					"dek": "Using a Godot Plugin, this adds the ability to add dialog to NPCs.",
					"collab": true,	
				}
			}
		},
		"Artist": {
			"id": 2,
			"modules": {
				"Character Design": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=qlGDx9cXQaE&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=6",
					"type": "Art",
					"link": "2-0_Character_Design",
					"points": 2,
					"parents": ['0-2'],
					"children": ['2-1', '2-6', '2-7'],
					"dek": "Overivew of designing characters.  Create three versions of a character design."
				},
				"Character Animation": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=3Javdc97UbE&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=8",
					"type": "Art",
					"link": "2-1_Character_Animation",
					"points": 3,
					"parents": ['2-0'],
					"collab": true,
					"dek": "Overview of creating a Sprite animation.  Create character animations for idle, walk, and jump states.  Add animations into Godot using Animation editor."
				},
				"Tilesets and Platforms": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=GqKkeKmL1VM&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=12",
					"type": "Art",
					"link": "2-2_Tilesets_and_Platforms",
					"points": 3,
					"parents": ['2-0'],
					"collab": true,
					"dek": "Design platforms and add a Tilemap in Godot."
				},
				"Rewards": {
					"id": 3,
					"video": "https://www.youtube.com/watch?v=zy-5MNfZPIg&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=17",
					"link": "2-3_Rewards",
					"type": "Art",
					"points": 3,
					"parents": ['2-1'],
					"collab": true,
					"dek": "Design three types of rewards.  Create one Sprite animation and add to Godot."
				},
				"Obstacles and Enemies": {
					"id": 4,
					"video": "https://www.youtube.com/watch?v=4FfVHjFAifw&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=25",
					"link": "2-4_Obstacles_and_Enemies",
					"type": "Art",
					"points": 3,
					"parents": ['2-1'],
					"children": ['2-4'],
					"collab": true,
					"dek": "Design three enemies and/or obstacles.  Create one Sprite animation and add to Godot."
				},
				"NPCs": {
					"id": 5,
					"video": "https://www.youtube.com/watch?v=armTjmJ7cXk&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=22",
					"link": "2-5_NPCs",
					"type": "Art",
					"points": 3,
					"parents": ['2-1'],
					"collab": true,
					"dek": "Design an NPC character.  Create an Idle sprite animation and add to Godot."
				},
				"Scenery": {
					"id": 6,
					"video": "https://www.youtube.com/watch?v=lxx3q-0uuj8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=10",
					"link": "2-6_Scenery",
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"collab": true,
					"dek": "Design three scenic elements and add to Godot using Godot Canvas layers."
				},
				"Backgrounds": {
					"id": 7,
					"video": "https://www.youtube.com/watch?v=E39rVWlHlkA&list=PLSqAxglrKGAxAuQNZ4YRQViMI5wuwSIEo&index=19",
					"link": "2-7_Backgrounds",
					"type": "Art",
					"points": 3,
					"parents": ['2-0'],
					"collab": true,
					"dek": "Add a background and setup paralax scrolling"
				},
				"Checkpoints and Portals": {
					"id": 8,
					"video": "https://www.youtube.com/watch?v=LwN65Uc6dIg&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=39",
					"link": "2-8_Checkpoints_and_Portals",
					"points": 3,
					"type": "Godot",
					"parents": ['2-0'],
					"collab": true,
					"dek": "Design art for checkpoints and portals."
				}
			}
		},
		"Level Design": {
			"id": 3,
			"modules": {
				"Designing with TileMaps": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=qNzSLkQKcWs&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=15",
					"points": 2,
					"link": "3-0_Designing_with_TileMaps",
					"type": "Godot",
					"parents": ['0-2'],
					"children": ['3-1'],
					"collab": true,
					"dek": "TileMaps are the basic level design starting point for Godot.  Overview of creating a TileMap and TileSets for Single and Auto Tiles."
				},
				"Level Design": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=n7YA1jRjfq4&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=31",
					"points": 2,
					"link": "3-1_Level_Design",
					"type": "Godot",
					"parents": ['3-0'],
					"children": ['3-2', '3-3', '3-4'],
					"collab": true,
					"dek": "Overview of Level Design and creating a level in Godot."
				},
				"Checkpoints and Portals": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=6Tb3Dkozl6I&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=40",
					"link": "3-2_Checkpoints_and_Portals",
					"points": 3,
					"type": "Godot",
					"parents": ['3-1'],
					"collab": true,
					"dek": "Adding check points to save level progress and portals to go to new levels in Godot."
				},
				"Level Design 2": {
					"id": 3,
					"video": "https://www.youtube.com/watch?v=6Tb3Dkozl6I&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=40",
					"link": "3-3_Level_Design_2",
					"points": 4,
					"type": "Godot",
					"parents": ['3-2'],
					"collab": true,
					"dek": "Design a second level in Godot."
				},
				
			}
		},
		"Sound Design": {
			"id": 4,
			"modules": {
				"Gameplay Sound Effects": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=qedr1J72L0s&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=33",
					"points": 2,
					"link": "4-0_Gameplay_Sound_Effects",
					"type": "Audio",
					"parents": ['0-2'],
					"collab": true,
					"dek": "Creating sound effects and adding them into Godot scene."
				},
				"Interface Sounds": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=qedr1J72L0s&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=33",
					"points": 2,
					"link": "4-1_Interface_Sounds",
					"type": "Audio",
					"parents": ['0-2'],
					"collab": true,
					"dek": "Sound effects for UI interacations."
				},
				"Background Music": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=bIvjTxfWHAk&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=34",
					"points": 2,
					"link": "4-2_Background_Music",
					"type": "Audio",
					"parents": ['0-2'],
					"collab": true,
					"dek": "Adding background music in Godot."
				},
			}
		},
		"User Interface Design": {
			"id": 5,
			"modules": {
				"User Interface Design": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=EImHEb0KZXE&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=19",
					"link": "5-0_User_Interface_Design",
					"points": 2,
					"type": "Art",
					"parents": ['0-2'],
					"children": ['5-1'],
					"collab": true,
					"dek": "Create visual assets to use for interface like buttons and title screens."
				},
				"User Interface Layout": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=nTx6YMZhnb4&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=21",
					"link": "5-1_User_Interface_Layout",
					"points": 3,
					"type": "Godot",
					"parents": ['5-0'],
					"children": ['5-1'],
					"collab": true,
					"dek": "Adding visual assets for UI into Godot and overview of Godot UI layout."
				},
				"Metrics": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=KEfovNboeGY&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=44",
					"link": "5-2_Metrics",
					"points": 3,
					"type": "Godot",
					"parents": ['5-1'],
					"collab": true,
					"dek": "Art for metrics like score and player lives and layout for Metrics in Godot."
				}
			}
		},
		"Publishing": {
			"id": 6,
			"modules": {
				"Exporting a Build": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=N6rnoLKQQaU&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=41",
					"link": "6-0_Exporting_a_Build",
					"type": "Godot",
					"points": 5,
					"parents": ['0-2'],
					"collab": true,
					"dek": "Overview of creating builds for Mac, Windows and Web platforms from Godot."
				},
				"Publishing on Itch.io": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=LAYDZCvo_Ek&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=42", 
					"link": "6-1_Publishing_on_Itch",
					"type": "Itch",
					"points": 5,
					"parents": ['6-0'],
					"children": ['6-2'],
					"collab": true,
					"dek": "Creating an Itch account to publish a Godot project."
				},
				"User Testing": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=kgEQB3LOugU&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=43",
					"link": "6-2_User_Testing",
					"type": "Open Lab",
					"points": 5,
					"parents": ['6-1'],
					"collab": true,
					"dek": "Create a user testing survey and share with classmates.  Write an Open Lab post analyzing the survey results."
				}
			}
		},
		"Research": {
			"id": 7,
			"modules": {
				"Crawford Chapter 1": {
					"id": 0,
					"video": "https://www.youtube.com/watch?v=XlweYmqvsv8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=7",
					"type": "Reading",
					"link": '7-0_Research',
					"points": 1,
					"parents": ['0-0'],
					"research": "https://www.digitpress.com/library/books/book_art_of_computer_game_design.pdf",
					"dek": "The Art of Computer Game Design by Chris Crawford, Chapter 1: What is a Game?",
					"available": true,
				},
				"Understanding Comics Chapter 2": {
					"id": 1,
					"video": "https://www.youtube.com/watch?v=XlweYmqvsv8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=7",
					"type": "Reading",
					"link": '7-0_Research',
					"points": 1,
					"parents": ['0-0'],
					"research": "http://270.owen.cool/notes/character/readings/mccloud.pdf",
					"dek": "Understanding Comics by Scott McCloud, Chapter 2: The Vocabulary of Comics",
					"available": true,
				},
				"Video Game History Timeline": {
					"id": 2,
					"video": "https://www.youtube.com/watch?v=XlweYmqvsv8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=7",
					"type": "Reading",
					"link": '7-0_Research',
					"points": 1,
					"parents": ['0-0'],
					"research": "https://www.museumofplay.org/about/icheg/video-game-history/timeline",
					"dek": "Video Game History Timeline.  Consider how technological changes have effected the development of video games.",
					"available": true,
				},
				"Sorting Out the Genre Muddle": {
					"id": 3,
					"video": "https://www.youtube.com/watch?v=XlweYmqvsv8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=7",
					"type": "Reading",
					"link": "7-0_Research",
					"points": 1,
					"parents": ['0-0'],
					"research": "https://www.gamedeveloper.com/design/the-designer-s-notebook-sorting-out-the-genre-muddle",
					"dek": "The Designer's Notebook: Sorting Out the Genre Muddle by Ernest Adams",
					"ava": true,
				},
				"Syoban Action": {
					"id": 4,
					"video": "https://www.youtube.com/watch?v=XlweYmqvsv8&list=PLSqAxglrKGAyc_-fTzVPtGC_x4WVlfr_v&index=7",
					"type": "Game",
					"link": "7 d-0_Research",
					"points": 1,
					"parents": ['0-0'],
					"research": "https://int3.github.io/open-syobon-action.js/",
					"dek": "Syoban Action (Cat Mario) by Chiko.  An early indie game freeware game, play the game and record your playthrough or take screen shots and include commentary.",
					"ava": true,
				}
			}
		}
	};
}