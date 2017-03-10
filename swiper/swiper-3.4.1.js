/**
 * https://github.com/nolimits4web/Swiper
 */

/**
 * @param {HTMLElement|string} swiperContainer
 * @param {Swiper.Parameters=} parameters
 * @constructor
 */
function Swiper(swiperContainer, parameters) {
}

/**
 * @typedef {{
 *   initialSlide: (number|undefined),
 *   direction: (string|undefined),
 *   speed: (number|undefined),
 *   setWrapperSize: (boolean|undefined),
 *   virtualTranslate: (boolean|undefined),
 *   width: (number|undefined),
 *   height: (number|undefined),
 *   autoHeight: (boolean|undefined),
 *   roundLengths: (boolean|undefined),
 *   nested: (boolean|undefined),
 *
 *   autoplay: (number|undefined),
 *   autoplayStopOnLast: (boolean|undefined),
 *   autoplayDisableOnInteraction: (boolean|undefined),
 *
 *   watchSlidesProgress: (boolean|undefined),
 *   watchSlidesVisibility: (boolean|undefined),
 *
 *   freeMode: (boolean|undefined),
 *   freeModeMomentum: (boolean|undefined),
 *   freeModeMomentumRatio: (number|undefined),
 *   freeModeMomentumVelocityRatio: (number|undefined),
 *   freeModeMomentumBounce: (boolean|undefined),
 *   freeModeMomentumBounceRatio: (number|undefined),
 *   freeModeMinimumVelocity: (number|undefined),
 *   freeModeSticky: (boolean|undefined),
 *
 *   effect: (string|undefined),
 *   fade: (Swiper.FadeParameters|undefined),
 *   cube: (Swiper.CubeParameters|undefined),
 *   coverflow: (Swiper.CoverflowParameters|undefined),
 *   flip: (Swiper.FlipParameters|undefined),
 *
 *   parallax: (boolean|undefined),
 *
 *   spaceBetween: (number|undefined),
 *   slidesPerView: (number|string|undefined),
 *   slidesPerColumn: (number|undefined),
 *   slidesPerColumnFill: (string|undefined),
 *   slidesPerGroup: (number|undefined),
 *   centeredSlides: (boolean|undefined),
 *   slidesOffsetBefore: (number|undefined),
 *   slidesOffsetAfter: (number|undefined),
 *
 *   grabCursor: (boolean|undefined),
 *
 *   touchEventsTarget: (string|undefined),
 *   touchRatio: (number|undefined),
 *   touchAngle: (number|undefined),
 *   simulateTouch: (boolean|undefined),
 *   shortSwipes: (boolean|undefined),
 *   longSwipes: (boolean|undefined),
 *   longSwipesRatio: (number|undefined),
 *   longSwipesMs: (number|undefined),
 *   followFinger: (boolean|undefined),
 *   onlyExternal: (boolean|undefined),
 *   threshold: (number|undefined),
 *   touchMoveStopPropagation: (boolean|undefined),
 *   iOSEdgeSwipeDetection: (boolean|undefined),
 *   iOSEdgeSwipeThreshold: (number|undefined),
 *   touchReleaseOnEdges: (boolean|undefined),
 *   passiveListeners: (boolean|undefined),
 *
 *   resistance: (boolean|undefined),
 *   resistanceRatio: (number|undefined),
 *
 *   preventClicks: (boolean|undefined),
 *   preventClicksPropagation: (boolean|undefined),
 *   slideToClickedSlide: (boolean|undefined),
 *
 *   allowSwipeToPrev: (boolean|undefined),
 *   allowSwipeToNext: (boolean|undefined),
 *   noSwiping: (boolean|undefined),
 *   noSwipingClass: (string|undefined),
 *   swipeHandler: (string|HTMLElement|undefined),
 *
 *   uniqueNavElements: (boolean|undefined),
 *
 *   pagination: (string|HTMLElement|undefined),
 *   paginationType: (string|undefined),
 *   paginationHide: (boolean|undefined),
 *   paginationClickable: (boolean|undefined),
 *   paginationElement: (string|undefined),
 *   paginationBulletRender: (function(Swiper, number, string)|undefined),
 *   paginationFractionRender: (function(Swiper, string, string)|undefined),
 *   paginationProgressRender: (function(Swiper, string)|undefined),
 *   paginationCustomRender: (function(Swiper, string, string)|undefined),
 *
 *   nextButton: (string|HTMLElement|undefined),
 *   prevButton: (string|HTMLElement|undefined),
 *
 *   scrollbar: (string|HTMLElement|undefined),
 *   scrollbarHide: (boolean|undefined),
 *   scrollbarDraggable: (boolean|undefined),
 *   scrollbarSnapOnRelease: (boolean|undefined),
 *
 *   a11y: (boolean|undefined),
 *   prevSlideMessage: (string|undefined),
 *   nextSlideMessage: (string|undefined),
 *   firstSlideMessage: (string|undefined),
 *   lastSlideMessage: (string|undefined),
 *   paginationBulletMessage: (string|undefined),
 *
 *   keyboardControl: (boolean|undefined),
 *   mousewheelControl: (boolean|undefined),
 *   mousewheelForceToAxis: (boolean|undefined),
 *   mousewheelReleaseOnEdges: (boolean|undefined),
 *   mousewheelInvert: (boolean|undefined),
 *   mousewheelSensitivity: (number|undefined),
 *   mousewheelEventsTarged: (string|HTMLElement|undefined),
 *
 *   hashnav: (boolean|undefined),
 *   hashnavWatchState: (boolean|undefined),
 *   history: (string|undefined),
 *   replaceState: (boolean|undefined),
 *
 *   preloadImages: (boolean|undefined),
 *   updateOnImagesReady: (boolean|undefined),
 *   lazyLoading: (boolean|undefined),
 *   lazyLoadingInPrevNext: (boolean|undefined),
 *   lazyLoadingInPrevNextAmount: (number|undefined),
 *   lazyLoadingOnTransitionStart: (boolean|undefined),
 *
 *   loop: (boolean|undefined),
 *   loopAdditionalSlides: (number|undefined),
 *   loopedSlides: (number|undefined),
 *
 *   zoom: (boolean|undefined),
 *   zoomMax: (number|undefined),
 *   zoomMin: (number|undefined),
 *   zoomToggle: (boolean|undefined),
 *
 *   control: (Swiper|Array<Swiper>|undefined),
 *   controlInverse: (boolean|undefined),
 *   controlBy: (string|undefined),
 *   normalizeSlideIndex: (boolean|undefined),
 *
 *   observer: (boolean|undefined),
 *   observeParents: (boolean|undefined),
 *
 *   breakpoints: (Object<number, Swiper.Parameters>|undefined),
 *
 *   runCallbacksOnInit: (boolean|undefined),
 *   onInit: (function(Swiper)|undefined),
 *   onSlideChangeStart: (function(Swiper)|undefined),
 *   onSlideChangeEnd: (function(Swiper)|undefined),
 *   onSlideNextStart: (function(Swiper)|undefined),
 *   onSlideNextEnd: (function(Swiper)|undefined),
 *   onSlidePrevStart: (function(Swiper)|undefined),
 *   onSlidePrevEnd: (function(Swiper)|undefined),
 *   onTransitionStart: (function(Swiper)|undefined),
 *   onTransitionEnd: (function(Swiper)|undefined),
 *   onTouchStart: (function(Swiper, Event)|undefined),
 *   onTouchMove: (function(Swiper, Event)|undefined),
 *   onTouchMoveOpposite: (function(Swiper, Event)|undefined),
 *   onSliderMove: (function(Swiper, Event)|undefined),
 *   onTouchEnd: (function(Swiper, Event)|undefined),
 *   onClick: (function(Swiper, Event)|undefined),
 *   onTap: (function(Swiper, Event)|undefined),
 *   onDoubleTap: (function(Swiper, Event)|undefined),
 *   onImagesReady: (function(Swiper)|undefined),
 *   onProgress: (function(Swiper, number)|undefined),
 *   onReachBeginning: (function(Swiper)|undefined),
 *   onReachEnd: (function(Swiper)|undefined),
 *   onDestroy: (function(Swiper)|undefined),
 *   onSetTranslate: (function(Swiper, number)|undefined),
 *   onSetTransition: (function(Swiper, number)|undefined),
 *   onAutoplay: (function(Swiper)|undefined),
 *   onAutoplayStart: (function(Swiper)|undefined),
 *   onAutoplayStop: (function(Swiper)|undefined),
 *   onLazyImageLoad: (function(Swiper, number, HTMLImageElement)|undefined),
 *   onLazyImageReady: (function(Swiper, number, HTMLImageElement)|undefined),
 *   onPaginationRendered: (function(Swiper, HTMLElement)|undefined),
 *   onScroll: (function(Swiper, Event)|undefined),
 *
 *   containerModifierClass: (string|undefined),
 *   slideClass: (string|undefined),
 *   slideActiveClass: (string|undefined),
 *   slideDuplicatedActiveClass: (string|undefined),
 *   slideVisibleClass: (string|undefined),
 *   slideDuplicateClass: (string|undefined),
 *   slideNextClass: (string|undefined),
 *   slideDuplicatedNextClass: (string|undefined),
 *   slidePrevClass: (string|undefined),
 *   slideDuplicatedPrevClass: (string|undefined),
 *   wrapperClass: (string|undefined),
 *   bulletClass: (string|undefined),
 *   bulletActiveClass: (string|undefined),
 *   paginationHiddenClass: (string|undefined),
 *   paginationCurrentClass: (string|undefined),
 *   paginationTotalClass: (string|undefined),
 *   paginationProgressbarClass: (string|undefined),
 *   paginationClickableClass: (string|undefined),
 *   paginationModifierClass: (string|undefined),
 *   buttonDisabledClass: (string|undefined),
 *   lazyLoadingClass: (string|undefined),
 *   lazyStatusLoadingClass: (string|undefined),
 *   lazyStatusLoadedClass: (string|undefined),
 *   lazyPreloaderClass: (string|undefined),
 *   preloaderClass: (string|undefined),
 *   zoomContainerClass: (string|undefined),
 *   notificationClass: (string|undefined)
 * }}
 */
