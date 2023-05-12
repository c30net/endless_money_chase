let coin = document.querySelector('#coin');
let coinRect = window.getComputedStyle(coin);

let runner = document.querySelector('#runner');
let runnerRect = window.getComputedStyle(runner);
//read current position with element.style.top and element.style.left
// and store it plus or minus 20 for every stroke on 4 arrow keys
let changedRunnerTop;
let changedRunnerLeft;
//when page loads change the position of coin and runner if they are overlapping
window.addEventListener('DOMContentLoaded', function () {
    console.log('isoverlapping : ' + isOverlaping());
    console.log('isoverlapping2 : ' + isOverlapping2());
    if (isOverlaping()) {
        makeRandomPlace(runner);
        makeRandomPlace(coin);
    }
});

const makeRandomPlace = function (elm) {
    let x = Math.floor(Math.random() * (window.innerWidth - 100));
    let y = Math.floor(Math.random() * (window.innerHeight - 100));
    elm.style.top = `${y}px`;
    elm.style.left = `${x}px`;
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        changedRunnerTop = pos(runner, 'top') + 20;
        runner.style.setProperty('top', `${changedRunnerTop}px`);
    } else if (e.key === 'ArrowUp') {
        changedRunnerTop = pos(runner, 'top') - 20;
        runner.style.setProperty('top', `${changedRunnerTop}px`);
    } else if (e.key === 'ArrowLeft') {
        changedRunnerLeft = pos(runner, 'left') - 20;
        runner.style.transform = 'scale(-1,1)';
        runner.style.setProperty('left', `${changedRunnerLeft}px`);
    } else if (e.key === 'ArrowRight') {
        changedRunnerLeft = pos(runner, 'left') + 20;
        runner.style.transform = 'scale(1,1)';
        runner.style.setProperty('left', `${changedRunnerLeft}px`);
    }
    //listen to event of keys if images were overlapping change their positions

    if (isOverlaping()) {
        makeRandomPlace(runner);
        makeRandomPlace(coin);
    }
});
const pos = function (elem, direct) {
    return parseInt(elem.style[direct].slice(0, -2));
};

//check if images are overlapping
const isOverlaping = function () {
    if (
        !(
            parseInt(coinRect.left.slice(0, -2)) >
                parseInt(runnerRect.left.slice(0, -2)) +
                    parseInt(runnerRect.width.slice(0, -2)) ||
            parseInt(coinRect.top.slice(0, -2)) +
                parseInt(coinRect.height.slice(0, -2)) <
                parseInt(runnerRect.top.slice(0, -2)) ||
            parseInt(coinRect.left.slice(0, -2)) +
                parseInt(coinRect.width.slice(0, -2)) <
                parseInt(runnerRect.left.slice(0, -2)) ||
            parseInt(coinRect.top.slice(0, -2)) >
                parseInt(runnerRect.top.slice(0, -2)) +
                    parseInt(runnerRect.height.slice(0, -2))
        )
    ) {
        return true;
    } else {
        return false;
    }
};

const isOverlapping2 = function () {
    if (
        parseInt(coinRect.left.slice(0, -2)) <=
            parseInt(runnerRect.left.slice(0, -2)) +
                parseInt(runnerRect.width.slice(0, -2)) &&
        parseInt(coinRect.top.slice(0, -2)) +
            parseInt(coinRect.height.slice(0, -2)) >=
            parseInt(runnerRect.top.slice(0, -2)) &&
        parseInt(runnerRect.left.slice(0, -2)) <=
            parseInt(coinRect.left.slice(0, -2)) +
                parseInt(coinRect.width.slice(0, -2)) &&
        parseInt(runnerRect.top.slice(0, -2)) +
            parseInt(runnerRect.height.slice(0, -2)) >=
            parseInt(coinRect.top.slice(0, -2))
    ) {
        return true;
    } else {
        return false;
    }
};
