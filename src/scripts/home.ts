const MESSAGES = [
  `The code editor is my canva and the keyboard is my brush. Call me Picasso`,
  `<sup>*</sup>Definitely won't use the fee to bribe anyone.`,
  `Yep! I am your man &#128175;, don't look further! <br/>Actually, please continue scrolling, put lots of work into this!`,
  `Was initially asked to do the project in excel VBA...
  Asked two weeks for a C# Prototype!
  Prototype grew into an award winner`,
  `We eventually scaled up and that was my introduction to leadership. Learned heaps since then!`,
  `Apparently I even wrote the most amazing, but now lost, book about some dinosaurs friends going on an adventure!`,
  `I am pretty adaptable to any technologies/languages. BUT PLEEEAAAAAASE don't ask me to learn COBOL`,
  `Pretty cool, isn't it?`,
  `Wanna know more about the books I read, head to my 
  <a target="_blank" href="./books">
    Books
  </a> page`,
  `It definitely sparks more joy than tidying up the kids' playroom!`,
  `You probably left already! I can say whatever I want! Cucumber!`,
  `Jokes aside, real badges are next`,
  `If you see it here, I am somewhat skilled with it and have shipped code to production.`,
  `"But Jon, how can you write a cover letter? Is it not going to be too generic?" I am a master of my craft, open it you'll see by yourself!`,
  `That or you are impressed by our little chat! Wanna chat further? Continue reading`,
];

const SCROLL_DIRECTION_UP = "up";
const SCROLL_DIRECTION_DOWN = "down";

const CLASS_RIGHT = "right";
const CLASS_LEFT = "left";

const MESSAGE_OBSERVER_OPTIONS = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px 0px 0px"
}

function wazza(message: HTMLElement) {
  const { left: messageLeft, top: messageTop, width: messageWidth } = message.getBoundingClientRect();

  const leTalkativeJon = document.querySelector('.le-talkative-jon') as HTMLElement;
  const leMessage = document.querySelector('#leMessage');

  if (!leTalkativeJon || !leMessage || !message.dataset.messageId) {
    return;
  }

  leTalkativeJon.style.position = "absolute";

  if (message.parentElement?.classList.contains('flex-column-align-left')) {
    leTalkativeJon.classList.remove(CLASS_RIGHT);
    leTalkativeJon.classList.add(CLASS_LEFT);
    leTalkativeJon.style.left = messageLeft + "px";
  }
  if (message.parentElement?.classList.contains('flex-column-align-right')) {
    leTalkativeJon.classList.remove(CLASS_LEFT);
    leTalkativeJon.classList.add(CLASS_RIGHT);
    // Before you try refactoring this to right for the 100th time. You can't as it'll add both left and right
    // And when you read this, it fucked up the animations and you have no time to fix this if the following works
    leTalkativeJon.style.left = messageLeft + messageWidth - leTalkativeJon.getBoundingClientRect().width + "px";
  }

  leTalkativeJon.style.top = window.scrollY + messageTop + "px";


  leMessage.innerHTML = MESSAGES[message.dataset.messageId as unknown as number];
}

document.addEventListener('DOMContentLoaded', function () {
  // Getting the scroll direction to move the message up and down
  let lastScrollTop = window.scrollY || document.body.scrollTop;
  let scrollDirection: 'up' | 'down';

  // The following is a dirty solution. I had great plans, did not pan out.
  // No time for a big refactor, so just hacking the following together
  // Good luck future Jon
  const smalls = document.querySelectorAll('.small');
  const navigationItems = document.querySelectorAll('.navigation-item');

  smalls.forEach((small) => {
    (small as HTMLElement).dataset.scroll = "1";
  })

  navigationItems.forEach((navigationItem) => {
    (navigationItem as HTMLElement).dataset.scroll = "2";
  })

  // End of dirty solution

  document.addEventListener("scroll", function () {
    const currentScrollTop = window.scrollY || document.body.scrollTop;

    scrollDirection = currentScrollTop > lastScrollTop ? SCROLL_DIRECTION_DOWN : SCROLL_DIRECTION_UP;
    lastScrollTop = currentScrollTop;
  }, { passive: true })

  const visibleInterceptors: HTMLElement[] = [];

  const messagesIntersectionObserverCallback: IntersectionObserverCallback = (entries) => {
    for (const entry of entries) {
      const htmlElementEntry = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        scrollDirection === SCROLL_DIRECTION_DOWN ? visibleInterceptors.push(htmlElementEntry) : visibleInterceptors.unshift(htmlElementEntry);
      } else {
        const indexOfTarget = visibleInterceptors.indexOf(htmlElementEntry);
        visibleInterceptors.splice(indexOfTarget, 1);
      }

      if (visibleInterceptors.length === 0) {
        return;
      }

      if ([1, 2].find((index) => visibleInterceptors.length === index)) {
        wazza(visibleInterceptors[visibleInterceptors.length - 1]);
      } else {
        wazza(visibleInterceptors[visibleInterceptors.length - 2]);
      }
    }
  }

  const messagesObserver = new IntersectionObserver(messagesIntersectionObserverCallback, MESSAGE_OBSERVER_OPTIONS);

  const messageIntersectors = document.querySelectorAll('[data-message-id]');

  // Initialising wazza to the first div before adding the observer
  // This is to avoid screen jumping unnecessarily 
  wazza(messageIntersectors[0] as HTMLElement);

  for (const messageIntersector of messageIntersectors) {
    messagesObserver.observe(messageIntersector);
  }


});