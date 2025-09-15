// Dados fictícios para os gráficos
let charts = {};

// Função para gerar dados de temperatura realistas
function generateTemperatureData(points = 24) {
    const data = [];
    const labels = [];
    let baseTemp = 22; // Temperatura base
    
    for (let i = 0; i < points; i++) {
        // Simula variação natural da temperatura ao longo do dia
        const hour = i;
        let temp = baseTemp + Math.sin((hour - 6) * Math.PI / 12) * 4; // Pico no meio-dia
        temp += (Math.random() - 0.5) * 2; // Adiciona ruído
        temp = Math.round(temp * 10) / 10;
        
        data.push(temp);
        labels.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    
    return { data, labels };
}

// Função para gerar dados de umidade
function generateHumidityData(points = 24) {
    const data = [];
    const labels = [];
    let baseHumidity = 60;
    
    for (let i = 0; i < points; i++) {
        const hour = i;
        // Umidade geralmente maior de madrugada/manhã
        let humidity = baseHumidity + Math.cos((hour - 6) * Math.PI / 12) * 15;
        humidity += (Math.random() - 0.5) * 10;
        humidity = Math.max(30, Math.min(90, Math.round(humidity)));
        
        data.push(humidity);
        labels.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    
    return { data, labels };
}

// Função para gerar dados de velocidade do robô
function generateSpeedData(points = 24) {
    const data = [];
    const labels = [];
    
    for (let i = 0; i < points; i++) {
        const hour = i;
        // Robô mais ativo durante o dia
        let speed = 0;
        if (hour >= 8 && hour <= 18) {
            speed = 8 + Math.random() * 10; // 8-18 cm/s durante o dia
        } else if (hour >= 6 && hour <= 22) {
            speed = 3 + Math.random() * 5; // 3-8 cm/s períodos de transição
        } else {
            speed = Math.random() * 2; // 0-2 cm/s durante a noite
        }
        
        data.push(Math.round(speed * 10) / 10);
        labels.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    
    return { data, labels };
}

// Configuração base para gráficos
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        x: {
            grid: {
                color: 'rgba(0,0,0,0.1)'
            }
        }
    }
};

// Função para criar gráfico em tempo real
function createRealtimeChart() {
    const tempData = generateTemperatureData(24);
    const humidityData = generateHumidityData(24);
    const speedData = generateSpeedData(24);
    
    const ctx = document.getElementById('realtimeChart').getContext('2d');
    charts.realtime = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tempData.labels,
            datasets: [{
                label: 'Temperatura (°C)',
                data: tempData.data,
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderWidth: 2,
                tension: 0.4
            }, {
                label: 'Umidade (%)',
                data: humidityData.data,
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                yAxisID: 'y1'
            }, {
                label: 'Velocidade (cm/s)',
                data: speedData.data,
                borderColor: '#198754',
                backgroundColor: 'rgba(25, 135, 84, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                yAxisID: 'y2'
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    max: 100,
                    min: 0
                },
                y2: {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    max: 20,
                    min: 0
                }
            }
        }
    });
}

// Gráfico de histórico de temperatura
function createTemperatureChart() {
    const tempData = generateTemperatureData(168); // 7 dias de dados (24h * 7)
    const labels = [];
    
    // Cria labels para 7 dias
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    for (let d = 0; d < 7; d++) {
        for (let h = 0; h < 24; h += 4) {
            labels.push(`${days[d]} ${h.toString().padStart(2, '0')}h`);
        }
    }
    
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    charts.temperature = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.slice(0, 42), // Mostra apenas pontos de 4 em 4 horas
            datasets: [{
                label: 'Temperatura',
                data: tempData.data.filter((_, i) => i % 4 === 0), // Pega dados de 4 em 4 horas
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    }
                }
            }
        }
    });
}

// Gráfico de histórico de umidade
function createHumidityChart() {
    const humidityData = generateHumidityData(168);
    const labels = [];
    
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    for (let d = 0; d < 7; d++) {
        for (let h = 0; h < 24; h += 4) {
            labels.push(`${days[d]} ${h.toString().padStart(2, '0')}h`);
        }
    }
    
    const ctx = document.getElementById('humidityChart').getContext('2d');
    charts.humidity = new Chart(ctx, {
        type: 'area',
        data: {
            labels: labels.slice(0, 42),
            datasets: [{
                label: 'Umidade',
                data: humidityData.data.filter((_, i) => i % 4 === 0),
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            ...chartConfig,
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Umidade (%)'
                    }
                }
            }
        }
    });
}

