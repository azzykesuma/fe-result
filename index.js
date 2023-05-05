// fetching json data
const summaryCard = document.getElementById('summary-card');
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item,index) => {
      const div = document.createElement('div');
      div.className = 'summary_points';
      div.classList.add(`summary_points_${index}`);

      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.category;

      const category = document.createElement('p');
      category.textContent = item.category;
      category.setAttribute('class','category')

      const score = document.createElement('p');
      score.innerHTML = `<strong>${item.score}</strong> <span>/ 100</span>`;
      score.setAttribute('class', 'score_pts')

      div.appendChild(img);
      div.appendChild(category);
      div.appendChild(score);
      summaryCard.appendChild(div);
    });
  });
