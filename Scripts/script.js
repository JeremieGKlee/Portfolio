$(function() {
    $('.section1').vegas({
        overlay: true,
        delay: 10000,
        slidesToKeep: 1,
        transition: 'fade2',
        transitionDuration: 8000,
        animation: 'random',
        animationDuration: 10000,
        slides: [
            { src: '../Portfolio/Photo/2.jpg'},
            { src: '../Portfolio/Photo/6.jpg'},
            { video: [ '../Portfolio/Photo/distribution_de_cartes.mp4'] }
        ]
    });
});

 /* global applyJayBar: true, $ */

// $(function () {
//     'use strict';

//     applyJayBar(".topbar");

//     function isMobile() {
//         return /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
//     }

//     function fullscreen() {
//         $('.homepage-header').css({
//             width:  $(window).width(),
//             height: $(window).height()
//         });
//     }

//     $(window).resize(function() {
//         fullscreen();
//     }).resize();

//     $('html').addClass('animate');

//     $('#do-open-menu').on('click', function (e) {
//         e.preventDefault();

//         $('.homepage-menu').toggleClass('open');
//     });

//     $('#do-donate').on('click', function (e) {
//         e.preventDefault();

//         $('.paypal-form').submit();
//     });

//     $('#do-show-menu').on('click', function (e) {
//         e.preventDefault();

//         $('body').addClass('menu-shown');
//     });

//     $('#do-hide-menu').on('click', function (e) {
//         e.preventDefault();

//         $('body').removeClass('menu-shown');
//     });

//     // $('.do-open-support').on('click', function (e) {
//     //     $('.support').addClass('support-shown');

//     //     e.preventDefault();
//     // });

//     // $('.do-close-support').on('click', function (e) {
//     //     $('.support').removeClass('support-shown');

//     //     e.preventDefault();
//     // });

//     if (window.location.hash === '#support') {
//         $('.support').addClass('support-shown');
//     }

//     $(window).on('hashchange', function() {
//         console.log(window.location.hash);
//         if (window.location.hash === '#support') {
//             $('.support').addClass('support-shown');
//         } else {
//             $('.support').removeClass('support-shown');
//         }
//     });

//     $('.jaybar-button-email').off('click').on('click', function (e) {

//         window.location.hash = '#support';
//         e.preventDefault();
//         e.stopPropagation();

//         return false;
//     });

//     $('.email').on('click', function (e) {
//         document.location = 'mailto:' + $(this).attr('href').replace('#', '@');

//         e.preventDefault();
//     });

//     // Topbar Menu
//     //
//     $('.topbar-menu-button').on('click', function (e) {
//         $(this).toggleClass('topbar-menu-button-active');

//         $('.topbar-menu').toggleClass('topbar-menu-open');

//         e.preventDefault();
//     });

//     // Adpacks

//     $(window).on('load', function() {
//         setTimeout(function () {
//             if (!$('#carbonads').size() && !isMobile()) {
//                 $('.sponsors').load('/partials/adblocked.html');
//             }
//         }, 5000);

//         if (isMobile()) {
//             $('html').addClass('mobile');
//         }

//         $('body').addClass('loaded');
//     });

//     // Release
//     //
//     if ($('#version').size()) {
//         $.ajax({
//             url: 'https://jaysalvat.github.io/vegas/releases/latest/metadata.js',
//             dataType: 'jsonp',
//             jsonpCallback: '__metadata',
//             cache: true,
//             success: function (data) {
//                 $('#version span')
//                     .text(data.version.replace('v', ''))
//                     .attr('title', 'Released ' + data.date.split(' ')[0]);
//             }
//         });
//     }

//     // Homepage

//     $('.homepage-header').vegas({
//         overlay: true,
//         delay: 10000,
//         slidesToKeep: 1,
//         transition: 'fade2',
//         transitionDuration: 8000,
//         animation: 'random',
//         animationDuration: 10000,
//         slides: [
//             { src: '/img/unsplash1.jpg', color: '#DBC9B3' },
//             { src: '/img/unsplash3.jpg', color: '#93CAC5' },
//             { src: '/img/unsplash2.jpg', color: '#D3A87E' },
//             { src: '/img/unsplash5.jpg', color: '#E2DC56' },
//             { src: '/img/unsplash4.jpg', color: '#DBC9B3' },
//             { src: '/img/unsplash6.jpg', color: '#93CAC5' },
//             { src: '/img/unsplash8.jpg', color: '#A58A6F' },
//             // { src: '/img/unsplash7.jpg', color: '#C383C9', transition: 'swirlRight' }
//         ],
//         walk: function (i, settings) {
//             i = null;

//             $('.homepage-info').find('a').css('color', settings.color);
//             $('.jaybar-buttons').css('background', settings.color);
//             $('.vegas-timer-progress').css('backgroundColor', settings.color);
//         }
//     });

