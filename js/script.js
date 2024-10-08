document.getElementById("menubtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// about

  // Scroll Animation Effect
  // window.addEventListener('scroll', function() {
  //   const aboutSection = document.querySelector('.about');
  //   const aboutPosition = aboutSection.getBoundingClientRect().top;
  //   const screenPosition = window.innerHeight / 1.3;

  //   if (aboutPosition < screenPosition) {
  //     aboutSection.classList.add('show');
  //   } else {
  //     aboutSection.classList.remove('show');
  //   }
  // });



// JS FAQ's
function toggleAnswer(button) {
      const answerDiv = button.closest('.question').querySelector('.answer');
      
      if (answerDiv.style.height) {
        // If already open, hide it
        answerDiv.style.height = null;
      } else {
        // Get the full height of the content and set it
        const fullHeight = answerDiv.scrollHeight + "px";
        answerDiv.style.height = fullHeight;
      }
    }

$('.single-item-rtl').slick({
  rtl: true, // Menjalankan carousel dari kanan ke kiri
  slidesToShow: 3, // Menampilkan 3 gambar sekaligus
  slidesToScroll: 1, // Menggeser satu per satu gambar
  autoplay: true, // Menjalankan carousel otomatis
  autoplaySpeed: 2000, // Kecepatan autoplay (2 detik)
  dots: true, // Menampilkan titik navigasi
  arrows: true // Menampilkan panah navigasi
});
