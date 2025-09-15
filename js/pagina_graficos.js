// Mantém todos os gráficos organizados em um objeto
const charts = {};

// =====================
// Funções de geração de dados fictícios
// =====================
function generateTemperatureData() {
  return {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    data: [22, 24, 27, 23, 20, 18]
  };
}

function generateHumidityData() {
  return {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    data: [55, 60, 62, 58, 65, 70]
  };
}

function generateSpeedData() {
  return {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    data: [12, 15, 14, 18, 16, 20]
  };
}

function generatePieData() {
  return {
    labels: ["Temperatura", "Umidade", "Velocidade"],
    data: [30, 40, 30]
  };
}

function generateBarData() {
  return {
    labels: ["Sensor A", "Sensor B", "Sensor C", "Sensor D"],
    data: [12, 19, 8, 15]
  };
}

// =====================
// Criação dos gráficos
// =====================
function createRealtimeChart() {
  const ctx = document.getElementById("realtimeChart");
  if (!ctx) return;

  const tempData = generateTemperatureData();
  const humidityData = generateHumidityData();
  const speedData = generateSpeedData();

  charts.realtime = new Chart(ctx, {
    type: "line",
    data: {
      labels: tempData.labels,
      datasets: [
        {
          label: "Temperatura (°C)",
          data: tempData.data,
          borderColor: "red",
          backgroundColor: "rgba(255,0,0,0.2)",
          tension: 0.4
        },
        {
          label: "Umidade (%)",
          data: humidityData.data,
          borderColor: "blue",
          backgroundColor: "rgba(0,0,255,0.2)",
          tension: 0.4
        },
        {
          label: "Velocidade (cm/s)",
          data: speedData.data,
          borderColor: "green",
          backgroundColor: "rgba(0,255,0,0.2)",
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        title: { display: true, text: "Monitoramento em Tempo Real" }
      }
    }
  });
}

function createTemperatureChart() {
  const ctx = document.getElementById("temperatureChart");
  if (!ctx) return;

  const data = generateTemperatureData();

  charts.temperature = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Temperatura (°C)",
          data: data.data,
          borderColor: "orange",
          backgroundColor: "rgba(255,165,0,0.2)",
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Temperatura ao longo do tempo" } }
    }
  });
}

function createHumidityChart() {
  const ctx = document.getElementById("humidityChart");
  if (!ctx) return;

  const data = generateHumidityData();

  charts.humidity = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Umidade (%)",
          data: data.data,
          borderColor: "blue",
          backgroundColor: "rgba(0,0,255,0.2)",
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Umidade ao longo do tempo" } }
    }
  });
}

function createPieChart() {
  const ctx = document.getElementById("pieChart");
  if (!ctx) return;

  const data = generatePieData();

  charts.pie = new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          backgroundColor: ["red", "blue", "green"]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Distribuição de Variáveis" } }
    }
  });
}

function createBarChart() {
  const ctx = document.getElementById("barChart");
  if (!ctx) return;

  const data = generateBarData();

  charts.bar = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Medições",
          data: data.data,
          backgroundColor: "purple"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: "Medições por Sensor" } }
    }
  });
}

// =====================
// Inicializa tudo quando a página carregar
// =====================
window.addEventListener("DOMContentLoaded", () => {
  createRealtimeChart();
  createTemperatureChart();
  createHumidityChart();
  createPieChart();
  createBarChart();
});
