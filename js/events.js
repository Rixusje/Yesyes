function showInput() {
  event.preventDefault()
  var userInput = document.getElementById("userInput").value;
  var display = document.getElementById("display");
  var theForm = document.getElementById("theForm");
  var linebreak = document.createElement("br");
  display.insertAdjacentHTML('beforeend', userInput);
  display.appendChild(linebreak);
  theForm.reset();
}