Swiper.Parameters;

/**
 * @typedef {{
 *   crossFade: (boolean|undefined)
 * }}
 */
Swiper.FadeParameters;

/**
 * @typedef {{
 *   slideShadows: (boolean|undefined),
 *   shadow: (boolean|undefined),
 *   shadowOffset: (number|undefined),
 *   shadowScale: (number|undefined)
 * }}
 */
Swiper.CubeParameters;

/**
 * @typedef {{
 *   rotate: (number|undefined),
 *   stretch: (number|undefined),
 *   depth: (number|undefined),
 *   modifier: (number|undefined),
 *   slideShadows: (boolean|undefined)
 * }}
 */
Swiper.CoverflowParameters;

/**
 * @typedef {{
 *   slideShadows: (boolean|undefined),
 *   limitRotation: (boolean|undefined)
 * }}
 */
Swiper.FlipParameters;

/**
 * @type {Swiper.Parameters}
 */
Swiper.prototype.params;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.container;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.wrapper;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.slides;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.nextButton;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.prevButton;

/**
 * @type {Array<HTMLElement>}
 */
Swiper.prototype.bullets;

/**
 * @type {number}
 */
Swiper.prototype.width;

/**
 * @type {number}
 */
Swiper.prototype.height;

/**
 * @type {number}
 */
