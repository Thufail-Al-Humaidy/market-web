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