// Gráfico de pizza - Distribuição de atividade
function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    charts.pie = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Movimento', 'Parado', 'Coletando Dados', 'Manutenção'],
            datasets: [{
                data: [45, 25, 25, 5],
                backgroundColor: [
                    '#198754', // Verde - Movimento
                    '#ffc107', // Amarelo - Parado
                    '#0d6efd', // Azul - Coletando dados
                    '#dc3545'  // Vermelho - Manutenção
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Gráfico de barras - Comparativo semanal
function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    // Dados médios por dia da semana
    const weeklyData = {
        temperature: [21.5, 22.8, 23.2, 24.1, 23.8, 22.9, 21.8],
        humidity: [68, 62, 58, 55, 59, 65, 70],
        speed: [8.2, 12.5, 11.8, 13.2, 12.9, 10.1, 6.5]
    };
    
    charts.bar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            datasets: [{
                label: 'Temp. Média (°C)',
                data: weeklyData.temperature,
                backgroundColor: 'rgba(220, 53, 69, 0.6)',
                borderColor: '#dc3545',
                borderWidth: 1,
                yAxisID: 'y'
            }, {
                label: 'Umidade Média (%)',
                data: weeklyData.humidity,
                backgroundColor: 'rgba(13, 110, 253, 0.6)',
                borderColor: '#0d6efd',
                borderWidth: 1,
                yAxisID: 'y1'
            }, {
                label: 'Vel. Média (cm/s)',
                data: weeklyData.speed,
                backgroundColor: 'rgba(25, 135, 84, 0.6)',
                borderColor: '#198754',
                borderWidth: 1,
                yAxisID: 'y2'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: false,
                    position: 'right'
                },
                y2: {
                    type: 'linear',
                    display: false,
                    position: 'right'
                }
            }
        }
    });
}

// Funções de controle (placeholder para funcionalidades futuras)
function startAutoUpdate() {
    console.log('Auto update iniciado');
    // Aqui você pode adicionar lógica para atualizar os gráficos automaticamente
}

function stopAutoUpdate() {
    console.log('Auto update parado');
}

function refreshCharts() {
    console.log('Atualizando gráficos...');
    // Regenera dados e atualiza os gráficos
    Object.keys(charts).forEach(key => {
        if (charts[key]) {
            charts[key].destroy();
        }
    });
    initializeCharts();
}

// Funções de filtro
function filterToday() {
    console.log('Filtro: Hoje');
}

function filterWeek() {
    console.log('Filtro: Esta semana');
}

function filterMonth() {
    console.log('Filtro: Este mês');
}

function resetFilters() {
    console.log('Filtros limpos');
}

// Funções de exportação
function exportCSV() {
    console.log('Exportando para CSV...');
    alert('Funcionalidade de exportação CSV será implementada em breve!');
}

function exportExcel() {
    console.log('Exportando para Excel...');
    alert('Funcionalidade de exportação Excel será implementada em breve!');
}

function exportPDF() {
    console.log('Exportando para PDF...');
    alert('Funcionalidade de exportação PDF será implementada em breve!');
}

function exportImage() {
    console.log('Exportando como imagem...');
    alert('Funcionalidade de exportação de imagem será implementada em breve!');
}

// Função para atualizar valores atuais na interface
function updateCurrentValues() {
    const tempData = generateTemperatureData(1);
    const humidityData = generateHumidityData(1);
    const speedData = generateSpeedData(1);
    
    document.getElementById('currentTemp').textContent = tempData.data[0] + '°C';
    document.getElementById('currentHumidity').textContent = humidityData.data[0] + '%';
    document.getElementById('currentSpeed').textContent = speedData.data[0] + ' cm/s';
}

// Função principal para inicializar todos os gráficos
function initializeCharts() {
    // Aguarda o DOM estar completamente carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCharts);
        return;
    }
    
    // Aguarda o Chart.js estar carregado
    if (typeof Chart === 'undefined') {
        setTimeout(initializeCharts, 100);
        return;
    }
    
    try {
        createRealtimeChart();
        createTemperatureChart();
        createHumidityChart();
        createPieChart();
        createBarChart();
        updateCurrentValues();
        
        // Atualiza valores a cada 30 segundos
        setInterval(updateCurrentValues, 30000);
        
        console.log('Todos os gráficos foram inicializados com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar gráficos:', error);
    }
}

// Inicializa os gráficos quando a página carregar
initializeCharts();