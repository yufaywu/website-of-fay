document.querySelectorAll("[data-rating]").forEach(rating => {

    const score = parseFloat(rating.dataset.rating);

    const fullStars = Math.floor(score);

    const hasHalfStar = score % 1 !== 0;

    const totalStars = 5;


    for (let i = 1; i <= totalStars; i++) {

        const star = document.createElement("span");

        star.textContent = "★";

        star.classList.add("star");


        if (i <= fullStars) {

            star.classList.add("full");

        } 
        
        else if (
            i === fullStars + 1 &&
            hasHalfStar
        ) {

            star.classList.add("half");

        }

    }

});
