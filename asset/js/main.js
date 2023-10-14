'use strict';

var hamburger = document.querySelector('.hamburger');
var screen = document.querySelector('.screen');
var navigation = document.querySelector('.navigation');

hamburger.addEventListener('click',function(){
    screen.classList.toggle('active');
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//ナビゲーションを開いているときに画面を押しても閉じる
screen.addEventListener('click',function(){
    screen.classList.remove('active');
    navigation.classList.remove('active');
    hamburger.classList.remove('active');
});