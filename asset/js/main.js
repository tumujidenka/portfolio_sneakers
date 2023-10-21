'use strict';

var hamburger = document.querySelector('.hamburger');
var screen = document.querySelector('.screen');
var navigation = document.querySelector('.navigation');
var images = document.querySelectorAll('.contents__figure>img')//9つのimg要素を取得

var links = document.querySelectorAll('.nav-menu__list>li>a');
var pickup = document.getElementById('pickup');
var feature = document.getElementById('feature');
var contact = document.getElementById('contact');


//ナビゲーション：ハンバーガーメニューをクリックしたらナビゲーションを表示する。
hamburger.addEventListener('click',function(){
    screen.classList.toggle('active');
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//ナビゲーション:ナビゲーションを開いているときに画面を押しても閉じる
navigation.addEventListener('click',function(){
    screen.classList.remove('active');
    navigation.classList.remove('active');
    hamburger.classList.remove('active');
});

//feature:各コンテンツの画像が表示領域に20%入ると少し下からふわっと表示させる。
// スクロール時のイベント
window.addEventListener('scroll', function() {
    images.forEach(img => {
        // 画像の上部からの位置
        let imgTop = img.getBoundingClientRect().top;
        // 画像の高さ
        let imgHeight = img.clientHeight;
        // ウィンドウの高さ
        let windowHeight = window.innerHeight;

        // 画像が表示領域に20%入ったかをチェック
        if (imgTop < windowHeight - imgHeight * 0.4 && imgTop + imgHeight * 0.4 > 0) {
        img.classList.add('active');
        }
    });
});

//navigation:スムーススクロール
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // クリックされたリンクのhref値（アンカーのID）を取得
        const href = this.getAttribute('href');
        // アンカーの要素を取得
        const targetElement = document.querySelector(href);
        console.log(targetElement);

        if (!targetElement) return;  // 対象の要素がない場合はスクロールしない

        // 対象の要素のページ上部からの位置を取得
        const rectTop = targetElement.getBoundingClientRect().top;
        const offsetTop = window.pageYOffset;
        const target = rectTop + offsetTop - 80;    
        // スムーススクロールの実行
        window.scrollTo({
            top: target,       // スクロール位置
            behavior: 'smooth' // スムーススクロールを指定 
        });   
    })
}