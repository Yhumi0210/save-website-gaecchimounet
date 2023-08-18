// Vérifier si l'utilisateur a déjà accepté les cookies
if (!getCookie('cookiesAccepted')) {
    // Afficher la fenêtre pop-up
    var cookiePopup = document.getElementById('cookie-popup');
    cookiePopup.style.display = 'block';
  
    // Écouter le clic sur le bouton "Accepter"
    var acceptButton = document.getElementById('accept-cookies');
    acceptButton.addEventListener('click', function() {
      // Cacher la fenêtre pop-up
      cookiePopup.style.display = 'none';
      
      // Définir un cookie pour enregistrer l'accord de l'utilisateur
      setCookie('cookiesAccepted', 'true', 365);
    });
  }
  
  // Fonction pour définir un cookie
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
  
  // Fonction pour récupérer la valeur d'un cookie
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }