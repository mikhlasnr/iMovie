class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="bg-dark text-light text-center mt-3 py-3">
                Submission Dicoding &#169; 2020, MINR
            </footer>`;
    }
}

customElements.define("footer-bar", FooterBar);
