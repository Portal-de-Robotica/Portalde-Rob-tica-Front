
        // Dados das notícias
        const newsData = {
            'trending': {
                title: 'Robot autônomo quebra recorde de velocidade',
                content: `
                    <div class="mb-4">
                        <img src="https://via.placeholder.com/600x300/667eea/ffffff?text=Robot+Velocidade" class="img-fluid rounded" alt="Robot de velocidade">
                    </div>
                    <p>Um novo protótipo de robô autônomo desenvolvido por uma equipe de estudantes de engenharia quebrou o recorde mundial de velocidade para robôs terrestres, alcançando impressionantes 45 km/h durante a competição internacional RoboRace 2024.</p>
                    
                    <h6>Tecnologia Inovadora</h6>
                    <p>O robô utiliza uma combinação de sensores LIDAR, câmeras de alta velocidade e algoritmos de inteligência artificial para navegar autonomamente em alta velocidade. A equipe desenvolveu um sistema de controle preditivo que permite ao robô antecipar curvas e obstáculos.</p>
                    
                    <h6>Aplicações Futuras</h6>
                    <p>Esta tecnologia tem potencial para revolucionar diversos setores, desde entrega de encomendas até operações de resgate em situações de emergência.</p>
                    
                    <div class="alert alert-info">
                        <i class="bi bi-info-circle"></i> O próximo objetivo da equipe é desenvolver um sistema de navegação para ambientes urbanos complexos.
                    </div>
                `
            },
            'ai-robotics': {
                title: 'Inteligência Artificial revoluciona robótica industrial',
                content: `
                    <p>A implementação de algoritmos avançados de machine learning está transformando a robótica industrial, permitindo que robôs se adaptem automaticamente a diferentes tarefas sem necessidade de reprogramação manual.</p>
                    
                    <h6>Principais Benefícios</h6>
                    <ul>
                        <li>Aumento de 40% na eficiência produtiva</li>
                        <li>Redução de 60% no tempo de setup</li>
                        <li>Menor taxa de erros de produção</li>
                        <li>Adaptação automática a novos produtos</li>
                    </ul>
                    
                    <p>Empresas que adotaram essa tecnologia relatam economia significativa em custos operacionais e maior flexibilidade na linha de produção.</p>
                `
            },
            'smart-home': {
                title: 'Casa inteligente com Arduino e sensores',
                content: `
                    <p>Projeto inovador ensina estudantes do ensino médio a criar sistemas de automação residencial usando microcontroladores Arduino e sensores de baixo custo.</p>
                    
                    <h6>Componentes do Projeto</h6>
                    <ul>
                        <li>Arduino Uno ou ESP32</li>
                        <li>Sensores de temperatura e umidade</li>
                        <li>Módulos de relé para controle de dispositivos</li>
                        <li>Sensor de movimento PIR</li>
                        <li>Display LCD para informações</li>
                    </ul>
                    
                    <p>Os estudantes aprendem conceitos de programação, eletrônica e Internet das Coisas de forma prática e divertida.</p>
                `
            },
            'education': {
                title: 'Robótica nas escolas cresce 300%',
                content: `
                    <p>Pesquisa recente indica crescimento exponencial no uso da robótica educacional como ferramenta pedagógica em escolas públicas e privadas do país.</p>
                    
                    <h6>Benefícios Observados</h6>
                    <ul>
                        <li>Melhoria no desempenho em matemática</li>
                        <li>Maior interesse por ciências exatas</li>
                        <li>Desenvolvimento do pensamento lógico</li>
                        <li>Trabalho em equipe e colaboração</li>
                    </ul>
                    
                    <p>Professores relatam que os alunos ficam mais engajados nas aulas e demonstram maior criatividade na resolução de problemas.</p>
                `
            },
            'health': {
                title: 'Robôs auxiliam em cirurgias complexas',
                content: `
                    <p>A robótica médica está revolucionando procedimentos cirúrgicos, oferecendo maior precisão e menos invasividade em operações complexas do sistema cardiovascular.</p>
                    
                    <h6>Vantagens da Cirurgia Robótica</h6>
                    <ul>
                        <li>Maior precisão nos movimentos</li>
                        <li>Incisões menores</li>
                        <li>Recuperação mais rápida do paciente</li>
                        <li>Menor risco de infecção</li>
                    </ul>
                    
                    <p>Hospital das Clínicas reporta 95% de sucesso em cirurgias cardíacas assistidas por robôs.</p>
                `
            },
            'environment': {
                title: 'Sensores IoT monitoram poluição',
                content: `
                    <p>Rede inteligente de sensores IoT está sendo implementada em grandes centros urbanos para monitoramento em tempo real da qualidade do ar e poluição sonora.</p>
                    
                    <h6>Dados Coletados</h6>
                    <ul>
                        <li>Níveis de CO2 e outros gases</li>
                        <li>Material particulado (PM2.5, PM10)</li>
                        <li>Decibéis de ruído urbano</li>
                        <li>Temperatura e umidade</li>
                    </ul>
                    
                    <p>Os dados são disponibilizados em tempo real através de aplicativo móvel para a população.</p>
                `
            },
            'autonomous-cars': {
                title: 'Carros autônomos testam novas rotas urbanas',
                content: `
                    <p>Grandes empresas de tecnologia iniciam fase avançada de testes de veículos autônomos em ambiente urbano real, com foco especial na segurança de pedestres e ciclistas.</p>
                    
                    <h6>Tecnologias Envolvidas</h6>
                    <ul>
                        <li>Sensores LIDAR de alta resolução</li>
                        <li>Câmeras com visão noturna</li>
                        <li>Radar para detecção de obstáculos</li>
                        <li>IA para tomada de decisões em tempo real</li>
                    </ul>
                    
                    <p>Os testes incluem cenários complexos como cruzamentos movimentados, condições climáticas adversas e situações de emergência.</p>
                    
                    <div class="alert alert-success">
                        <i class="bi bi-check-circle"></i> Até agora, os testes mostraram 99.9% de precisão na detecção de pedestres e ciclistas.
                    </div>
                `
            }
        };

        // Função para mostrar detalhes da notícia
        function showNewsDetail(newsId) {
            const news = newsData[newsId];
            if (news) {
                document.getElementById('modalTitle').textContent = news.title;
                document.getElementById('modalContent').innerHTML = news.content;
                
                const modal = new bootstrap.Modal(document.getElementById('newsModal'));
                modal.show();
            }
        }

        // Função para pesquisa
        function searchNews() {
            const searchTerm = document.getElementById('searchInput').value;
            if (searchTerm.trim()) {
                alert(`Pesquisando por: "${searchTerm}"\n\nEm uma implementação real, isso filtraria as notícias conforme o termo pesquisado.`);
            }
        }

        // Função para filtrar por categoria
        function filterByCategory(category) {
            alert(`Filtrando notícias por categoria: ${category}\n\nEm uma implementação real, isso mostraria apenas notícias da categoria selecionada.`);
        }

        // Função para newsletter
        function subscribeNewsletter() {
            const email = event.target.parentElement.previousElementSibling.value;
            if (email) {
                alert(`Email ${email} cadastrado com sucesso na newsletter!`);
                event.target.parentElement.previousElementSibling.value = '';
            }
        }

        // Adicionar efeito de entrada suave nos cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.news-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

        // Permitir pesquisa com Enter
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchNews();
            }
        });
    