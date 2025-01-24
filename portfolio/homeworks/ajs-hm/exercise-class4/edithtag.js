let btn = document.getElementById('generateButton');
btn.addEventListener('click', function () {
  const color = document.getElementById('colorInput').value;
  const fontSize = document.getElementById('fontSize').value + 'px';

  changeHtag();

  function changeHtag() {
    const hTag = document.querySelector('h1');
    hTag.style.color = color;
    hTag.style.fontSize = fontSize;
  }
});