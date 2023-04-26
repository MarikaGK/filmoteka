export const renderCategoriesBox = () => {
    const categories = localStorage.getItem('movieGenresIdsArray');
    const parsedCategories = JSON.parse(categories);
    const multiselectBox = document.querySelector('.header__categoriesBox')
    const markup = parsedCategories.map((category) => `<label class="header__label" for="${category.id}">${category.name}
    <input type="checkbox" class="header__checkbox" id="${category.id}">
    </label>`
    )
        .join('');
    multiselectBox.insertAdjacentHTML('beforeend', markup)
}

