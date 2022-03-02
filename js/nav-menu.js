(() => {
  const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),

    navMenu = document.querySelector(".nav-menu"),
    mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);

  closeNavMenu.addEventListener("click", toggleNav);
  // đóng menu khi click bên ngoài
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      // ngăn chặn nhấp chuột
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      // nếu menuItemHasChildren được mở ra, thì đóng
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        // thu gọn menu mở rộng hiện có
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        // mở rộng menu mới
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }

  
  // function resizeFix() {
  //   // đóng menu con đang mở
  //   if (navMenu.classList.contains("open")) {
  //     toggleNav();
  //   }
  //   // nếu menuItemHasChildren được mở ra, thì đóng
  //   if (navMenu.querySelector(".menu-item-has-children.active")) {
  //     collapseSubMenu();
  //   }
  // }

  // window.addEventListener("resize", function () {
  //   if (this.innerWidth > mediaSize) {
  //     resizeFix();
  //   }
  // });
})();