Swiper.prototype.translate;

/**
 * @type {number}
 */
Swiper.prototype.progress;

/**
 * @type {number}
 */
Swiper.prototype.activeIndex;

/**
 * @type {number}
 */
Swiper.prototype.realIndex;

/**
 * @type {number}
 */
Swiper.prototype.previousIndex;

/**
 * @type {boolean}
 */
Swiper.prototype.isBeginning;

/**
 * @type {boolean}
 */
Swiper.prototype.isEnd;

/**
 * @type {boolean}
 */
Swiper.prototype.autoplaying;

/**
 * @type {boolean}
 */
Swiper.prototype.animating;

/**
 * @type {{
 *   startX: number,
 *   startY: number,
 *   currentX: number,
 *   currentY: number,
 *   diff: number
 * }}
 */
Swiper.prototype.touches;

/**
 * @type {number}
 */
Swiper.prototype.clickedIndex;

/**
 * @type {HTMLElement}
 */
Swiper.prototype.clickedSlide;

/**
 * @param {boolean} runCallbacks
 * @param {number=} opt_speed
 */
Swiper.prototype.slideNext = function (runCallbacks, opt_speed) {
};

/**
 * @param {boolean} runCallbacks
 * @param {number=} opt_speed
 */
Swiper.prototype.slidePrev = function (runCallbacks, opt_speed) {
};

