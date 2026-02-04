const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopup");
const timerEl = document.getElementById("timer");
const finalDownload = document.getElementById("finalDownload");

let countdown;
let timeLeft = 20;
let downloadLink = "";

// لكل زر Download (class="openPopup")
document.querySelectorAll(".openPopup").forEach((btn) => {
  btn.addEventListener("click", () => {
    downloadLink = btn.dataset.download; // قراءة الرابط من data-download

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

// زر الإغلاق
closeBtn.onclick = () => {
  overlay.classList.add("hidden");
  clearInterval(countdown);
};

finalDownload.onclick = () => {
  if (downloadLink) {
    window.open(downloadLink, "_blank");
  } // نافذة جديدة/tab
};
