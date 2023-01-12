
let confettiHappened = false;

QUnit.done(() => {
    if (!document.hidden && noProblems()) doConfetti();
});

document.addEventListener('visibilitychange', (event) => {
    if (!document.hidden && !confettiHappened && noProblems()) {
        doConfetti();
    } 

    if (document.hidden) confetti.reset();
});

function doConfetti() {
    confetti({
        particleCount: 100,
        spread: 75,
        startVelocity: 45,
        scalar: 1.5
    });   

    confettiHappened = true;
}

function noProblems() {
    return QUnit && QUnit.config && QUnit.config.stats && QUnit.config.stats.bad === 0;
}
