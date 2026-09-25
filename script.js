/* =====================================================
   SOWMYA BIRTHDAY WEBSITE
   UNIVERSAL JAVASCRIPT
===================================================== */


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Birthday website loaded successfully ❤️");


    /* ---------------------------------------------
       REVEAL ANIMATIONS
    --------------------------------------------- */

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach(function (element, index) {

        element.style.animationDelay =
            (index * 0.12) + "s";

    });


    /* ---------------------------------------------
       FINAL PAGE
    --------------------------------------------- */

    if (
        document.querySelector(".firework")
    ) {

        createExtraFireworks();

    }

});


/* =====================================================
   EXTRA FIREWORKS
===================================================== */

function createExtraFireworks() {

    const container =
        document.body;

    for (let i = 0; i < 8; i++) {

        const firework =
            document.createElement("div");

        firework.className =
            "firework";

        firework.style.left =
            Math.random() * 90 + "%";

        firework.style.top =
            Math.random() * 75 + "%";

        firework.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(firework);

    }

}


/* =====================================================
   CANDLE FUNCTION
===================================================== */

function blowCandles() {

    const candles =
        document.querySelectorAll(".candle");

    const message =
        document.getElementById(
            "wishMessage"
        );

    const button =
        document.getElementById(
            "blowButton"
        );

    const finalButton =
        document.getElementById(
            "finalButton"
        );


    /* Turn candles off */

    candles.forEach(function (candle) {

        candle.classList.add("off");

    });


    /* Message */

    if (message) {

        message.innerHTML =
            "Wish made... ✨❤️";

    }


    /* Button */

    if (button) {

        button.disabled = true;

        button.style.opacity =
            "0.5";

        button.innerHTML =
            "Wish Made ✨";

    }


    /* Show final button */

    if (finalButton) {

        setTimeout(function () {

            finalButton.style.display =
                "inline-flex";

        }, 1000);

    }

}


/* =====================================================
   MAKE WISH
   Used by the new Page 5
===================================================== */

function makeWish() {

    blowCandles();

}


/* =====================================================
   OPEN FINAL SURPRISE
===================================================== */

function openFinalSurprise() {

    console.log(
        "Opening final surprise..."
    );


    /*
       Direct navigation to Page 6
    */

    window.location.href =
        "./page6.html";

}


/* =====================================================
   FINAL CELEBRATION
===================================================== */

function birthdayFinale() {

    createExtraFireworks();

}


/* =====================================================
   BACK TO HOME
===================================================== */

function goHome() {

    window.location.href =
        "./index.html";

}
