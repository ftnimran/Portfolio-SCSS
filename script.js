// ====================Start Right Click Disabled==================

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// ====================End Right Click Disabled====================



// ====================Start title Replace==================

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        document.title = 'Portfolio'
    } else {
        document.title = 'Imran Ali | Portfolio';
    }
});

// ====================End title Replace==================



// ====================Start Auto Typing==================

var typed = new Typed(".auto-type", {
    strings: ['MERN Stack Developer', 'Full Stack Web Developer', 'Frontend Developer.', 'Backend Developer.', 'UI &amp; UX Designer.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// ====================End Auto Typing==================