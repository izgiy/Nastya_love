var bal = document.getElementById('bal');

bal.onmousedown = function(e) {

  var coords = getCoords(bal);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  bal.style.position = 'absolute';
  document.body.appendChild(bal);
  moveAt(e);

  bal.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    bal.style.left = e.pageX - shiftX + 'px';
    bal.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  bal.onmouseup = function() {
    document.onmousemove = null;
    bal.onmouseup = null;
  };

}

bal.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.girl') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
  
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('girl') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('girl') // удаляем активный класс
        }
  
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  })