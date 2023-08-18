var thumbnails = document.querySelectorAll('.thumbnail');
      var popup = document.querySelector('.image-popup');
      var popupImage = popup.querySelector('img');
      
      for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
          var imageSource = this.getAttribute('src');
          popupImage.setAttribute('src', imageSource);
          popup.style.display = 'block';
        });
      }
      
      popup.addEventListener('click', function() {
        popup.style.display = 'none';
      });