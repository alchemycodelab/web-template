
let confettiHappened = false;

QUnit.done(() => {
    // when qunit is done, launch confetti if user is on page and all tests pass
    if (!document.hidden && testsPassed()) doConfetti();
});

document.addEventListener('visibilitychange', (event) => {
    /*
        if due to live-reload the user was off-tab when tests passed,
        do confetti when they navigate back, assuming confetti hasn't happened 
        yet and tests are passing
    */
    if (!document.hidden && !confettiHappened && testsPassed()) {
        doConfetti();
    } 

    // if user navigates during confetti, confetti goes away
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

// check if tests passed
function testsPassed() {
    return QUnit && QUnit.config && QUnit.config.stats && QUnit.config.stats.bad === 0;
}
