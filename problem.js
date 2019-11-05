"use strict";

let BizObject = {
	clearSchedule: function() {
		console.log("clearSchedule");
		let finishedDiv = document.getElementById("btnResult");
		finishedDiv.innerText = "successfully cleared schedule";
	},

	clearStorage: function() {
		setTimeout(function() {
			console.log("clearStorage");
			this.clearSchedule();
		}, 500);
	},

	resetData: function() {
		console.log("resetData");
		this.clearStorage();
	}
};

let btnProblem = document.getElementById("anotherProblem");
btnProblem.addEventListener("click", function() {
	BizObject.resetData();
});

