/*let intervalId;
window.addEventListener("load", changeDay);
*/

const plantBtnList = document.querySelectorAll(".plant");
const plantWater = new Array(plantBtnList.length).fill(false);
const plantSeed = new Array(plantBtnList.length).fill(false);

let isDay = true;

/*
function changeDay() {
	if (!intervalId) {
		intervalId = setInterval(ChangeColor, 2000);
	}
}
    */

function changeDayMode() {
	if (isDay == false) {
		//je fais grandir les plantes
		for (let i = 0; i < plantBtnList.length; i++) {
			const btn = plantBtnList[i];

			if (plantSeed[i] == true && plantWater[i] == true) {
                btn.classList.remove("aqua")
				btn.textContent = "🌳";
			}
		}
	}

	isDay = !isDay;
	changeColor();
}



function changeColor() {
	const oElem = document.querySelector("body");

	if (isDay == true) {
		oElem.className = "day";
	} else {
		oElem.className = "night";
	}

	//oElem.className = isDay == true ? "day" : "night";
}

for (let i = 0; i < plantBtnList.length; i++) {
	const btn = plantBtnList[i];

	btn.addEventListener("click", () => {
		if (isDay == false) return;

		if (plantSeed[i] == true && plantWater[i] == false) {
			btn.classList.add("aqua");
			plantWater[i] = true;
		}

		if (plantSeed[i] == false) {
			plantSeed[i] = true;
			btn.textContent = "🌱";
		}
	});
}

const intervalId = setInterval(changeDayMode, 10000);
