//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {

  // 클릭시 점멸
  var isGrayscale = false;

  function flash(e) {
    $(".flash")
      .show() // show the hidden div
      .animate({ opacity: 1 }, 100)
      .fadeOut(500)
      .css({ opacity: 0.5 });
  
    // .sample-slider img에 filter를 적용 또는 제거
    if (isGrayscale) {
      $(".sample-slider img").css("filter", "");
      isGrayscale = false;
    } else {
      $(".sample-slider img").css("filter", "grayscale(1)");
      isGrayscale = true;
    }
  }
  
  $(".flash").hide();
  $(".visual-camera").click(function (e) {
    flash(e);
  });
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [950, 2050, 4800, 5700 ,6300];
  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".nav ul li");
  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".nav ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      // li 의 모든 클래스 제거
      navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate({ scrollTop: sectionYpos[index] }, "slow");
    });
  });

  //  반응형
    // 각 섹션의 위치값(세로스크롤 위치)
    const mbsectionYpos = [900, 1700, 4300, 5000 ,6100];
    // 클래스 nav 의 li 를 찾아라
    // 저장한다. 재활용하기 위해서
    const mbnavLis = $(".nav-mb ul li");
    // li 에 a 태그를 클릭을 해서 스크롤을 이동
    const mbnavLisA = $(".nav-mb ul li a");
    // 클릭 기능 구현
    $.each(mbnavLisA, function (index, item) {
      // item 은 a 태그를 말합니다.
      // item 을 클릭을 할 겁니다.
      // item 은 html 태그 (jQuery 용도)
      $(this).click(function (event) {
        // a 태그의 href 막기
        event.preventDefault();
        // li 의 모든 클래스 제거
        mbnavLis.removeClass("focus-active");
        // 클릭된 li 에 focus-active 추가하기
        mbnavLis.eq(index).addClass("focus-active");
        // 2. 클릭하면 스크롤바가 움직인다.
        $("html, body").animate({ scrollTop: mbsectionYpos[index] }, "slow");
      });
    });
  

  /* 슬라이드 */
  var detailSlide = $(".detail-slide");
  detailSlide.owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    center: true,
    callbacks: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: false,
  });

  // detail-slide 마우스 오버 효과
  const items = detailSlide.find(".item");
  $.each(items, function (index, item) {
    // 큰 이미지
    const bigPics = $(item).find(".detail-pic img");
    // 색상버튼들
    const colorBalls = $(item).find(".detail-color > div");
    // 글씨
    const txts = $(item).find(".detail-info");
    // 색상이름
    const colorNames = $(item).find(".detail-info .color-name p");
    $.each(colorBalls, function (index2, item2) {
      $(item2).mouseenter(function () {
        bigPics.hide();
        $(bigPics[index2]).show();
        colorNames.hide();
        $(colorNames[index2]).show();
        const color = $(this).css("background-color");
        txts.css("color", color);
      });
    });
  });
});
// 로딩 화면 구현
var _showPage = function() {
  var loader = $("div.loader");
  var loaderwrap = $("div.loader-wrap");
  var wrap = $("div.wrap");
  loader.css("display", "none");
  loaderwrap.css("display","none")
  wrap.addClass("visible");   // 메인 페이지 서서히 나타남
  
};
// 페이지 로딩이 완료되면 일정 시간 후에 _showPage 함수를 호출하여 화면 전환
$(window).on("load", function() {
  // 로딩 화면을 보여주기 위한 시간(밀리초) 설정

  var loadingDuration = 2500; // 예: 3000 밀리초 = 3초


  // 로딩 화면을 표시한 후에 _showPage 함수를 호출하는 지연 실행
  setTimeout(function() {
    _showPage();
  }, loadingDuration);
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {};


window.addEventListener("load", function () {

  // 모바일 메뉴 토글
  const toggleButton = document.getElementById('toggleButton');
const navMb = document.querySelector('.nav-mb');

toggleButton.addEventListener('click', () => {
    if (navMb.style.opacity === '1') {
        navMb.style.opacity = '0';
    } else {
        navMb.style.opacity = '1';
    }
});
  // swiper
  const swiper = new Swiper(".sample-slider", {
    loop: true,
    speed: 1300,
    slidesPerView: 5,
    spaceBetween: 150,
    autoplay: { delay: 0 },
    disableOnInteraction: false,
    breakpoints: {
      320: {
        slidesPerView: 2, //브라우저가 320보다 클 때
        spaceBetween: 100,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
      768: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 150,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
      890: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 150,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
      1024: {
        slidesPerView: 5, //브라우저가 1024보다 클 때
        spaceBetween: 150,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
      1280: {
        slidesPerView: 5, //브라우저가 1024보다 클 때
        spaceBetween: 150,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
      1680: {
        slidesPerView: 5, //브라우저가 1024보다 클 때
        spaceBetween: 150,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
      },
    },
    
  });

  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = this.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
  //헤더 스크롤 기능
  //스크롤바의 상단위치
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector(".header");
  header.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    if (scy < scActive) {
      header.classList.remove("header-active");
    }
  });
  //새로고침 시 적용
  if (scy > scActive) {
    header.classList.add("header-active");
  }
  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });

  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
  //  스크롤시 영역 배경 그라디언트
  let scb = 400;
  let scr = 500;
  let movie = document.querySelector(".movie");
  window.addEventListener("scroll", function () {
    scb = window.document.documentElement.scrollTop;
    if (scb > scr) {
      movie.classList.add("movie-active");
    } else {
      movie.classList.remove("movie-active");
    }
  });
  AOS.init();

  // 스크롤 시 mini section active
  let mini = document.querySelector(".mini");
  let miniFilm1 = document.querySelector(".mini-film1");
  let miniFilm2 = document.querySelector(".mini-film2");
  let miniFilm3 = document.querySelector(".mini-film3");
  let miniFilm4 = document.querySelector(".mini-film4");
  let miniFilm5 = document.querySelector(".mini-film5");
  let miniscr =1500;
  let miniMoveFlag = true;
  window.addEventListener("scroll", function () {
    scb = window.document.documentElement.scrollTop;
    console.log(miniscr);
    if (scb >= miniscr) {
      if (miniMoveFlag) {
        miniFilm1.classList.add("mini-film1-active");
        setTimeout(() => {
          miniFilm2.classList.add("mini-film2-active");
        }, 100);
        setTimeout(() => {
          miniFilm3.classList.add("mini-film3-active");
        }, 200);
        setTimeout(() => {
          miniFilm4.classList.add("mini-film4-active");
        }, 300);
        setTimeout(() => {
          miniFilm5.classList.add("mini-film5-active");
        }, 350);
        miniMoveFlag = false;
      }
    } else {
      if (!miniMoveFlag) {
        miniFilm5.classList.remove("mini-film5-active");
        setTimeout(() => {
          miniFilm4.classList.remove("mini-film4-active");
        }, 100);
        setTimeout(() => {
          miniFilm3.classList.remove("mini-film3-active");
        }, 200);
        setTimeout(() => {
          miniFilm2.classList.remove("mini-film2-active");
        }, 300);
        setTimeout(() => {
          miniFilm1.classList.remove("mini-film1-active");
        }, 600);
        miniMoveFlag = true;
      }
    }
  });

 // 스크롤 시 mini section active
 let mini2 = document.querySelector(".mini");
 let miniPoint = document.querySelector(".mini-point");
 let miniPoint2 = document.querySelector(".mini-point2");
 let mini2scr = 1400;
 window.addEventListener("scroll", function () {
   scb = window.document.documentElement.scrollTop;
   if (scb > mini2scr) {
     mini2.classList.add("mini-active");
     miniPoint.classList.add("active");
     miniPoint2.classList.add("mini-point2-active");
   } else {
     mini2.classList.remove("mini-active");
     miniPoint.classList.remove("active");
     miniPoint2.classList.remove("mini-point2-active");
   }
 });

  // 스크롤 시 square section active
  let square = document.querySelector(".square");
  let squarePoint = document.querySelector(".square-point");
  let squarePoint2 = document.querySelector(".square-point2");
  let squarescr = 2300;
  window.addEventListener("scroll", function () {
    scb = window.document.documentElement.scrollTop;
    if (scb > squarescr) {
      square.classList.add("square-active");
      squarePoint.classList.add("active");
      squarePoint2.classList.add("square-point2-active");
    } else {
      square.classList.remove("square-active");
      squarePoint.classList.remove("active");
      squarePoint2.classList.remove("square-point2-active");
    }
  });
  
  // 스크롤 시 wide section active
  let wide = document.querySelector(".wide");
  let widePoint = document.querySelector(".wide-point");
  let widePoint2 = document.querySelector(".wide-point2");
  let widescr = 3500;
  window.addEventListener("scroll", function () {
    scb = window.document.documentElement.scrollTop;
    if (scb > widescr) {
      wide.classList.add("wide-active");
      widePoint.classList.add("active");
      widePoint2.classList.add("wide-point2-active");
    } else {
      wide.classList.remove("wide-active");
      widePoint.classList.remove("active");
      widePoint2.classList.remove("wide-point2-active");
    }
  });

  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});
function openPopup() {
  // 팝업 창을 열고 크기 조절을 비활성화
  var popup = window.open('event.html', '', 'width=1000,height=3136, resizable=no');
  // 팝업 창을 포커스
  popup.focus();
}

function SellopenPopup() {
  // 팝업 창을 열고 크기 조절을 비활성화
  var sellpopup = window.open('sellproject.html', '', 'width=1000,height=3136, resizable=no');
  // 팝업 창을 포커스
  popup.focus();
}
