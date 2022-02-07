// los getters nos ofrecen acceso a las propiedades de los state

// export const myGetter = ( state ) => {
//     return state.attribute
// }

// para recibir parámetros tenemos que hacer que el getter devuelva una función como se muestra aquí
// export const categoriesByName = (state) => () => {
//     return state.categories;
// };

export const categoriesList = (state) => {
    return state.categories;
};

export const categoriesByName = ({ categories }) => ( name ) => {
        if (name) {
            return categories.filter((category) => {
                return category.name.toLowerCase().includes(name.toLowerCase());
            });
        }
        return categories;
};

export const categoryById = ({ categories }) => ( id ) => {
        const category = categories.find(
            (category) => category.id === parseInt(id)
        );
        return category ? { ...category } : undefined;
};

export const isLoadingComponent = ( { isLoading } ) => {
    return isLoading;
}