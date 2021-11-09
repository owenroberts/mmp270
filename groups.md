---
layout: main
title: Groups
schedule: false
---

Add students
<input id="student" placeholder="Student Name">
<button id="add">Create Groups</button>
<ul id="list"></ul>
Size:
<input type="number" id="quantity" name="quantity" min="1" value="4">
<button id="group">Create Groups</button>
<div id="groups"></div>

<script>

window.onload = function() {
	const student = document.getElementById('student');
	const addBtn = document.getElementById('add');
	const list = document.getElementById('list');
	const number = document.getElementById('quantity');
	const groupBtn = document.getElementById('group');
	const groups = document.getElementById('groups');

	const students = [];
	const prevGroups = [];
	let n = number.value;

	addBtn.onclick = function() {
		list.push(student.value);
		student.value = '';
	};

	function makeGroups() {
		const groups = [];
		let counter = 0;
		while (students.length > 0) {
			
		}
	}
};

</script>
