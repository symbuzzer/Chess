  function updateTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Kullanıcı arayüzü karanlık modda
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      // Kullanıcı arayüzü aydınlık modda
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
