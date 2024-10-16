const languageToggle = document.getElementById('language-toggle');
const isEnglishPage = window.location.pathname.includes('index_en.html');

function language_change(){
    languageToggle.checked = isEnglishPage;

    languageToggle.addEventListener('change', () => {
      if (languageToggle.checked) {
        window.location.href = 'index_en.html';
      } else {
        window.location.href = 'index.html';
      }
    });
}


export default language_change;