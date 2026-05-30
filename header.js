// Header Component
(function () {
  const headerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="https://dicerollingapp.github.io" class="logo" aria-label="Dice Rolling App Home">
        <span class="logo-icon">🎲</span>
        <span class="logo-text">DiceRoll<span class="logo-accent">App</span></span>
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="#roller">Roll Dice</a></li>
          <li><a href="#dice-types">Dice Types</a></li>
          <li><a href="#multi-roll">Multi Roll</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Scroll effect
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Mobile toggle
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  // Smooth scroll + close mobile nav
  document.querySelectorAll('.main-nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