//     // Documentation header
//     // With themes

//     var themes = [
//         { name: 'city',   src: '/img/unsplash1.jpg', valign: '55%' },
//         { name: 'lion',   src: '/img/unsplash2.jpg', valign: '40%' },
//         { name: 'car',    src: '/img/unsplash3.jpg', valign: '45%' },
//         { name: 'bear',   src: '/img/unsplash4.jpg', valign: '13%', halign: '0%' },
//         { name: 'fruits', src: '/img/unsplash5.jpg', valign: '45%' },
//         { name: 'surf',   src: '/img/unsplash6.jpg', valign: '45%' },
//         { name: 'sea',    src: '/img/unsplash8.jpg', valign: '40%' }
//     ];

//     var index = localStorage.getItem('theme-index') || 0;

//     if (index >= themes.length) {
//         index = 0;
//     }

//     var theme = themes[index];

//     index++;

//     localStorage.setItem('theme-index', index);

//     $('.documentation').addClass('theme-' + theme.name);

//     $('.documentation-header').vegas({
//         overlay: '/js/vegas/dist/overlays/05.png',
//         slides: [
//             { src: theme.src, valign: theme.valign || 'center' }
//         ]
//     });

//     // Demos and Tests

//     function startDemo(test) {
//         $('.vegas-container').each(function () {
//             $(this).vegas('pause');
//         });

//         if ($('#' + test)[0]._vegas) {
//             $('#' + test).vegas('play');
//         }

//         $('body').addClass('demo-playing');
//     }

//     // Example Set Up - 1

//     $('#do-test1-1').on('click', function (e) {
//         var test = 'test1-1';

//         startDemo(test);

//         $('#' + test).vegas({
//             slides: [
//                 { src: '/img/unsplash1.jpg' },
//                 { src: '/img/unsplash2.jpg' },
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg' }
//             ]
//         });

//         $('body').vegas({
//             overlay: true,
//             slides: [
//                 { src: '/img/unsplash1.jpg' },
//                 { src: '/img/unsplash2.jpg' },
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg' }
//             ]
//         });

//         e.preventDefault();
//     });

//     // Example Options - 1

//     $('#do-test2-1').on('click', function (e) {
//         var test = 'test2-1';

//         startDemo(test);

//         $('#' + test).vegas({
//             delay: 7000,
//             shuffle: true,
//             timer: false,
//             firstTransition: 'fade',
//             firstTransitionDuration: 5000,
//             transition: 'slideDown2',
//             transitionDuration: 2000,
//             slides: [
//                 { src: '/img/unsplash1.jpg' },
//                 { src: '/img/unsplash2.jpg' },
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg' }
//             ]
//         });

//         e.preventDefault();
//     });

//     // Example Options - 2

//     $('#do-test2-2').on('click', function (e) {
//         var test = 'test2-2';

//         startDemo(test);

//         $('#' + test).vegas({
//             timer: false,
//             transition: 'slideLeft2',
//             slides: [
//                 { src: '/img/unsplash1.jpg' },
//                 { src: '/img/unsplash2.jpg', transition: 'slideRight2' },
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg', transition: 'slideRight2' }
//             ]
//         });

//         e.preventDefault();
//     });

//     // Example Options - 3

//     $('#do-test2-3').on('click', function (e) {
//         var test = 'test2-3';

//         startDemo(test);

//         $('#' + test + '-console div').remove();

//         $('#' + test).vegas({
//             slides: [
//                 { src: '/img/unsplash1.jpg' },
//                 { src: '/img/unsplash2.jpg' },
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg' }
//             ],
//             init: function () {
//                 $('#' + test + '-console').append('<div>Init</div>');
//             },
//             play: function () {
//                 $('#' + test + '-console').append('<div>Play</div>');
//             },
//             walk: function (nb) {
//                 if ($('#' + test + '-console div').size() >= 3) {
//                     $('#' + test + '-console div').first().remove();
//                 }

//                 $('#' + test + '-console').append('<div>Slide index ' + nb + ' image /img/slide' + (nb + 1) + '.jpg</div>');
//             }
//         });

//         e.preventDefault();
//     });

//     // Example Options - 4

//     $('#test2-4').vegas({
//         slides: [
//             { src: '/img/unsplash3.jpg' }
//         ],
//         overlay: true
//     });

//     $('.overlay-list li').on('click', function (e) {
//         var overlay;

//         e.preventDefault();

//         $('.overlay-list li').removeClass('active');

//         overlay = $(this).attr('class').replace('overlay-', '');
//         overlay = '/js/vegas/dist/overlays/' + overlay + '.png';

//         $(this).addClass('active');

//         $('#test2-4 .vegas-overlay').css('background-image', 'url(' + overlay + ')');

//         $('#code-overlay').text("'" + overlay + "'");
//     });

//     // Example Options - 5

