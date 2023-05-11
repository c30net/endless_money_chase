let coin = document.querySelector('#coin');
let coinRect = window.getComputedStyle(coin);
let runner = document.querySelector('#runner');
let runnerRect = window.getComputedStyle(runner);
let runnerCurrentTop = parseInt(
    window.getComputedStyle(runner).top.slice(0, -2)
);
let runnerCurrentLeft = parseInt(
    window.getComputedStyle(runner).left.slice(0, -2)
);
let changedRunnerTop = runnerCurrentTop + 20;
let changedRunnerLeft = runnerCurrentLeft + 20;

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        changedRunnerTop += 20;
        runner.style.setProperty('top', `${changedRunnerTop}px`);
    } else if (e.key === 'ArrowUp') {
        changedRunnerTop -= 20;
        runner.style.setProperty('top', `${changedRunnerTop}px`);
    } else if (e.key === 'ArrowLeft') {
        changedRunnerLeft -= 20;
        runner.style.setProperty('left', `${changedRunnerLeft}px`);
    } else if (e.key === 'ArrowRight') {
        changedRunnerLeft += 20;
        runner.style.setProperty('left', `${changedRunnerLeft}px`);
    }

    console.log(isOverlaping());
});

function isOverlaping() {
    console.log(
        'parseInt(coinRect.left.slice(0, -2)) >  parseInt(runnerRect.right.slice(0, -2))',
        parseInt(coinRect.left.slice(0, -2)),
        parseInt(runnerRect.left.slice(0, -2)) +
            parseInt(runnerRect.width.slice(0, -2)),
        'parseInt(coinRect.bottom.slice(0, -2)) <  arseInt(runnerRect.top.slice(0, -2))',
        parseInt(coinRect.top.slice(0, -2)) +
            parseInt(coinRect.height.slice(0, -2)),
        parseInt(runnerRect.top.slice(0, -2)),
        'parseInt(coinRect.right.slice(0, -2)) <  parseInt(runnerRect.left.slice(0, -2))',
        parseInt(coinRect.left.slice(0, -2)) +
            parseInt(coinRect.width.slice(0, -2)),
        parseInt(runnerRect.left.slice(0, -2)),
        'parseInt(coinRect.top.slice(0, -2)) >  parseInt(runnerRect.bottom.slice(0, -2))',
        parseInt(coinRect.top.slice(0, -2)),
        parseInt(runnerRect.top.slice(0, -2)) +
            parseInt(runnerRect.height.slice(0, -2))
    );
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
}

let x = Math.floor(Math.random() * (window.innerWidth - 100));
let y = Math.floor(Math.random() * (window.innerHeight - 100));
