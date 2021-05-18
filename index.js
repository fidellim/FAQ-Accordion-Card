window.addEventListener("DOMContentLoaded", () => {
	const questions = document.querySelectorAll(".question-container");
	questions.forEach((question) =>
		question.addEventListener("click", () => {
			//get the next element of questionContainer (answerContainer)
			const sibling = question.nextElementSibling;
			const siblingStyle = getComputedStyle(sibling);

			//get last element of questionContainer (IMG (arrow down))
			const lastChild = question.lastElementChild;
			const lastChildStyle = getComputedStyle(lastChild);

			const firstChild = question.firstElementChild;
			const firstChildStyle = getComputedStyle(firstChild);

			lastChild.style.transform =
				lastChildStyle.getPropertyValue("transform") === "none"
					? "rotate(180deg)"
					: "none";
			lastChild.style.transition = "all 0.3s ease-in";

			firstChild.style.fontWeight =
				firstChildStyle.getPropertyValue("font-weight") === "400"
					? "700"
					: "400";
			sibling.style.margin = "0 0 1rem 0";
			sibling.style.padding = "0 1rem 0 0";
			sibling.style.color = "hsl(240, 6%, 50%)";
			sibling.style.display =
				siblingStyle.getPropertyValue("display") === "none" ? "block" : "none";
		})
	);
});

// window.addEventListener("DOMContentLoaded", (event) => {
// 	let openedAnswerAccordion = null;
// 	const questions = document.querySelectorAll(".question-container");
// 	questions.forEach((question) =>
// 		question.addEventListener("click", () => {
// 			const clickedAnswerAccordion = event.currentTarget;
// 			const sibling = question.nextElementSibling;
// 			const siblingStyle = getComputedStyle(sibling);

// 			if (clickedAnswerAccordion !== openedAnswerAccordion) {
// 				sibling.style.margin = "0 0 1rem 0";
// 				sibling.style.padding = "0 1rem 0 0";
// 				sibling.style.color = "hsl(240, 6%, 50%)";
// 				sibling.style.display =
// 					siblingStyle.getPropertyValue("display") === "none"
// 						? "block"
// 						: "none";

// 				openedAnswerAccordion = clickedAnswerAccordion;
// 			} else {
// 				sibling.style.margin = "0 0 1rem 0";
// 				sibling.style.padding = "0 1rem 0 0";
// 				sibling.style.color = "hsl(240, 6%, 50%)";
// 				sibling.style.display =
// 					siblingStyle.getPropertyValue("display") === "none"
// 						? "block"
// 						: "none";

// 				openedAnswerAccordion = null;
// 			}
// 		})
// 	);
// });
