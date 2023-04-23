export const renderCategoriesBox = async (categories) => {
    const multiselectBox = document.querySelector('.header-input__CategoriesBox')
    const markup = await categories.map((category) => ` <label for="${category.name}">
<input type="checkbox" class="header-input__checkbox" id="${category.name}">
</label>`
    )
        .join('');
    multiselectBox.insertAdjacentHTML('beforeend', markup)
}