// ========Counter On Portfolio Section=============

const myNum = document.querySelectorAll('.count');
let speed = 500;

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when 50% of the element is in the viewport
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetCount = entry.target.dataset.count;
      let initCount = +entry.target.innerText;
      const newIncrementNum = Math.floor(targetCount / speed);

      const updateNumber = () => {
        initCount += newIncrementNum;
        entry.target.innerText = initCount;

        if (initCount < targetCount) {
          setTimeout(() => {
            updateNumber();
          }, 5);
        }
      };

      updateNumber();

      // Once we start the animation, we no longer need to observe this element.
      observer.unobserve(entry.target);
    }
  });
}, options);

// Start observing all elements with the "count" class.
myNum.forEach(myCount => {
  observer.observe(myCount);
});


// =========On scroll navbar background color change=================

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('#navbar_section');
  if (window.scrollY > 80) {
    navbar.style.backgroundColor = '#8d8fdb'; // Change the background color on scroll
  } else {
    navbar.style.backgroundColor = 'transparent'; // Restore the transparent background
  }
});
