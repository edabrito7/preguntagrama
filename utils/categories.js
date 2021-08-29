const categories = {
    1: 'Escalas',
    2: 'Figuras'
}


export const getCategoryName = (id) => {
    const categoryName = categories[id]
    return categoryName
}