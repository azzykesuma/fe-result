// fetching json data
const summaryCard = document.getElementById('summary-card');
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'summary_points';

      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.category;

      const category = document.createElement('p');
      category.textContent = item.category;

      const score = document.createElement('p');
      score.innerHTML = `<strong>${item.score}</strong>/ 100`;

      div.appendChild(img);
      div.appendChild(category);
      div.appendChild(score);
      summaryCard.appendChild(div);
    });
  });
