import axios from "axios";

const url = "https://reqres.in/api";
export const getUsers = async (store, request = axios) => {
    const status = "LOADING";
    const users = {
        data: []
    };
    store.setState({status, users});

    try {
        const response = await request.get(`${url}/users?delay=3`);
        const users = response.data;
        const isReposEmpty = users.data.length == 0;
        const status = isReposEmpty ? "EMPTY" : "SUCCESS";
        store.setState({users, status});
    } catch (e) {
        const status = "ERROR";
        store.setState({status});
    }
};
