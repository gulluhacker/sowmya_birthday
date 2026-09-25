/* =====================================================
   SOWMYA BIRTHDAY WEBSITE
   GLOBAL JAVASCRIPT
===================================================== */


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function goToPage(page) {
    window.location.href = page;
}


/* =====================================================
   SMOOTH SCROLL
   Use this when sections exist on the same page
===================================================== */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   BUTTON PRESS EFFECT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("button, .btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if ("vibrate" in navigator) {
                navigator.vibrate(20);
            }

        });

    });

});


/* =====================================================
   PAGE ENTER ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("visible");

        }, 150 + (index * 100));

    });

});


/* =====================================================
   CREATE FLOATING PARTICLES
===================================================== */

function createParticles(container, amount = 15) {

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        container.appendChild(particle);
    }
}


/* =====================================================
   AUTO PARTICLES
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document
        .querySelectorAll(".particles")
        .forEach(container => {

            createParticles(container, 12);

        });

});


/* =====================================================
   CANDLE SYSTEM
===================================================== */

function blowCandles() {

    const candles =
        document.querySelectorAll(".candle");

    if (!candles.length) return;

    candles.forEach(candle => {

        candle.classList.add("off");

    });

    const message =
        document.getElementById("wishMessage");

    if (message) {

        message.textContent =
            "Wish made... ✨❤️";

    }

}


/* =====================================================
   RESET CANDLES
===================================================== */

function resetCandles() {

    const candles =
        document.querySelectorAll(".candle");

    candles.forEach(candle => {

        candle.classList.remove("off");

    });

    const message =
        document.getElementById("wishMessage");

    if (message) {

        message.textContent = "";

    }

}


/* =====================================================
   TYPEWRITER EFFECT
===================================================== */

function typeWriter(
    element,
    text,
    speed = 45
) {

    if (!element) return;

    element.textContent = "";

    let index = 0;

    function write() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(write, speed);

        }

    }

    write();
}


/* =====================================================
   HEARTS EFFECT
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.color =
        "#f3a88e";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex = "9999";

    heart.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-110vh) rotate(${Math.random() * 180}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 5000);
}


/* =====================================================
   HEART RAIN
===================================================== */

function startHeartRain(duration = 5000) {

    const interval =
        setInterval(() => {

            createHeart();

        }, 350);

    setTimeout(() => {

        clearInterval(interval);

    }, duration);

}


/* =====================================================
   FINAL SURPRISE
===================================================== */

function finalSurprise() {

    startHeartRain(7000);

    const title =
        document.querySelector(".final-title");

    if (title) {

        title.classList.add("reveal");

    }

}


/* =====================================================
   FIREWORKS
===================================================== */

function createFirework() {

    const firework =
        document.createElement("div");

    firework.className =
        "firework";

    firework.style.left =
        (10 + Math.random() * 80) + "%";

    firework.style.top =
        (10 + Math.random() * 70) + "%";

    firework.style.animationDelay =
        Math.random() + "s";

    document.body.appendChild(firework);

    setTimeout(() => {

        firework.remove();

    }, 3000);
}


/* =====================================================
   FIREWORK SHOW
===================================================== */

function startFireworks(duration = 7000) {

    const interval =
        setInterval(() => {

            createFirework();

        }, 700);

    setTimeout(() => {

        clearInterval(interval);

    }, duration);

}


/* =====================================================
   BIRTHDAY FINALE
===================================================== */

function birthdayFinale() {

    startFireworks(8000);

    startHeartRain(8000);

}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


/* =====================================================
   PREVENT DOUBLE CLICK
===================================================== */

function preventDoubleClick(button) {

    if (!button) return;

    button.disabled = true;

    setTimeout(() => {

        button.disabled = false;

    }, 1000);

}


/* =====================================================
   BACK TO TOP
===================================================== */

function backToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