/**
 * @param {number} index
 * @param {number=} opt_speed
 * @param {boolean=} opt_runCallbacks
 */
Swiper.prototype.slideTo = function (index, opt_speed, opt_runCallbacks) {
};

/**
 * @param {boolean=} opt_updateTranslate
 */
Swiper.prototype.update = function (opt_updateTranslate) {
};

Swiper.prototype.onResize = function () {
};

Swiper.prototype.detachEvents = function () {
};

Swiper.prototype.attachEvents = function () {
};

Swiper.prototype.startAutoplay = function () {
};

Swiper.prototype.stopAutoplay = function () {
};

/**
 * @param {boolean=} opt_deleteInstance
 * @param {boolean=} opt_cleanupStyles
 */
Swiper.prototype.destroy = function (opt_deleteInstance, opt_cleanupStyles) {
};

/**
 * @param {string|HTMLElement|Array<string>|Array<HTMLElement>} slides
 */
Swiper.prototype.appendSlide = function (slides) {
};

/**
 * @param {string|HTMLElement|Array<string>|Array<HTMLElement>} slides
 */
Swiper.prototype.prependSlide = function (slides) {
};

/**
 * @param {number|Array<number>} slideIndex
 */
Swiper.prototype.removeSlide = function (slideIndex) {
};

Swiper.prototype.removeAllSlides = function () {
};

/**
 * @param {number} translate
 */
Swiper.prototype.setWrapperTranslate = function (translate) {
};

/**
 * @returns {number}
 */
Swiper.prototype.getWrapperTranslate = function () {
};

/**
 * @param {string} callback
 * @param {function(Event)} handler
 */
Swiper.prototype.on = function (callback, handler) {
};

/**
 * @param {string} callback
 * @param {function(Event)} handler
 */
Swiper.prototype.once = function (callback, handler) {
};

/**
 * @param {string} callback
 */
Swiper.prototype.off = function (callback) {
};

Swiper.prototype.lockSwipeToNext = function () {
};

Swiper.prototype.unlockSwipeToNext = function () {
};

Swiper.prototype.lockSwipeToPrev = function () {
};

Swiper.prototype.unlockSwipeToPrev = function () {
};

Swiper.prototype.lockSwipes = function () {
};

Swiper.prototype.unlockSwipes = function () {
};

Swiper.prototype.disableMousewheelControl = function () {
};

Swiper.prototype.enableMousewheelControl = function () {
};

Swiper.prototype.disableKeyboardControl = function () {
};

Swiper.prototype.enableKeyboardControl = function () {
};

Swiper.prototype.disableTouchControl = function () {
};

Swiper.prototype.enableTouchControl = function () {
};

Swiper.prototype.unsetGrabCursor = function () {
};

Swiper.prototype.setGrabCursor = function () {
};