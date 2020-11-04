var words = ["TEAMO", "CARIO", "ADORO", "ENAMORADO", "RICA", "TUS LABIOS", "COMERSE", "LAMER", "MOJADO", "JUNTOS", "CARTAS DE PLACER"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(1500, 2000));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}