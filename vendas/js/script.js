function mostrar_site() {
	document.querySelector('.mostrarint').classList.add('mostrar');
	document.querySelector('.mostrarint').classList.remove('mostrarsite');
	document.querySelector('.mostrarint').classList.remove('mostrarint');
	document.querySelector('.site').classList.add('mostrar__site');
}
function img1() {
	document.querySelector('#back').classList.add('of1');
	document.querySelector('#back').classList.remove('of2');
	document.querySelector('#back').classList.remove('of3');
}
function img2() {
	document.querySelector('#back').classList.add('of2');
	document.querySelector('#back').classList.remove('of1');
	document.querySelector('#back').classList.remove('of3');
}
function img3() {
	document.querySelector('#back').classList.add('of3');
	document.querySelector('#back').classList.remove('of2');
	document.querySelector('#back').classList.remove('of1');
}
function subirtela() {
	window.scrollTo({
		top,
		behavior: 'smooth'
	})
	behavior: 'smooth';
}
function desaparecer() {
	if(window.scrollY === 0){
		document.querySelector('.scroll').style.display = 'none';
	}else {
	document.querySelector('.scroll').style.display = 'block';
	}
}
window.addEventListener('scroll', desaparecer);