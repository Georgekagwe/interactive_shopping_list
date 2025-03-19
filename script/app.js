const shoppingList = ['Managu', 'Mrenda', 'Matumbo'];

// Utility functions for DOM manipulation
function createAnElement(element) {
	return document.createElement(element);
}

function addText(element, text) {
	element.innerText = text;
}

function appendChild(parentElement, childElement) {
	parentElement.appendChild(childElement);
}

function select(selector) {
	return document.querySelector(selector);
}

function listen(element, event, callback) {
	element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
	element.setAttribute(attribute, content);
}

listen(document, 'DOMContentLoaded', displayItems);

function displayItems() {
	const ol = select('ol'); // Ensure it's selected inside the function
	if (!ol) return; // Prevents error if <ol> is missing

	shoppingList.forEach((item) => {
		createAlistItem(item, ol);
	});
}

function createAlistItem(item, ol) {
	const li = createAnElement('li');
	addText(li, item);
	appendChild(ol, li);

	// Add click event listener
	listen(li, 'click', () => {
		li.classList.toggle('checked'); // Fixed `classList`
	});
}
