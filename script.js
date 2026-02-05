const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopup");
const timerEl = document.getElementById("timer");
const finalDownload = document.getElementById("finalDownload");
const betweenAds = document.querySelectorAll(".ad-between-products");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");


let countdown;
let timeLeft = 20;
let downloadLink = "";

document.querySelectorAll(".openPopup").forEach(btn => {
  btn.addEventListener("click", () => {

    downloadLink = btn.dataset.download;

    // حقن البيانات داخل الـ popup
    popupTitle.textContent = btn.dataset.title;
    popupDescription.textContent = btn.dataset.description;

    overlay.classList.remove("hidden");
    timerEl.style.display = "block";
    finalDownload.classList.add("hidden");

    timeLeft = 20;
    timerEl.textContent = timeLeft;

    countdown = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        timerEl.style.display = "none";
        finalDownload.classList.remove("hidden");
      }
    }, 1000);
  });
});

closeBtn.onclick = () => {
  overlay.classList.add("hidden");
  clearInterval(countdown);
};

finalDownload.onclick = () => {
  if (downloadLink) {
    window.open(downloadLink, "_blank");
  }
};

function toggleBetweenAds(show) {
  betweenAds.forEach((ad) => {
    ad.style.display = show ? "block" : "none";
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  toggleBetweenAds(value === "");

  products.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const author = card.querySelector("p").textContent.toLowerCase();

    card.style.display =
      title.includes(value) || author.includes(value) ? "block" : "none";
  });
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    products.forEach((product) => {
      const category = product.dataset.category || "";

      product.style.display =
        filter === "all" || category.includes(filter) ? "block" : "none";
    });
  });
});


function goToProduct(e, url) {
  // لو ضغط على زرار أو حاجة جواه → متعملش redirect
  if (e.target.closest("button")) return;

  window.location.href = url;
}
