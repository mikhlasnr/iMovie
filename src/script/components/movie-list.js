import "./movie-item.js";

class MovieList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set movies(movies) {
        [this._movies, this._homePage] = movies;
        this.render();
    }
    
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="text-muted">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        if(this._homePage){
            this._movies.forEach((movie, i) => {
                if (i < 6) {
                    const movieItemElement = document.createElement("movie-item");
                    movieItemElement.setAttribute(
                        "class",
                        "col-md-4 col-sm-12 mt-3"
                    );
                    movieItemElement.movie = movie;
                    this.appendChild(movieItemElement);
                }
            });
        }else{
            this._movies.forEach((movie) => {
                const movieItemElement = document.createElement("movie-item");
                movieItemElement.setAttribute(
                    "class",
                    "col-md-4 col-sm-12 mt-3"
                );
                movieItemElement.movie = movie;
                this.appendChild(movieItemElement);
            });
        }
        
    }
}

customElements.define("movie-list", MovieList);
