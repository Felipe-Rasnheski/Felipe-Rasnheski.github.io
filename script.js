const navbar = document.querySelector("nav ul");
document.querySelector("#icon-menu").addEventListener("click", () => {
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
  navbar.classList.toggle("active");
})

const searchForm = document.querySelector(".search-form");
document.querySelector("#icon-search").addEventListener("click",() => {
  navbar.classList.remove("active");
  cartItems.classList.remove("active");
  searchForm.classList.toggle("active");
})

const cartItems = document.querySelector(".cart-items-container");
document.querySelector("#icon-cart-shopping").addEventListener("click",() => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItems.classList.toggle("active");
})

const backTop = document.getElementById('back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
  backToTop()
})