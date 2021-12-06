// функция вызова окна
function show_popap(id_popap) {
  var id = "#" + id_popap;
  $(id).addClass('active');
}
 
// функция закрытия окна 
function close_popap(id_popap){
  var id = '#' + id_popap;
  $(id).removeClass("active");
};

function PopupMenu(){
  const button = document.getElementById('MobileMenu')
  const menu = document.getElementById('inf')
  const img = document.getElementById('post')
  const but = document.getElementById('close')

  button.classList.toggle('active')
  menu.classList.toggle('active')
  img.classList.toggle('active')
  but.classList.toggle('active')
}
