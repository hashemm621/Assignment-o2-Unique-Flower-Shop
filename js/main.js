const cartBtn = document.querySelectorAll(".cart-btn");
cartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Flower Added to Cart");
  });
});
