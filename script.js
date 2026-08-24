const movies = {

    spiderman: {
        title: "蜘蛛人：重生日",
        rating: "★★★★½",
        thoughts: "故事很完整，主角很努力，但是現實沒人記得他，令人心碎。",
        poster: "images/spiderman.jpg"
    },

    dragon: {
        title: "馴龍高手",
        rating: "★★★★☆",
        thoughts: "跟動畫內容一樣，畫面非常逼真。",
        poster: "images/dragon.jpg"
    },

    f1: {
        title: "F1電影",
        rating: "★★★★½",
        thoughts: "主角們的心路歷程很勵志。",
        poster: "images/f1.jpg"
    }

};


const cards = document.querySelectorAll(".movie-card");

const modal = document.getElementById("movie-modal");

const closeButton = document.getElementById("close-modal");

const modalPoster = document.getElementById("modal-poster");

const modalTitle = document.getElementById("modal-title");

const modalRating = document.getElementById("modal-rating");

const modalThoughts = document.getElementById("modal-thoughts");


cards.forEach(card => {

    card.addEventListener("click", () => {

        const movieName = card.dataset.movie;

        const movie = movies[movieName];

        modalPoster.src = movie.poster;

        modalTitle.textContent = movie.title;

        modalRating.textContent = movie.rating;

        modalThoughts.textContent = movie.thoughts;

        modal.classList.add("show");

    });

});


closeButton.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});
