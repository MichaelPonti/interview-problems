var elements = document.getElementsByTagName("button");
var n = elements.length;

for (var i = 0; i < n; i++) {
	elements[i].onclick = function() {
		alert(`this is ${i + 1}`);
	};
}
