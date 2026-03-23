/* Glossary page interactivity */
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('glossary-search');
  const entries = document.querySelectorAll('.glossary-entry');
  const alphaBtns = document.querySelectorAll('.alpha-btn');

  if (!search) return;

  function filter(query, letter) {
    entries.forEach(entry => {
      const term = entry.querySelector('dt').textContent.toLowerCase();
      const def  = entry.querySelector('dd').textContent.toLowerCase();
      const matchQ = !query || term.includes(query) || def.includes(query);
      const matchL = !letter || term.startsWith(letter.toLowerCase());
      entry.classList.toggle('hidden', !matchQ || !matchL);
    });
  }

  let activeLetter = '';

  search.addEventListener('input', () => {
    filter(search.value.toLowerCase(), activeLetter);
  });

  alphaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alphaBtns.forEach(b => b.classList.remove('active'));
      const letter = btn.getAttribute('data-letter');
      if (activeLetter === letter) {
        activeLetter = '';
      } else {
        activeLetter = letter;
        btn.classList.add('active');
      }
      filter(search.value.toLowerCase(), activeLetter);
    });
  });
});
