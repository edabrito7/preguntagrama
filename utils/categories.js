const categories = {
    1: 'Escalas',
    2: 'Figuras',
    3: 'Compás',
    4: 'General',

    // maximo 9
}


export const getCategoryName = (id) => {
    const categoryName = categories[id]
    return categoryName
}