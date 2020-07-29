class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">iMovie</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a class="nav-item nav-link" href="#">Action</a>
                        <a class="nav-item nav-link" href="#">Comedy</a>
                        <a class="nav-item nav-link" href="#">Romance</a>
                        <a class="nav-item nav-link" href="#">Science Fiction</a>
                    </div>
                </div>
            </nav>`;
    }
}

customElements.define("nav-bar", NavBar);
