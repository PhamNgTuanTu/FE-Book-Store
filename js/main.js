(() => {
  // wow
  new WOW().init();
  // --wow--

  // progress-bar
  var progress = document.getElementById("progressbar");
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };
  // --progress-bar--

  // giỏ hàng và duy chuyển lên đầu trang

  // giỏ hàng
  window.addEventListener("scroll", function () {
    var shopping_cart = document.querySelector(".shopping-cart");
    shopping_cart.classList.toggle(
      "active-scroll-shopping",
      window.scrollY > 1
    );
  });
  // --giỏ hàng--

  // scroll to top
  var scroll_top = document.querySelector(".scroll-top");
  window.addEventListener("scroll", function () {
    scroll_top.classList.toggle("active-scroll", window.scrollY > 500);
  });
  scroll_top.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // --scroll to top--

  // --giỏ hàng và duy chuyển lên đầu trang--

  // loading
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });
  // //loading

  // tắt animation trên tablet & mobile
  if ($(window).width() <= 991) {
    $(".wow").removeClass("wow");
    $(".animated").removeClass("animated");
  }
  // --tắt animation trên tablet & mobile--

  // click to content
  $("#view-add").click(function () {
    var menu_tab = document.querySelector(
      "#container-tile .list-tittle a:nth-child(1)"
    );
    var width = document.querySelector(
      "#container-tile .list-tittle a:nth-child(1)"
    ).offsetWidth;
    $("#container-tile .slider").css({
      left: 0,
      width: width,
    });
    $("#container-tile .list-tittle a").removeClass("active");
    $("#add-active").addClass("active");
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();

    $("html, body").animate(
      {
        scrollTop: $("#introduce-book").offset().top - 195,
      },
      700
    );
  });
  // --click to content--

  // toggle-tab
  $("document").ready(function () {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });

  $(".list-tittle li").click(function () {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
  });
  // --toggle-tab--

  /* show and hide the password */
  const reg_eyes = document.querySelectorAll(".eye");

  reg_eyes.forEach((eye) => {
    eye.addEventListener("click", () => {
      const pass_field = eye.previousElementSibling.previousElementSibling;
      if (pass_field.type === "password") {
        pass_field.setAttribute("type", "text");
        eye.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        pass_field.setAttribute("type", "password");
        eye.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  });
  /* --show and hide the password-- */

  // move login
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");

  loginBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });

  signupBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  });
  // --move login--
})();
