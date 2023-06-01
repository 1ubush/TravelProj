//    Выводит иконки HTML/CSS/JS

let scrolling = document.getElementById('bot');

scrolling.innerHTML = (`
   <img id="bottomScroll" src="img/html.png" alt="html">
   <img id="bottomScroll" src="img/css.png" alt="css">
   <img id="bottomScroll" src="img/js.png" alt="js">
`);


function reversePhoto() {                                   //
   let me = document.getElementById('plan');             //
   me.src = "img/me.jpg";                                //    Заменить фото планеты на мою фотку из резюме.
}                                                           //
onclick.reversePhoto();                                     //

