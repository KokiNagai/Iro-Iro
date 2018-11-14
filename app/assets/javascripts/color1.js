function redImage(number) {
  let sample = document.getElementById('sample--' + number);
  sample.select();
  document.execCommand('Copy');
  alert('コピーが完了しました！')
}
