// Navbar com modo dark

const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">
        <i class="bi bi-robot"></i> Tandron IoT
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="../html/index.html"><i class="bi bi-house"></i> Home</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/videos.html"><i class="bi bi-play-circle"></i> Vídeos</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/pagina_graficos.html"><i class="bi bi-graph-up"></i> Gráficos</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/pagina_noticias.html"><i class="bi bi-newspaper"></i> Notícias</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/ranking.html"><i class="bi bi-trophy"></i> Ranking</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/contato.html"><i class="bi bi-chat-left-text"></i> Contato</a></li>
          
          <!-- Botão do Modo Dark -->
          <li class="nav-item mt-1">
            <button class="btn btn-outline-light btn-sm ms-2" id="darkModeToggle">
              <i class="bi bi-moon" id="darkModeIcon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.appendChild(navbarTemplate.content.cloneNode(true));

    // Inicializa o modo dark quando o componente é criado
    this.initializeDarkMode();
  }

  initializeDarkMode() {
    // Verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Define o tema inicial
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      this.updateDarkModeIcon(true);
    }

    // Adiciona evento ao botão
    const toggleButton = this.querySelector("#darkModeToggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", this.toggleDarkMode.bind(this));
    }
  }

  toggleDarkMode() {
    const isDark =
      document.documentElement.getAttribute("data-bs-theme") === "dark";

    if (isDark) {
      // Muda para modo claro
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
      this.updateDarkModeIcon(false);
    } else {
      // Muda para modo escuro
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
      this.updateDarkModeIcon(true);
    }
  }

  updateDarkModeIcon(isDark) {
    const icon = this.querySelector("#darkModeIcon");
    if (icon) {
      if (isDark) {
        icon.className = "bi bi-sun";
      } else {
        icon.className = "bi bi-moon";
      }
    }
  }
}

customElements.define("navbar-component", NavbarComponent);

// Footer (adaptado para modo dark)
const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
  <footer class="bg-primary text-white py-2 mt-5 ">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-2">
        <h5 class="d-inline-flex align-items-center gap-3"><i class="bi bi-robot "></i> &copyTandron Robo IOT &reg</h5>

               
        <a href="https://www.facebook.com/Binhoabreu182" target="_blank">
        <i class="bi bi-facebook gap-5 fs-4 ms-3"></i>
        </a>
                      
        <a href="https://wa.me/554898661407" target="_blank">
        <i class="bi bi-whatsapp ms-1 fs-4"></i>
        </a>

        <a href="https://instagram.com/smrasouza" target="_blank">
        <i class="bi bi-instagram ms-1 fs-4"></i>
        </a>

        <a href="https://github.com/Portal-de-Robotica/Portalde-Rob-tica-Front" target="_blank">
        <i class="bi bi-github ms-1 fs-4 "></i>
        </a>

        <a href="mailto:jaderbf03@gmail.com" target="_blank">
        <i class="bi bi-envelope ms-1 fs-4 "></i>
        </a>

      
          <p>Sistema de monitoramento inteligente para robótica educacional</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="mt-4">IOT - 2025</p>
        </div>
      </div>
    </div>
  </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define("footer-component", FooterComponent);
