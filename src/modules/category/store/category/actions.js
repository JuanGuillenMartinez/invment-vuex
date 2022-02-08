//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import axios from "@/api/AxiosInstance";

export const getCategoriesList = async ({ commit }) => {
    try {
        commit('categoriesAreLoading');
        const {
            data: { data },
        } = await axios.get("/categories");
        commit("changeCategoriesList", data);
    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = async ( { commit }, categoryData ) => {
    try {
        commit('categoriesAreLoading');
        const { data: { data } } = await axios.put( `/categories/${ categoryData.id }`, categoryData );
        commit("changeCategoryById", data);
    } catch (error) {
        console.log(error);
    }
};

export const deleteCategory = async ( { dispatch, commit }, id ) => {
    try {
        commit('categoriesAreLoading');
        const { data: { success } } = await axios.delete( `/categories/${ id }` );
        await dispatch('getCategoriesList');
        return success;
    } catch (error) {
        console.log(error);
    }
}
