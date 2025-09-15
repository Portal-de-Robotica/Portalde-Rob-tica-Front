const navbarTemplate = document.createElement('template');
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
          <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-play-circle"></i> Vídeos</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/pagina_graficos.html"><i class="bi bi-graph-up"></i> Gráficos</a></li>
          <li class="nav-item"><a class="nav-link" href="../html/pagina_noticias.html"><i class="bi bi-newspaper"></i> Notícias</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-trophy"></i> Ranking</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-chat-left-text"></i> Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.appendChild(navbarTemplate.content.cloneNode(true));
  }
}
customElements.define('navbar-component', NavbarComponent);


const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <footer class="bg-primary text-white py-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5><i class="bi bi-robot"></i> Tandron IoT</h5>
          <p>Sistema de monitoramento inteligente para robótica educacional</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="my-4">Trabalho Escolar - 2025</p>
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
customElements.define('footer-component', FooterComponent);
