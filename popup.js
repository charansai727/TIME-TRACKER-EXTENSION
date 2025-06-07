console.log("Popup opened");

chrome.storage.local.get("siteTime", (data) => {
  console.log("Data from storage:", data);

  const ctx = document.getElementById('chart').getContext('2d');
  const timeData = data.siteTime || {};
  const labels = Object.keys(timeData);
  const values = Object.values(timeData);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Time (s)',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});

document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.clear(() => {
    console.log("Data cleared");
    location.reload();
  });
});