//     $('#do-test2-5').on('click', function (e) {
//         var test = 'test2-5';

//         startDemo(test);

//         $('#' + test).vegas({
//             slides: [
//                 { src: '/img/unsplash4.jpg' },
//                 { src: '/img/unsplash3.jpg', video: [
//                     '/videos/video.mp4',
//                     '/videos/video.webm',
//                     '/videos/video.ogv'
//                 ]}
//             ]
//         });

//         e.preventDefault();
//     });

//     // Example Transitions - 1

//     $('#test3-1').vegas({
//         delay: 3000,
//         slides: [
//             { src: '/img/unsplash1.jpg' },
//             { src: '/img/unsplash2.jpg' },
//             { src: '/img/unsplash3.jpg' },
//             { src: '/img/unsplash4.jpg', valign: '25%' }
//         ]
//     });

//     $('.transition-list li').on('click', function (e) {
//         var transition;

//         e.preventDefault();

//         $('.transition-list li').removeClass('active');

//         transition = $(this).text();

//         $(this).addClass('active');

//         $('#test3-1').vegas('options', 'transition', transition);

//         $('#code-transition').text(transition);
//     });

//     // Example Transitions - 2

//     $('#test3-2').vegas({
//         slides: [
//             { src: '/img/unsplash1.jpg' },
//             { src: '/img/unsplash2.jpg' },
//             { src: '/img/unsplash3.jpg' },
//             { src: '/img/unsplash4.jpg', valign: '25%' }
//         ],
//         animation: 'kenburns'
//     });

//     $('.animation-list li').on('click', function (e) {
//         var animation;

//         e.preventDefault();

//         $('.animation-list li').removeClass('active');

//         animation = $(this).text();

//         $(this).addClass('active');

//         $('#test3-2').vegas('options', 'animation', animation);

//         $('#code-animation').text(animation);
//     });

//     // Example Methods - 1

//     $('#test4-1').vegas({
//         autoplay: false,
//         slides: [
//             { src: '/img/unsplash1.jpg', valign: '40%' },
//             { src: '/img/unsplash2.jpg', valign: '25%' },
//             { src: '/img/unsplash3.jpg' },
//             { src: '/img/unsplash4.jpg' }
//         ], walk: function () {
//             $('#test4-1 .label').text($('#test4-1').vegas('current') + 1);
//         }, pause: function () {
//             $('.method-list li').removeClass('working');
//             $('.method-list .method-pause').addClass('working');
//         }, play: function () {
//             $('.vegas-container').not(this).each(function () {
//                 $(this).vegas('pause');
//             });

//             $('.method-list li').removeClass('working');
//             $('.method-list .method-play').addClass('working');
//         }
//     });

//     $('.method-list li').on('click', function (e) {
//         var method;

//         e.preventDefault();

//         $('.method-list li').removeClass('active');

//         method = $(this).data('method');

//         $(this).addClass('active');

//         if (method === 'first') {
//             $('#test4-1').vegas('jump', 0);
//         } else if (method === 'last') {
//             $('#test4-1').vegas('jump', 3);
//         } else {
//             $('#test4-1').vegas(method);
//         }

//         $('.method-example')
//             .removeClass('active');

//         $('.method-example-' + method)
//             .addClass('active');
//     });

//     // Example Options - 5

//     $('#do-test4-2').on('click', function (e) {
//         var test = 'test4-2';

//         var extra = [
//             { src: '/img/unsplash-extra1.jpg' },
//             { src: '/img/unsplash-extra2.jpg' },
//             { src: '/img/unsplash-extra3.jpg' }
//         ];

//         $('.next, .previous, .add', '#' + test).css('visibility', 'visible');

//         startDemo(test);

//         $('#' + test).vegas({
//             slides: [
//                 { src: '/img/unsplash3.jpg' },
//                 { src: '/img/unsplash4.jpg' }
//             ],
//             transition: 'slideLeft2'
//         });

//         $('#' + test + ' .previous').on('click', function (e) {
//             $('#' + test).vegas('options', 'transition', 'slideRight2').vegas('previous');

//             e.preventDefault();
//         });

//         $('#' + test + ' .next').on('click', function (e) {
//             $('#' + test).vegas('options', 'transition', 'slideLeft2').vegas('next');

//             e.preventDefault();
//         });

//         $('#' + test + ' .add').on('click', function (e) {
//             var slides = $('#' + test).vegas('options', 'slides');

//             slides.push(extra[0]);
//             extra.shift();

//             $('#' + test)
//                 .vegas('options', 'slides', slides)
//                 .vegas('options', 'transition', 'slideDown')
//                 .vegas('jump', slides.length - 1)
//                 .vegas('options', 'transition', 'slideLeft2');

//             if (extra.length === 0) {
//                 $(this).fadeOut();
//             }

//             e.preventDefault();
//         });

//         e.preventDefault();
//     });
// });
