//opens the answer container
window.addEventListener("DOMContentLoaded", () => {
	let openedAccordionItem = null;
	const questions = document.querySelectorAll(".question-container");
	questions.forEach((question) =>
		question.addEventListener("click", (event) => {
			const clickedAccordionItem = event.currentTarget;

			if (clickedAccordionItem !== openedAccordionItem) {
				toggleElement(clickedAccordionItem);
				toggleElement(openedAccordionItem);
				openedAccordionItem = clickedAccordionItem;
			} else {
				toggleElement(clickedAccordionItem);
				openedAccordionItem = null;
			}
		})
	);
});

function toggleElement(item) {
	if (item === null) {
		//close right away if null
		return;
	}

	//get the next element of questionContainer (answerContainer)
	const sibling = item.nextElementSibling;
	const siblingStyle = getComputedStyle(sibling);

	//get last element of questionContainer (IMG (arrow down))
	const lastChild = item.lastElementChild;
	const lastChildStyle = getComputedStyle(lastChild);

	//get the first element of questionContainer (heading tag)
	const firstChild = item.firstElementChild;
	const firstChildStyle = getComputedStyle(firstChild);

	lastChild.style.transform =
		lastChildStyle.getPropertyValue("transform") === "none"
			? "rotate(180deg)"
			: "none";
	lastChild.style.transition = "all 0.3s ease-in";
	console.log(siblingStyle.getPropertyValue("opacity"));
	firstChild.style.fontWeight =
		firstChildStyle.getPropertyValue("font-weight") === "400" ? "700" : "400";
	sibling.style.margin = "0 0 1rem 0";
	sibling.style.padding = "0 1rem 0 0";
	sibling.style.color = "hsl(240, 6%, 50%)";
	sibling.style.display =
		siblingStyle.getPropertyValue("display") === "none" ? "block" : "none";
}
