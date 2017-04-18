/**
 * Created by Lucas on 4/15/2017.
 *
 * Tools:
 *      Waypoints: http://imakewebthings.com/waypoints/
 *      ProgressBar.js: https://kimmobrunfeldt.github.io/progressbar.js/
 *      JQuery Counter: http://stackoverflow.com/questions/23006516/jquery-animated-number-counter-from-zero-to-value
 *      CountUp.js: https://inorganik.github.io/countUp.js/
 *
 */

// var educationCard = $(".education-card-block");
var bar;
var educationCounter;
var experienceCounter;


$(document).on('ready', documentLoaded);
console.log('loaded');
function documentLoaded()
{
    console.log('tilt');
    initializeWaypoints();
    // initializeProgressBars();
    initializeCounters();
} 
/**
 * You can make multiple waypoints just copy the one below for each "checkpoint" on the page
 * So the element is the div or whatever element on he page and the handler is what is fired when it hits that element.
 */
function initializeWaypoints()
{
    var educationWaypoint = new Waypoint({
        element: document.getElementById('waypoint-trigger-how-cards'),
        handler: function (){
            console.log('triggered');
            triggerHowCardAnimations();
        }
    });
}

function initializeProgressBars()
{
    bar = new ProgressBar.Circle('#educationBar', {
        color: '#FFEA82',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'bounce',
        duration: 1400,
        from: {color: '#EFEA82', a:0},
        to: {color: '#ED6A5A', a:1},
        text: {
            autoStyleContainer: false
        },
        from: { color: '#EFEA82', width: 1 },
        to: { color: '#ED6A5A', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    // bar.animate(1.0);  // Number from 0.0 to 1.0
}

function initializeCounters() {
    var options = {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.',
        prefix : '',
        suffix : ''
    };

    educationCounter = new CountUp("educationCounter", 0, 2, 1, 4, options);
    experienceCounter = new CountUp("experienceCounter", 0, 5, 1, 4, options);
}

/**
 *  Stuff you want to happen when page is loaded.
 */


/**
 *  Call this function when you want to trigger education progress bar. Make additional functions for each progress bar and call them accordingly
 */
function triggerHowCardAnimations()
{
    // bar.animate(1);

    educationCounter.start();

    experienceCounter.start(function() {
        var experienceYears = document.getElementById('experienceCounter').innerHTML + " +";
        document.getElementById('experienceCounter').innerHTML = experienceYears;
    });
}

