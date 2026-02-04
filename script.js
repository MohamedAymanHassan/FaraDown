const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopup");
const timerEl = document.getElementById("timer");
const finalDownload = document.getElementById("finalDownload");

let countdown;
let timeLeft = 20;
let downloadLink = "";

// لكل زرار Download
document.querySelectorAll(".openPopup").forEach((btn) => {
  btn.addEventListener("click", () => {
    downloadLink = btn.dataset.download;

    overlay.classList.remove("hidden");
    timerEl.style.display = "block";
    finalDownload.classList.add("hidden");
    downloadLink = btn.dataset.download;

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

// زر التحميل النهائي
finalDownload.onclick = () => {
  window.location.href = downloadLink;
};











document.querySelectorAll(".openPopup").forEach(btn => {
  btn.addEventListener("click", () => {
    downloadLink = btn.dataset.download;
    // فتح popup + تشغيل التايمر
  });
});

finalDownload.onclick = () => {
  window.location.href = downloadLink;
};
