const myName = "Priyansh";
const herName = "Bansiii";
`${herName}, I love you ❤️`;

// Run intro hearts
const introInterval = setInterval(createIntroHeart, 300);

// Stop intro after 4 seconds
setTimeout(() => {
  clearInterval(introInterval);

  const intro = document.getElementById("intro");
  const screen1 = document.getElementById("s1");

  // Start intro exit animation
  intro.classList.add("exit");

  // Reveal Screen 1 slightly after intro starts fading
  setTimeout(() => {
    screen1.classList.remove("hidden");
  }, 600);

  // Remove intro completely after animation
  setTimeout(() => {
    intro.style.display = "none";
  }, 1200);
}, 5000);

function setFullHeight() {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px",
  );
}

setFullHeight();
window.addEventListener("resize", setFullHeight);

// ❤️ Intro floating hearts
function createIntroHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.getElementById("intro").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

const noBtn = document.getElementById("noBtn");
const card = noBtn.closest(".card");

let clickCount = 0;

function handleNoClick(e) {
  e.preventDefault(); // stop click action

  clickCount++;

  // Shake
  noBtn.style.animation = "shake 0.25s";
  setTimeout(() => (noBtn.style.animation = ""), 1000);

  // Change text AFTER real clicks
  if (clickCount === 2) noBtn.innerText = "Please wait...no 😢";
  if (clickCount === 3) noBtn.innerText = "Please don't say no 😢";
  if (clickCount === 4) noBtn.innerText = "I'm serious okay 😢";
  if (clickCount === 5) noBtn.innerText = "Don't make me sad 😔";
  if (clickCount === 6) noBtn.innerText = "Come on don't be silly 😔";
  if (clickCount === 7) noBtn.innerText = "Say yes don't be mean 😕";
  if (clickCount === 8) noBtn.innerText = "Pretty little please 🙏";
  if (clickCount === 9) noBtn.innerText = "I'm begging youh 🥺";
  if (clickCount === 10) noBtn.innerText = "Don't make me angry 😖";
  if (clickCount === 11) noBtn.innerText = "You're making me cry 😭";
  if (clickCount === 12) noBtn.innerText = "I am angry now 😡";
  if (clickCount === 13) noBtn.innerText = "Sorry, it was a joke 😅";
  if (clickCount === 14) noBtn.innerText = "Why you don't say yes?";
  if (clickCount === 15) noBtn.innerText = "Just say yes already!";
  if (clickCount === 16) noBtn.innerText = "Do you even love me? 😢";
  if (clickCount === 17) noBtn.innerText = "No, i don't believe you 😠";
  if (clickCount === 18) noBtn.innerText = "How can you refuse? 😤";
  if (clickCount === 19) noBtn.innerText = "You have no choice 😈";

  // Finally give up
  if (clickCount >= 20) {
    noBtn.innerText = "Yes 😭";
    noBtn.style.background = "#ff335f";
    noBtn.onclick = yes;
    noBtn.style.transform = "translate(0,0)";
    return;
  }
}

// ONLY real clicks
noBtn.addEventListener("click", handleNoClick);

/* Countdown */
let countdownStarted = false;

function startCountdown() {
  if (countdownStarted) return; // prevent double start
  countdownStarted = true;

  const countdown = document.getElementById("countdown");
  const target = Date.now() + 6000;

  const timer = setInterval(() => {
    const d = target - Date.now();

    if (d > 0) {
      countdown.innerText = Math.ceil(d / 1000) + " seconds";
    } else {
      clearInterval(timer);
      countdown.innerText = "The wait is over ❤️";
      setTimeout(next, 2000);
    }
  }, 1000);
}

let screen = 1;

