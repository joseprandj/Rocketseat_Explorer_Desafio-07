const screenFirst = document.querySelector(".screen1");
const screenSecond = document.querySelector(".screen2");

screenFirst.querySelector('img').addEventListener('click', toggle)
screenSecond.querySelector('button').addEventListener('click', toggle)

function toggle(){
  screenFirst.classList.toggle('hide');
  screenSecond.classList.toggle('hide');
}