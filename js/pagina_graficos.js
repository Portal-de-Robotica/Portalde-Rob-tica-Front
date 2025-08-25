
        // Dados simulados para os gráficos
        let sensorData = {
            temperature: [],
            humidity: [],
            speed: [],
            labels: []
        };

        let monitoringInterval;
        let isMonitoring = false;

        // Função para gerar dados aleatórios realistas
        function generateSensorData() {
            const temp = (Math.random() * 10 + 20).toFixed(1); // 20-30°C
            const humidity = Math.floor(Math.random() * 30 + 50); // 50-80%
            const speed = (Math.random() * 15 + 5).toFixed(1); // 5-20 cm/s
            
            return { temp, humidity, speed };
        }

        // Função para atualizar os valores dos cards
        function updateSensorCards() {
            const data = generateSensorData();
            
            document.getElementById('tempValue').textContent = data.temp + '°C';
            document.getElementById('humidityValue').textContent = data.humidity + '%';
            document.getElementById('speedValue').textContent = data.speed + ' cm/s';
            
            // Atualizar barras de progresso
            document.getElementById('tempProgress').style.width = (data.temp / 30 * 100) + '%';
            document.getElementById('humidityProgress').style.width = data.humidity + '%';
            document.getElementById('speedProgress').style.width = (data.speed / 20 * 100) + '%';
            
            // Atualizar horário
            const now = new Date();
            document.getElementById('lastUpdate').textContent = now.toLocaleTimeString();
            
            return data;
        }

        // Configuração dos gráficos
        function initCharts() {
            // Gráfico de Temperatura e Umidade
            const ctx1 = document.getElementById('tempHumidityChart').getContext('2d');
            window.tempHumidityChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Temperatura (°C)',
                        data: [],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Umidade (%)',
                        data: [],
                        borderColor: '#0d6efd',
                        backgroundColor: 'rgba(13, 110, 253, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });

            // Gráfico de Velocidade
            const ctx2 = document.getElementById('speedChart').getContext('2d');
            window.speedChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Velocidade (cm/s)',
                        data: [],
                        backgroundColor: '#198754',
                        borderColor: '#198754',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 20
                        }
                    }
                }
            });

            // Gráfico Histórico
            const ctx3 = document.getElementById('historicalChart').getContext('2d');
            window.historicalChart = new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                    datasets: [{
                        label: 'Temperatura (°C)',
                        data: [22.1, 21.8, 23.5, 25.2, 26.1, 24.8, 23.2],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Umidade (%)',
                        data: [68, 72, 65, 58, 55, 62, 67],
                        borderColor: '#0d6efd',
                        backgroundColor: 'rgba(13, 110, 253, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Velocidade Média (cm/s)',
                        data: [8, 5, 12, 15, 18, 14, 10],
                        borderColor: '#198754',
                        backgroundColor: 'rgba(25, 135, 84, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }

        // Função para atualizar gráficos em tempo real
        function updateCharts(data) {
            const now = new Date().toLocaleTimeString();
            
            // Atualizar gráfico de temperatura/umidade
            if (window.tempHumidityChart.data.labels.length > 10) {
                window.tempHumidityChart.data.labels.shift();
                window.tempHumidityChart.data.datasets[0].data.shift();
                window.tempHumidityChart.data.datasets[1].data.shift();
            }
            
            window.tempHumidityChart.data.labels.push(now);
            window.tempHumidityChart.data.datasets[0].data.push(parseFloat(data.temp));
            window.tempHumidityChart.data.datasets[1].data.push(parseInt(data.humidity));
            window.tempHumidityChart.update();
            
            // Atualizar gráfico de velocidade
            if (window.speedChart.data.labels.length > 10) {
                window.speedChart.data.labels.shift();
                window.speedChart.data.datasets[0].data.shift();
            }
            
            window.speedChart.data.labels.push(now);
            window.speedChart.data.datasets[0].data.push(parseFloat(data.speed));
            window.speedChart.update();
        }

        // Funções de controle
        function refreshData() {
            const data = updateSensorCards();
            updateCharts(data);
            
            // Feedback visual
            const btn = event.target.closest('button');
            btn.innerHTML = '<i class="bi bi-check-circle"></i><br>Atualizado!';
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-success');
            
            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i><br>Atualizar Dados';
                btn.classList.remove('btn-success');
                btn.classList.add('btn-outline-primary');
            }, 2000);
        }

        function startMonitoring() {
            if (!isMonitoring) {
                isMonitoring = true;
                monitoringInterval = setInterval(() => {
                    const data = updateSensorCards();
                    updateCharts(data);
                }, 3000); // Atualiza a cada 3 segundos
                
                const btn = event.target.closest('button');
                btn.innerHTML = '<i class="bi bi-pause-circle"></i><br>Monitorando...';
                btn.classList.remove('btn-outline-success');
                btn.classList.add('btn-success');
            }
        }

        function stopMonitoring() {
            if (isMonitoring) {
                isMonitoring = false;
                clearInterval(monitoringInterval);
                
                // Resetar botão de start
                const startBtn = document.querySelector('button[onclick="startMonitoring()"]');
                startBtn.innerHTML = '<i class="bi bi-play-circle"></i><br>Iniciar Monitoramento';
                startBtn.classList.remove('btn-success');
                startBtn.classList.add('btn-outline-success');
                
                const btn = event.target.closest('button');
                btn.innerHTML = '<i class="bi bi-check-circle"></i><br>Parado!';
                btn.classList.remove('btn-outline-danger');
                btn.classList.add('btn-danger');
                
                setTimeout(() => {
                    btn.innerHTML = '<i class="bi bi-stop-circle"></i><br>Parar Monitoramento';
                    btn.classList.remove('btn-danger');
                    btn.classList.add('btn-outline-danger');
                }, 2000);
            }
        }

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            initCharts();
            updateSensorCards();
        });
   