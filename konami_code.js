const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let ind = 0;

function init() {
  // Write your JavaScript code inside the init() function

  const node = document.querySelector('html');
  node.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  });

  function onKeyDownHandler(pressed) {
    const key = parseInt(pressed.detail || pressed.which);
    if (key === code[ind]) {
      ind ++;
      if (ind === code.length) {
        alert("Konomi!");
        ind = 0;
      }
    } else {
      ind = 0;
    }
  }
}
