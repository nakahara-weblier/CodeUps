
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//ドロワーメニュー
  $(".js-hamburger").click(function () {
      $(".js-hamburger").toggleClass("is-open");
      $(".js-drawer-menu").toggleClass("is-open");
      $("body").toggleClass("is-fixed");
  　//LP等ページ内リンクのみの場合は以下もプラス
    $('.js-drawer-menu a[href]').on('click', function(event) {
      $('.js-hamburger').trigger('click');

    });

  // ヘッダーの色を変える
    $(function () {
      $(window).on("scroll", function () {
        const sliderHeight = $(".header__container").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
          $(".js-header").addClass("scloll");
        } else {
          $(".js-header").removeClass("scloll");
        }
      });
    });

  });

  
});

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
  
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                    image.css('opacity','1');
                    $(this).css({'left':'0' , 'right':'auto'});
                    $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
    });
});


  // FVスライダー
const swiper01 = new Swiper(".swiper01", {
  loop: true, // ループ
  speed: 2000, // 少しゆっくり(デフォルトは300)
  effect: 'fade', // フェード
  autoplay: { // 自動再生
    delay: 3000, // 2秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
});

// キャンペーンスライダー
const swiper02 = new Swiper(".swiper02", {
  // loop: true,
  loopAdditionalSlides: 'auto',
  slidesPerView: 'auto',
  grabCursor: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

  // ページトップボタン
  $(function () {
    const pageTop = $("#page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    // フッター手前でストップ
    $("#page-top").hide();
    $(window).on("scroll", function () {
      const scrollHeight = $(document).height();
      const scrollPosition = $(window).height() + $(window).scrollTop();
      const  footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
    // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $("#page-top").css({
          position: "absolute",
          bottom: footHeight,
        });
      } else {
        $("#page-top").css({
          position: "fixed",
          bottom: "0",
        });
      }
    });
  });
  