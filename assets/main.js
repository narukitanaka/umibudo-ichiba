///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hamberger-wrap').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('.top-header').addClass('hum_top-header_fixed');
    $('.mv-pickup').css('display', 'none');
    $('.ham-txt').text('CLOSE');
    navFlg = true;
  } else {
    $('.hamberger-wrap').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('.top-header').removeClass('hum_top-header_fixed');
    $('.mv-pickup').css('display', '');
    $('.ham-txt').text('MENU');
    navFlg = false;
  }
}

///////////////////////////////////////////
//ハンバーガーメニュー アコーディオン
///////////////////////////////////////////
$(document).ready(function() {
  $(".little-nav").hide();
  $(".nav01 .parent").on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.little-nav').slideToggle(300);
  });
});


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
(function () {
  const fadeIn = document.querySelectorAll(".fadeIn");
  const options = {
    rootMargin: '0px',
    threshold: 0.6
  };
  const observer = new IntersectionObserver(showElement, options);
  fadeIn.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });
  function showElement(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active", `delay-${index + 1}`);
      }
    });
  }
})();


///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});


////////////////////////////////////////////////////////////////////////////////////////
// 下層ヘッダーが画面１番上を離れたら.header-fixedを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to(".under-header", {
  scrollTrigger: {
    start: "top top", // headerのトップがビューポートのトップに達した時にトリガー
    end: "bottom top", // ドキュメントの最下部まで継続
    toggleClass: {targets: ".under-header", className: "header-fixed"} // header要素にheader-fixedクラスを切り替え
  }
});
gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////////////////////////////////////////
// TOPno画面が.header-wrapにきたらヘッダーに.header-fixedを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
const headerWrap = document.querySelector(".header-wrap");
const header = document.querySelector(".top-header");
gsap.to(header, {
  scrollTrigger: {
    trigger: headerWrap,
    start: "bottom top", 
    end: "top top", 
    toggleClass: {targets: header, className: "header-fixed"},
    onLeave: () => header.classList.add("header-fixed"),  
    onEnterBack: () => header.classList.remove("header-fixed"),  
  }
});




//////////////////////////////////////////////////////////////////////////////
//各Swiperイベントの初期化
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {

  //トップMVスライダー
  const swiper = new Swiper(".mv-wiper", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });


  // //TOP・商品詳細 おすすめ
  var recommendswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1200) {
        if (recommendswiper) {
          return;
        } else {
          recommendswiper = new Swiper('.recommend_swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              }
            },
          });
        }
      } else {
          if (recommendswiper) {
            recommendswiper.destroy();
            recommendswiper = undefined;
          } 
      } 
  });

  //ABOUT 美味しい海ぶどうの秘密
  var secretswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1000) {
        if (secretswiper) {
          return;
        } else {
          secretswiper = new Swiper('.p-about_swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 60,
              }
            },
          });
        }
      } else {
          if (secretswiper) {
            secretswiper.destroy();
            secretswiper = undefined;
          } 
      } 
  });


});



////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
