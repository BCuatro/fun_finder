const axios = require('axios');

export const fetchUsers = () => {
    return axios.get('/api/users');
};

export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

export const updateUser = (user) => {
    return axios.patch(`/api/users/${user.id}`, user);
};

export const updatePhoto = (file) => {
    return axios.post(`/api/users/uploads`,file).then(res => {
        console.log(res)
    });
};