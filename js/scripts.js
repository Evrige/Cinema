const schemeSvg = document.querySelector(".scheme-svg");
const totalpriceTag = document.querySelector(".price__total");
const button = document.querySelector(".button");
const buttonmenu = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let price = 100;
let totalPrice = 0;

schemeSvg.addEventListener("click", (event) => {
	if (!event.target.classList.contains("booked")) {
		event.target.classList.toggle("active");
		totalPrice = price * schemeSvg.querySelectorAll(".active").length;
		totalpriceTag.textContent = totalPrice;
	}
})
button.addEventListener("click", () => {
	let parent = document.querySelector(".scheme-svg");
	let activeItem = parent.querySelectorAll(".active");
	for (let i = 0; i < activeItem.length; i++) {
		activeItem[i].classList.toggle("active");
	}
	for (let i = 0; i < activeItem.length; i++) {
		activeItem[i].classList.toggle("booked");
	}
	totalpriceTag.textContent = 0;
})

buttonmenu.addEventListener("click", () => {
	menu.classList.toggle("is-open");

})