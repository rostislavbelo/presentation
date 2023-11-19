import './utils/scroll-lock.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initMainNav} from './modules/init-main-nav';
import {initLoader} from './modules/init-loader';
import {addScrollLock} from './utils/scroll-lock-ios';
import {initAnimateIntro} from './modules/animation/init-animate-intro.js';
import {initAnimateBatch} from './modules/animation/init-animate-batch.js';
import {initStickySlider} from './modules/animation/init-sticky-slider.js';

// ---------------------------------
addScrollLock();

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initMainNav();
    initAnimateBatch();
    initStickySlider();
    initLoader();

    window.addEventListener('loaderOff', () => {
      initAnimateIntro();
    });
  });
});
