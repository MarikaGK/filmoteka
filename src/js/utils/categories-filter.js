export const categoriesFilter = () => {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    return ([...checked].map(c => Number(c.id))).join();
}
