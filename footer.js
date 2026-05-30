// Footer Component
(function () {
  const year = new Date().getFullYear();
  const footerHTML = `
  <footer class="site-footer" id="site-footer">
    <div class="footer-glow"></div>
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="https://dicerollingapp.github.io" class="footer-logo" aria-label="Dice Rolling App">
          <span class="logo-icon">🎲</span>
          <span class="logo-text">DiceRoll<span class="logo-accent">App</span></span>
        </a>
        <p class="footer-tagline">The ultimate free online dice roller for every game, every adventure, every decision.</p>
        <div class="footer-dice-row" aria-hidden="true">
          <span class="fd">⚀</span><span class="fd">⚁</span><span class="fd">⚂</span><span class="fd">⚃</span><span class="fd">⚄</span><span class="fd">⚅</span>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Dice Rollers</h4>
          <ul>
            <li><a href="#roller">Roll D6 Online</a></li>
            <li><a href="#dice-types">D4 Dice Roller</a></li>
            <li><a href="#dice-types">D8 Dice Roller</a></li>
            <li><a href="#dice-types">D10 Dice Roller</a></li>
            <li><a href="#dice-types">D12 Dice Roller</a></li>
            <li><a href="#dice-types">D20 Dice Roller</a></li>
            <li><a href="#dice-types">D100 Dice Roller</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Features</h4>
          <ul>
            <li><a href="#multi-roll">Multi Dice Roll</a></li>
            <li><a href="#history">Roll History</a></li>
            <li><a href="#games">Dice Games</a></li>
            <li><a href="#roller">Random Dice Roller</a></li>
            <li><a href="#multi-roll">Virtual Dice Roller</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${year} <a href="https://dicerollingapp.github.io">DiceRollingApp</a> — Free Online Virtual Dice Roller. All rights reserved.</p>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
