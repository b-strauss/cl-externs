/**
 * https://github.com/nolimits4web/Swiper
 */

var swiperExtern;

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
 *   fade: (swiperExtern.FadeParameters|undefined),
 *   cube: (swiperExtern.CubeParameters|undefined),
 *   coverflow: (swiperExtern.CoverflowParameters|undefined),
 *   flip: (swiperExtern.FlipParameters|undefined),
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
 *   paginationBulletRender: (function(Swiper, number, string):string|undefined),
 *   paginationFractionRender: (function(Swiper, string, string):string|undefined),
 *   paginationProgressRender: (function(Swiper, string):string|undefined),
 *   paginationCustomRender: (function(Swiper, string, string):string|undefined),
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
 *   breakpoints: (Object<number, swiperExtern.Parameters>|undefined),
 *
 *   runCallbacksOnInit: (boolean|undefined),
 *   onInit: (function(Swiper):void|undefined),
 *   onSlideChangeStart: (function(Swiper):void|undefined),
 *   onSlideChangeEnd: (function(Swiper):void|undefined),
 *   onSlideNextStart: (function(Swiper):void|undefined),
 *   onSlideNextEnd: (function(Swiper):void|undefined),
 *   onSlidePrevStart: (function(Swiper):void|undefined),
 *   onSlidePrevEnd: (function(Swiper):void|undefined),
 *   onTransitionStart: (function(Swiper):void|undefined),
 *   onTransitionEnd: (function(Swiper):void|undefined),
 *   onTouchStart: (function(Swiper, Event):void|undefined),
 *   onTouchMove: (function(Swiper, Event):void|undefined),
 *   onTouchMoveOpposite: (function(Swiper, Event):void|undefined),
 *   onSliderMove: (function(Swiper, Event):void|undefined),
 *   onTouchEnd: (function(Swiper, Event):void|undefined),
 *   onClick: (function(Swiper, Event):void|undefined),
 *   onTap: (function(Swiper, Event):void|undefined),
 *   onDoubleTap: (function(Swiper, Event):void|undefined),
 *   onImagesReady: (function(Swiper):void|undefined),
 *   onProgress: (function(Swiper, number):void|undefined),
 *   onReachBeginning: (function(Swiper):void|undefined),
 *   onReachEnd: (function(Swiper):void|undefined),
 *   onDestroy: (function(Swiper):void|undefined),
 *   onSetTranslate: (function(Swiper, number):void|undefined),
 *   onSetTransition: (function(Swiper, number):void|undefined),
 *   onAutoplay: (function(Swiper):void|undefined),
 *   onAutoplayStart: (function(Swiper):void|undefined),
 *   onAutoplayStop: (function(Swiper):void|undefined),
 *   onLazyImageLoad: (function(Swiper, number, HTMLImageElement):void|undefined),
 *   onLazyImageReady: (function(Swiper, number, HTMLImageElement):void|undefined),
 *   onPaginationRendered: (function(Swiper, HTMLElement):void|undefined),
 *   onScroll: (function(Swiper, Event):void|undefined),
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
swiperExtern.Parameters;

/**
 * @typedef {{
 *   crossFade: (boolean|undefined)
 * }}
 */
swiperExtern.FadeParameters;

/**
 * @typedef {{
 *   slideShadows: (boolean|undefined),
 *   shadow: (boolean|undefined),
 *   shadowOffset: (number|undefined),
 *   shadowScale: (number|undefined)
 * }}
 */
swiperExtern.CubeParameters;

/**
 * @typedef {{
 *   rotate: (number|undefined),
 *   stretch: (number|undefined),
 *   depth: (number|undefined),
 *   modifier: (number|undefined),
 *   slideShadows: (boolean|undefined)
 * }}
 */
swiperExtern.CoverflowParameters;

/**
 * @typedef {{
 *   slideShadows: (boolean|undefined),
 *   limitRotation: (boolean|undefined)
 * }}
 */
swiperExtern.FlipParameters;

/**
 * @param {HTMLElement|string} swiperContainer
 * @param {swiperExtern.Parameters=} parameters
 * @constructor
 */
function Swiper(swiperContainer, parameters) {
}

/**
 * @type {swiperExtern.Parameters}
 */
Swiper.prototype.params;

/**
 * @type {IArrayLike<HTMLElement>}
 */
Swiper.prototype.container;

/**
 * @type {IArrayLike<HTMLElement>}
 */
Swiper.prototype.wrapper;

/**
 * @type {IArrayLike<HTMLElement>}
 */
Swiper.prototype.slides;

/**
 * @type {IArrayLike<HTMLElement>}
 */
Swiper.prototype.nextButton;

/**
 * @type {IArrayLike<HTMLElement>}
 */
Swiper.prototype.prevButton;

/**
 * @type {IArrayLike<HTMLElement>}
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
 * @returns {void}
 */
Swiper.prototype.slideNext = function (runCallbacks, opt_speed) {
};

/**
 * @param {boolean} runCallbacks
 * @param {number=} opt_speed
 * @returns {void}
 */
Swiper.prototype.slidePrev = function (runCallbacks, opt_speed) {
};

/**
 * @param {number} index
 * @param {number=} opt_speed
 * @param {boolean=} opt_runCallbacks
 * @returns {void}
 */
Swiper.prototype.slideTo = function (index, opt_speed, opt_runCallbacks) {
};

/**
 * @param {boolean=} opt_updateTranslate
 * @returns {void}
 */
Swiper.prototype.update = function (opt_updateTranslate) {
};

/**
 * @returns {void}
 */
Swiper.prototype.onResize = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.detachEvents = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.attachEvents = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.startAutoplay = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.stopAutoplay = function () {
};

/**
 * @param {boolean=} opt_deleteInstance
 * @param {boolean=} opt_cleanupStyles
 * @returns {void}
 */
Swiper.prototype.destroy = function (opt_deleteInstance, opt_cleanupStyles) {
};

/**
 * @param {string|HTMLElement|Array<string>|Array<HTMLElement>} slides
 * @returns {void}
 */
Swiper.prototype.appendSlide = function (slides) {
};

/**
 * @param {string|HTMLElement|Array<string>|Array<HTMLElement>} slides
 * @returns {void}
 */
Swiper.prototype.prependSlide = function (slides) {
};

/**
 * @param {number|Array<number>} slideIndex
 * @returns {void}
 */
Swiper.prototype.removeSlide = function (slideIndex) {
};

/**
 * @returns {void}
 */
Swiper.prototype.removeAllSlides = function () {
};

/**
 * @param {number} translate
 * @returns {void}
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
 * @returns {void}
 */
Swiper.prototype.on = function (callback, handler) {
};

/**
 * @param {string} callback
 * @param {function(Event)} handler
 * @returns {void}
 */
Swiper.prototype.once = function (callback, handler) {
};

/**
 * @param {string} callback
 * @returns {void}
 */
Swiper.prototype.off = function (callback) {
};

/**
 * @returns {void}
 */
Swiper.prototype.lockSwipeToNext = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.unlockSwipeToNext = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.lockSwipeToPrev = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.unlockSwipeToPrev = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.lockSwipes = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.unlockSwipes = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.disableMousewheelControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.enableMousewheelControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.disableKeyboardControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.enableKeyboardControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.disableTouchControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.enableTouchControl = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.unsetGrabCursor = function () {
};

/**
 * @returns {void}
 */
Swiper.prototype.setGrabCursor = function () {
};