/* Navigation */
function next() {
  // Hide current screen
  document.getElementById("s" + screen).classList.add("hidden");

  /* ---- SPECIAL FLOWS FIRST ---- */

  if (screen === 3) {
    screen = 30;
    document.getElementById("s30").classList.remove("hidden");
    startValentineCountdown();
    return;
  }

  // After Kiss Day → go to video
  if (screen === 38) {
    screen = "34v";
    document.getElementById("s34v").classList.remove("hidden");
    return;
  }

  if (screen === "34v") {
    screen = "35";
    document.getElementById("s35").classList.remove("hidden");

    const video = document.getElementById("memoryVideo");
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    return;
  }

  // After first video → go to video 2
  if (screen === "35") {
    screen = "35a";
    document.getElementById("s35a").classList.remove("hidden");

    document
      .getElementById("video2")
      .play()
      .catch(() => {});
    return;
  }

  if (screen === "35a") {
    screen = "35b";
    document.getElementById("s35b").classList.remove("hidden");

    document
      .getElementById("video3")
      .play()
      .catch(() => {});
    return;
  }

  if (screen === "35b") {
    screen = "35c";
    document.getElementById("s35c").classList.remove("hidden");

    document
      .getElementById("video4")
      .play()
      .catch(() => {});
    return;
  }

  if (screen === "35c") {
    screen = "35d";
    document.getElementById("s35d").classList.remove("hidden");

    document
      .getElementById("video5")
      .play()
      .catch(() => {});
    return;
  }

  // After last video → go to letters
  if (screen === "35d") {
    screen = 4;
    document.getElementById("s4").classList.remove("hidden");
    return;
  }

  // After Screen 4 → go to Screen 4.5
  if (screen === 4) {
    screen = "45";
    document.getElementById("s45").classList.remove("hidden");
    startFinalCountdown();
    return;
  }

  // After Screen 4.5 → go to Screen 5
  if (screen === "45") {
    screen = 5;
    document.getElementById("s5").classList.remove("hidden");
    return;
  }

  /* ---- NORMAL FLOW ---- */

  // Valentine week manual sequence
  const valentineFlow = [30, 31, 32, 33, 34, 36, 37, 38];

  if (valentineFlow.includes(screen)) {
    const nextIndex = valentineFlow.indexOf(screen) + 1;
    screen = valentineFlow[nextIndex];
    document.getElementById("s" + screen).classList.remove("hidden");

    if (screen === 30) startValentineCountdown();
    return;
  }

  // Default numeric flow
  screen++;
  document.getElementById("s" + screen).classList.remove("hidden");

  // Music
  document.getElementById("music").play();

  // Screen-specific logic
  if (screen === 2) startCountdown();

  if (screen === 3) {
    currentPhotoIndex = 0;
    showCurrentPhoto();
  }
}

/* Photo */
function showPhoto() {
  document.getElementById("photo").style.display = "block";
  setTimeout(next, 2000);
}

/* Letter */
function openLetter() {
  letter.style.display = "flex";
}
function closeLetter() {
  letter.style.display = "none";
  next();
}

/* Final */
function yes() {
  // Hide Screen 5
  document.getElementById("s5").classList.add("hidden");

  // Start celebration
  startCelebration();

  // After celebration → show final screen
  setTimeout(() => {
    stopCelebration();

    document.body.innerHTML = `
      <div class="screen">
      <div class="card">
      <h1>Thank You, My Love ❤️</h1>

      <p style="margin-top:12px; font-size:16px">
        Bansiii, you just made me the happiest person right now 🥺
      </p>

      <p style="margin-top:18px; font-size:15px; line-height:1.6; opacity:0.95">
        Priyansh ka dil aaj tumhare paas officially safe hai 💖<br><br>

        Main promise karta hoon ki chahe situation koi bhi ho,
        main tumhara saath nahi chhodunga.<br><br>

        Tum meri smile ho jab main thak jata hoon,  
        tum meri shanti ho jab duniya loud lagti hai.<br><br>

        Ye website yahin khatam hoti hai,
        par jo main tumhare liye feel karta hoon,
        wo yahin se aur strong hota hai ❤️<br><br>

        I love you… aaj, kal, aur hamesha.
      </p>
      </div>
      </div>
    `;
  }, 2800); // celebration duration
}

/* Confetti */
function confetti() {
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},100%,60%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* Hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 20 + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

/* Swipe support */
let startX = 0;
let startY = 0;
let swipeAllowed = false;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  swipeAllowed = true;
});

document.addEventListener("touchmove", (e) => {
  const diffY = Math.abs(e.touches[0].clientY - startY);
  if (diffY > 25) swipeAllowed = false; // scrolling cancels swipe
});

document.addEventListener("touchend", (e) => {
  if (!swipeAllowed) return;

  const diffX = e.changedTouches[0].clientX - startX;

  // deliberate right swipe only
  if (diffX > 80) {
    next();
  }
});

// 📸 Photo gallery logic
const photos = [
  "Photo1.jpg",
  "Photo2.jpg",
  "Photo3.jpg",
  "Photo4.jpg",
  "Photo5.jpg",
  "Photo6.jpg",
  "Photo7.jpg",
  "Photo8.jpg",
  "Photo9.jpg",
  "Photo10.jpg",
  "Photo11.jpg",
  "Photo12.jpg",
  "Photo13.jpg",
  "Photo14.jpg",
  "Photo15.jpg"
];

let currentPhotoIndex = 0;

function showCurrentPhoto() {
  const photo = document.getElementById("photo");
  const continueBtn = document.getElementById("continueBtn");

  photo.classList.remove("show");
  setTimeout(() => {
    photo.src = photos[currentPhotoIndex];
    photo.classList.add("show");
  }, 100);

  // Show Continue button ONLY on last image
  if (currentPhotoIndex === photos.length - 1) {
    continueBtn.style.display = "inline-block";
  } else {
    continueBtn.style.display = "none";
  }
}

function nextPhoto() {
  if (currentPhotoIndex < photos.length - 1) {
    currentPhotoIndex++;
    showCurrentPhoto();
  }
}

function prevPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    showCurrentPhoto();
  }
}

function openLetter() {
  currentLetterIndex = 0;
  showCurrentLetter();
  letter.classList.add("show");
}

function closeLetter() {
  letter.classList.remove("show");
  setTimeout(next, 400);
}

// 💌 Letter gallery logic
const letters = [
  "Bansiii ❤️, shayad main roz nahi kehta, par tum meri life ka sabse important hissa ho.",
  "Tumhari ek smile mera pura din theek kar deti hai 😊",
  "Jab bhi life thodi heavy lagti hai, tumhara naam hi kaafi hota hai.",
  "Tum sirf meri girlfriend nahi ho, tum meri best friend ho 💫",
  "Tumhare saath har moment special lagta hai, chahe wo chhota sa hi kyun na ho.",
  "Kabhi kabhi sochta hoon… main kitna lucky hoon jo tum meri ho 🥺",
  "Tumhara gussa bhi cute lagta hai, aur tumhari care priceless 💖",
  "Main perfect nahi hoon, par tumhare liye hamesha honest rahunga.",
  "Tum mere saath ho, to future thoda kam scary lagta hai 🌙",
  "Main tumhe sirf aaj nahi, har din choose karta hoon.",
  "Tum meri aadat ban chuki ho… ek achhi wali 🫶",
  "Jab tum saath hoti ho, to silence bhi comfortable lagta hai.",
  "Tum meri life ka wo hissa ho jiske bina main adhoora hoon.",
  "Bansiii, I love you… shabdon se zyada, ehsaason mein ❤️",
];

let currentLetterIndex = 0;

function showCurrentLetter() {
  const textEl = document.getElementById("letterText");
  const continueBtn = document.getElementById("letterContinueBtn");

  textEl.innerText = letters[currentLetterIndex];

  // Show Continue ONLY on last letter
  if (currentLetterIndex === letters.length - 1) {
    continueBtn.style.display = "inline-block";
  } else {
    continueBtn.style.display = "none";
  }
}

function nextLetter() {
  if (currentLetterIndex < letters.length - 1) {
    currentLetterIndex++;
    showCurrentLetter();
  }
}

function prevLetter() {
  if (currentLetterIndex > 0) {
    currentLetterIndex--;
    showCurrentLetter();
  }
}

let finalCountdownStarted = false;

function startFinalCountdown() {
  if (finalCountdownStarted) return;
  finalCountdownStarted = true;

  const countdown = document.getElementById("finalCountdown");
  const target = Date.now() + 6000; // same 11 seconds

  const timer = setInterval(() => {
    const d = target - Date.now();

    if (d > 0) {
      countdown.innerText = Math.ceil(d / 1000) + " seconds";
    } else {
      clearInterval(timer);
      countdown.innerText = "Here we go ❤️";
      setTimeout(next, 2000); // go to Screen 5
    }
  }, 1000);
}

/* Celebration */
function startCelebration() {
  if (window.innerWidth < 900) {
    confetti();
    return;
  }

  const overlay = document.getElementById("celebration");
  overlay.classList.add("show");

  // Light confetti burst (SAFE)
  confetti();

  // Fireworks effect
  for (let i = 0; i < 12; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";
    f.style.background = `hsl(${Math.random() * 360},100%,60%)`;
    f.style.setProperty("--x", Math.random() * 400 - 200 + "px");
    f.style.setProperty("--y", Math.random() * 400 - 200 + "px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }
}

function stopCelebration() {
  document.getElementById("celebration").classList.remove("show");
}

setInterval(() => {
  document.querySelectorAll(".card").forEach((card) => {
    card.style.boxShadow = `
      0 0 35px rgba(255, 77, 109, ${0.3 + Math.random() * 0.3})
    `;
  });
}, 1200);

function setFullHeight() {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px",
  );
}
setFullHeight();
window.addEventListener("resize", setFullHeight);

function openJustForYou() {
  document.getElementById("chatIntro").classList.add("hidden");
  document.getElementById("justForYou").classList.remove("hidden");
}

function startMainSite() {
  document.getElementById("justForYou").classList.add("hidden");
  document.getElementById("intro").style.display = "flex";
}

const text = document.querySelector(".celebrate-text");

setTimeout(() => {
  text.style.animation = "none";
}, 3000);

let valentineCountdownStarted = false;

function startValentineCountdown() {
  if (valentineCountdownStarted) return;
  valentineCountdownStarted = true;

  const el = document.getElementById("valentineCountdown");
  const target = Date.now() + 6000; // 6 seconds countdown

  const timer = setInterval(() => {
    const diff = target - Date.now();

    if (diff > 0) {
      el.innerText = Math.ceil(diff / 1000) + " seconds";
    } else {
      clearInterval(timer);
      el.innerText = "Here we go ❤️";
      setTimeout(next, 1200);
    }
  }, 1000);
}
