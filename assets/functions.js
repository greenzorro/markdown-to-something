$(function () {

	alert(toHtml("Markdown **rocks**."));

})


// convert markdown to html
function toHtml (markdown) {
	var converter = new Showdown.converter();
	return converter.makeHtml(markdown);
}