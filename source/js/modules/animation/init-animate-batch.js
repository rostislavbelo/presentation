const initAnimateBatch = () => {

  // gsap.set('[data-animate="fade"]', {opacity: 0});
  gsap.set('[data-animate="fade-in"]', {opacity: 0, y: 25});
  gsap.set('[data-animate="fade-scale"]', {opacity: 0, scale: 0});

  // ScrollTrigger.batch('[data-animate="fade"]', {
  //   onEnter: (batch) => gsap.to(batch, {opacity: 1, stagger: {each: 0.25}}),
  //   start: '90% 90%',
  //   end: 'top top',
  //   scrub: true,
  // });

  ScrollTrigger.batch('[data-animate="fade-in"]', {
    onEnter: (batch) => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.25}}),
    start: '90% 90%',
    end: 'top top',
    scrub: true,
  });

  ScrollTrigger.batch('[data-animate="fade-scale"]', {
    onEnter: (batch) => gsap.to(batch, {opacity: 1, scale: 1, stagger: {each: 0.25}}),
    start: '90% 90%',
    end: 'top top',
    scrub: true,
  });

  gsap.set('[data-animate="fade-scale-reverce"]', {opacity: 0, scale: 0.5});

  const setParallax = gsap.timeline({paused: true});
  setParallax.to('[data-animate="fade-scale-reverce"]', {
    opacity: 1,
    scale: 1,
  });

  ScrollTrigger.create({
    trigger: '[data-animate="fade-scale-reverce"]',
    start: 'center bottom',
    end: 'bottom center',
    scrub: true,
    onUpdate: (self) => {
      setParallax.progress(self.progress).paused();
    },
  });
};

export {initAnimateBatch};
