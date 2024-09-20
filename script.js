document.getElementById("menubtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

document.addEventListener('DOMContentLoaded', function () {
  let portfolioContainer = document.querySelector('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    let portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    portfolioFilters.forEach((filter) => {
      filter.addEventListener('click', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
          el.classList.replace('bg-green-500', 'bg-gray-500');
        });
        this.classList.add('filter-active');
        this.classList.replace('bg-gray-500', 'bg-green-500');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      });
    });
  }
});
// about

  // Scroll Animation Effect
  window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
      aboutSection.classList.add('show');
    } else {
      aboutSection.classList.remove('show');
    }
  });



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
