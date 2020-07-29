import Api from "../data/api.config.js";

class MovieDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    set movieDetail(movie){
        [this._movie, this._genres] = movie;
        this.updateUiModal();
    }

    render() {
        this.innerHTML = `
            <div
                class="modal fade"
                id="movieDetailModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="movieDetailModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5
                                class="modal-title"
                                id="movieDetailModalLabel"
                            ></h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
            
    }

    updateUiModal(){
        const seeDetail = document.querySelector(".modal-body");
        seeDetail.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img 
                            src="
                                ${Api.baseImgUrl}/original/${this._movie.poster_path}
                            "
                            alt="poster" class="img-fluid"
                        />
                    </div>
                    <div class="col-md">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Title</th>
                                    <td>${this._movie.title}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Released</th>
                                    <td>${this._movie.release_date}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Genre</th>
                                    <td>${this._genres}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Plot</th>
                                    <td>${this._movie.overview}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Popularity</th>
                                    <td>${this._movie.popularity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rated</th>
                                    <td>${this._movie.vote_average}</td>
                                </tr>
                            </tbody>
                        </table
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("movie-detail", MovieDetail);
