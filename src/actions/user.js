import axios from "axios";

const url = "https://reqres.in/api";
export const getUsers = async (store, request = axios) => {
    const status = "LOADING";
    const users = {
        data: [],
        filtered: []
    };
    store.setState({status, users});

    try {
        const response = await request.get(`${url}/users`);
        const users = response.data;
        const isReposEmpty = users.data.length == 0;
        const status = isReposEmpty ? "EMPTY" : "SUCCESS";
        users.filtered = users.data;
        store.setState({users, status});
    } catch (e) {
        const status = "ERROR";
        store.setState({status});
    }
};

export const filterUsers = (store, nameSurname) => {
    let users = {...store.state.users};
    let filtered = users.data.filter(function (user) {
        return (`${user.first_name} ${user.last_name}`).toLowerCase().indexOf(nameSurname) !== -1
    });
    users.filtered = filtered;
    store.setState({users});
};
