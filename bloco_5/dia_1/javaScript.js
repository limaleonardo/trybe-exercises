//E01
function changeTagText(tag, position, text) {
  document.getElementsByTagName(tag)[position].textContent = text;
}

function changeBackgroundColor(specificClass, color) {
  let array = document.getElementsByClassName(specificClass);
  for (let index = 0; index < array.length; index += 1) {
    array[index].style.backgroundColor = color;
  }
}
