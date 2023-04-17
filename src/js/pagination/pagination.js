export const renderPagination = (elementDOM, pageNumber, totalPages) => {


    const pagination = (active = 1, totalPages = 20, range = 5) => {
        if (window.innerWidth > 480) range = 9;
        if (totalPages < range) range = totalPages;
        const half = Math.round(range / 2) - 1;
        let last = range;

        if (active + half >= totalPages) {
            last = totalPages
        }
        else if (active > half) {
            last = active + half;
        }

        let first = last - range;

        return Array.from({ length: range }, (_, i) => (i + 1) + first)
    };


    const pagBtnRender = (numbArr) => {
        elementDOM.innerHTML = '';
        const markupBtn = numbArr
            .map(n => {
                if (n == pageNumber) {
                    return `<li><button class="pagination__btn active">${n}</button></li>`; //Set active
                }
                return `<li><button class="pagination__btn">${n}</button></li>`;
            })
            .join('');
        elementDOM.insertAdjacentHTML('afterbegin', markupBtn);
    }

    pagBtnRender(pagination(pageNumber, totalPages));

}

