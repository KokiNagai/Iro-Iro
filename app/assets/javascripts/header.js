function headerCursorOver(number) {
  let hnn = document.querySelector('.helpNav-' + number);
  hnn.style.borderTop = "4px solid #ffb6c1";
  hnn.classList.add('cursorAdd');
  document.querySelector('.helpNavList-' + number).style.display = 'block';
};

function headerCursorOut(number) {
  let hnn = document.querySelector('.helpNav-' + number);
  hnn.style.borderTop = "4px solid transparent";
  hnn.classList.remove('cursorAdd')
  document.querySelector('.helpNavList-' + number).style.display = 'none';
};
