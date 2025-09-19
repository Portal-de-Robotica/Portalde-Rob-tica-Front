// JavaScript básico para gráficos

// Dados fictícios simples
function createRealtimeChart() {
  const ctx = document.getElementById("realtimeChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [
        {
          label: "Temperatura (°C)",
          data: [22, 24, 27, 23, 20, 18],
          borderColor: "red",
          backgroundColor: "rgba(255,0,0,0.1)"
        },
        {
          label: "Umidade (%)",
          data: [55, 60, 62, 58, 65, 70],
          borderColor: "blue",
          backgroundColor: "rgba(0,0,255,0.1)"
        },
        {
          label: "Velocidade (cm/s)",
          data: [12, 15, 14, 18, 16, 20],
          borderColor: "green",
          backgroundColor: "rgba(0,255,0,0.1)"
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}

function createTemperatureChart() {
  const ctx = document.getElementById("temperatureChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Temperatura (°C)",
        data: [22, 24, 27, 23, 20, 18],
        borderColor: "orange",
        backgroundColor: "rgba(255,165,0,0.1)"
      }]
    },
    options: {
      responsive: true
    }
  });
}

function createHumidityChart() {
  const ctx = document.getElementById("humidityChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Umidade (%)",
        data: [55, 60, 62, 58, 65, 70],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)"
      }]
    },
    options: {
      responsive: true
    }
  });
}

function createPieChart() {
  const ctx = document.getElementById("pieChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Temperatura", "Umidade", "Velocidade"],
      datasets: [{
        data: [30, 40, 30],
        backgroundColor: ["red", "blue", "green"]
      }]
    },
    options: {
      responsive: true
    }
  });
}

function createBarChart() {
  const ctx = document.getElementById("barChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sensor A", "Sensor B", "Sensor C", "Sensor D"],
      datasets: [{
        label: "Medições",
        data: [12, 19, 8, 15],
        backgroundColor: "purple"
      }]
    },
    options: {
      responsive: true
    }
  });
}

// Inicializar quando a página carregar
window.addEventListener("DOMContentLoaded", function() {
  createRealtimeChart();
  createTemperatureChart();
  createHumidityChart();
  createPieChart();
  createBarChart();
});

// Funções básicas para os botões (só para não dar erro)
function startAutoUpdate() {
  alert("Função de atualização automática");
}

function stopAutoUpdate() {
  alert("Parou a atualização automática");
}

function refreshCharts() {
  location.reload();
}

function filterToday() {
  alert("Filtro: Hoje");
}

function filterWeek() {
  alert("Filtro: Esta semana");
}

function filterMonth() {
  alert("Filtro: Este mês");
}

function resetFilters() {
  alert("Filtros limpos");
}

function exportCSV() {
  alert("Exportar CSV");
}

function exportExcel() {
  alert("Exportar Excel");
}

function exportPDF() {
  alert("Exportar PDF");
}

function exportImage() {
  alert("Exportar Imagem");
}