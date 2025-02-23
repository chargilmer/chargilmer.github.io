function setDate() {
	const date = new Date();
	const month = date.getMonth();
	const dayOfMonth = date.getDate();
	const dayOfMonth10 = Math.floor(dayOfMonth / 10);
	document.querySelector('.monthPaths').setAttribute('transform', `translate(0 ${-(month * 6)})`);
	document.querySelector('.dayPaths').setAttribute('transform', `translate(0 ${-(dayOfMonth * 6) % 60})`);
	document.querySelector('.dayPaths10').setAttribute('transform', `translate(0 ${- (dayOfMonth10 * 6)})`);
}

window.addEventListener("DOMContentLoaded", setDate);