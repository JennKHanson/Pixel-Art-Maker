// Select color input
// Select size input

// When size is submitted by the user, call //
const submit = $('#button');
const canvas = $('#pixelCanvas');
function makeGrid() {
canvas.children().remove();
const rows = $('#inputHeight').val();
const columns = $('#inputWidth').val();

for (n = 0; n < rows; n++) {
  canvas.append('<tr></tr>');
  for (m = 0; m < columns; m++){
   canvas
    .children()
    .last()
    .append('<td></td>');
}}
}

submit.click(function(event) {
  event.preventDefault();
  makeGrid();

});

canvas.on("click", "td", function() {
  const color = $('#colorPicker').val();
  $(this).css("background-color", color);
});


// None of the click events are working
//6-6 Attempt #1 works! I changed the button type from submit to button. Victory!

// ATTEMPT #1 WORKS (see above) ------
/*
$('.button').on('click', function() {
  makeGrid();
});

*/

/*
// ATTEMPT #2 ------

document.getElementById('button').onclick = function() {
  makeGrid();
};
*/

/*
// ATTEMPT #3 -------

const submit = document.getElementById('button');

submit.AddEventListener('click', function() {
  makeGrid();
});

*/
