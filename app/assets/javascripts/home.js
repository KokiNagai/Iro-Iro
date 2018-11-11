function copyColor(number) {
  // for (let numberInc = 1; 1 <= numberInc && 28 >= numberInc; numberInc++)
  let copyTarget = document.getElementById('red--' + number);
  copyTarget.select();
  document.execCommand("Copy");
  alert('コピーが完了しました!');
}

function copyColorGreen(number) {
  let copyTarget = document.getElementById('green--' + number);
  copyTarget.select();
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

function blueSelectAdd(number) {
  let popup = document.getElementById('green-' + number);
  popup.classList.add('selectPopup');
}

function blueSelectRemove(number) {
  let popup = document.getElementById('green-' + number);
  popup.classList.remove('selectPopup');
}
