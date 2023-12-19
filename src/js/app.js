document.addEventListener('DOMContentLoaded', () => {
  eventListeners();
  darkMode();
});

function darkMode() {
  const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // console.log(preferDarkMode.matches);
  if (preferDarkMode.matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  preferDarkMode.addEventListener('change', () => {
    if (preferDarkMode.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

  const buttonDarkMode = document.querySelector('.dark-mode-button');
  buttonDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

function eventListeners() {
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.addEventListener('click', navigationResponsive);
}

function navigationResponsive() {
  // if(navigation.classList.contains('show')) {
  //   navigation.classList.remove('show');
  // } else {
  //   navigation.classList.add('show');
  // }

  const navigation = document.querySelector('.navigation');

  navigation.classList.toggle('show');
}