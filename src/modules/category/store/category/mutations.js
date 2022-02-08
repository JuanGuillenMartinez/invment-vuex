// las mutations se encargan de modificar el estado de las variables ya que estas no pueden ser modificadas de forma directa.

// export const myMutation = ( state ) => {
//      
// }

export const changeCategoriesList = ( state, data ) => {
     state.categories = data;
     state.isLoading = false;
}

export const categoriesAreLoading = ( state ) => {
     state.isLoading = true;
}

export const changeCategoryById = ( state , data ) => {
     const id = parseInt(data.id_category);
     const index = state.categories.findIndex( category => category.id === id );
     state.categories[index] = data;
     state.isLoading = false;
}