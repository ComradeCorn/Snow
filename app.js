function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return evt.clientX - rect.left;
}

function returnxPos(pos) {
  console.log(pos);
}
canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  returnxPos(mousePos);
}, false);
