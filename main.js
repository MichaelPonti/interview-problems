var elements = document.getElementsByTagName("button");
var n = elements.length;
var i = 0;

for (i = 0; i < n; i++) {
	elements[i].onclick = function() {
		alert(`this is ${i + 1}`);
	};
}
