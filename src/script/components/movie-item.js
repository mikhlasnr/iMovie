import Api from "../data/api.config.js";
class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="card">
                    <img src="${Api.baseImgUrl}/w500${this._movie.backdrop_path}" class="card-img-top img-fluid" alt="poster">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this._movie.release_date}</h6>
                        <a
                            href="#" class="btn btn-dark card-link see-detail"
                            data-toggle="modal"
                            data-target="#movieDetailModal"
                            data-movieid="${this._movie.id}"
                        >
                            See Detail
                        </a>
                    </div>
                </div>
            `;
    }
}

customElements.define("movie-item", MovieItem);
