const burger = document.querySelector('.site-bar__burger');
const siteBar = document.querySelector('.sit-bar');
const list = document.querySelector('.list');

burger.addEventListener("click", openBar);

function openBar(event) {
	burger.classList.toggle('active');
	siteBar.classList.toggle('active');
	list.classList.toggle('active');
	document.body.classList.toggle('lock')
}

list.addEventListener("click", listBar);

function listBar(event) {
	burger.classList.remove('active');
	siteBar.classList.remove('active');
	list.classList.remove('active');
	document.body.classList.remove('lock')
}


document.addEventListener('DOMContentLoaded', readyDom);

window.addEventListener('load', readYload);

function readyDom() {
	const image = document.querySelector('.fullscrin__column img');
	console.log(document.readyState);
	console.log("Документ загружен");
	console.log(image.offsetWidth);
}

function readYload() {
	console.log(document.readyState);
	const image = document.querySelector('.fullscrin__column img');
	console.log("страница загружена");
	console.log(image.offsetWidth);
}