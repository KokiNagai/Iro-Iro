function copyColor(number) {
  let copyTarget = document.getElementById('red-' + number);
  // copyTarget.select();
  document.execCommand("Copy");
  alert('コピーが完了しました!');
}

function redSelectAdd(number) {
  let popup = document.getElementById('red-' + number);
  popup.classList.add('selectPopup');
}

function redSelectRemove(number) {
  let popup = document.getElementById('red-' + number);
  popup.classList.remove('selectPopup');
}
