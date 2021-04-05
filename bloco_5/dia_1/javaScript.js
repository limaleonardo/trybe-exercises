//E01, E04
function changeTagText(tag, position, text) {
  document.getElementsByTagName(tag)[position].textContent = text;
}

//E02, E03
function changeBackgroundColor(specificClass, color) {
  let array = document.getElementsByClassName(specificClass);
  for (let index = 0; index < array.length; index += 1) {
    array[index].style.backgroundColor = color;
  }
}

//E05 
function tagToUppercase(tag, position) {
  document.getElementsByTagName(tag)[position].style.textTransform = 'uppercase';
}