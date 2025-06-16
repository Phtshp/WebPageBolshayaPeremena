// ... (весь остальной код)

// Массив с менторами
const mentors = [
  {img: 'images/mentor1.jpg', name: 'Ирина Петрова', desc: 'Саунд-продюсер. Электронная музыка.'},
  {img: 'images/mentor2.jpg', name: 'Максим Иванов', desc: 'Вокал, хип-хоп, ритмика.'},
  {img: 'images/mentor3.jpg', name: 'DJ_Anna', desc: 'Техно, EDM, синтезаторы.'},
  {img: 'images/user_avatar.png', name: 'Алексей Музыкантов', desc: 'Битмейкер, хип-хоп, электроника.'},
];

// Список событий/мастер-классов
const events = [
  '12 июня — Введение в саунд-дизайн',
  '14 июня — Сведение и мастеринг: основы',
  '18 июня — Как попасть на фестиваль',
  '20 июня — Вокальный интенсив для всех уровней',
  '25 июня — EDM Production Pro',
];

// ... (весь остальной код)

// Вывод менторов и событий (помести этот фрагмент внутрь DOMContentLoaded или после всех остальных event listeners)
document.addEventListener('DOMContentLoaded', () => {
  const mentorsList = document.getElementById('mentorsList');
  if (mentorsList) {
    mentorsList.innerHTML = mentors.map(m => `
      <div class="mentor-card">
        <img src="${m.img}" alt="Ментор">
        <div class="mentor-info">
          <b>${m.name}</b>
          <div style="font-size:0.95em;color:#bbb;">${m.desc}</div>
        </div>
      </div>
    `).join('');
  }
  const eventsList = document.getElementById('eventsList');
  if (eventsList) {
    eventsList.innerHTML = events.map(e => `<li>${e}</li>`).join('');
  }
});