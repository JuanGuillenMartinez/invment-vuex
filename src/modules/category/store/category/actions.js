//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import axios from "@/api/AxiosInstance";

export const getCategoriesList = async ({ commit }) => {
    try {
        const {
            data: { data },
        } = await axios.get("/categories");
        commit("changeCategoriesList", data);
    } catch (error) {
        console.log(error);
    }
};
