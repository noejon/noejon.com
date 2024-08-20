const SCROLL_DIRECTION_UP = "up";
const SCROLL_DIRECTION_DOWN = "down";

const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });

  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Getting the scroll direction to move the message up and down
  let lastScrollTop = window.scrollY || document.body.scrollTop;
  let scrollDirection;

  function storeScroll() {
    const currentScrollTop = window.scrollY || document.body.scrollTop;

    const smalls = document.querySelectorAll('.small');
    const navigationItems = document.querySelectorAll('.navigation-item');

    smalls.forEach((small) => {
      (small as HTMLElement).dataset.scroll = "" + currentScrollTop;
    })

    navigationItems.forEach((navigationItem) => {
      (navigationItem as HTMLElement).dataset.scroll = "" + currentScrollTop;
    })
  }

  document.addEventListener("scroll", debounce(storeScroll), { passive: true })
});