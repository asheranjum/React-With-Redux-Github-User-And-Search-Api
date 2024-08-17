
import baseUrl, { ENDPOINTS } from '../../utils/baseUrl';
// to get all users
export const getUsers = (token) => {
  const endpoint = `${baseUrl}/${ENDPOINTS.getUsers}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };
  let res = fetch(endpoint, requestOptions)
    .then((res) => res.text())
    .then((json) => {
      return json;
    })
    .catch(function (error) {
      // ADD THIS THROW error
      throw error;
    });

  return res;
};


export const getUsersInfo = (userId, token) => {
  const endpoint = `${baseUrl}/${ENDPOINTS.getUsers}/${userId}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };
  let res = fetch(endpoint, requestOptions)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch(function (error) {
      // ADD THIS THROW error
      throw error;
    });

  return res;
};

export const getSearchUser = (query, token) => {
  const endpoint = `${baseUrl}/${ENDPOINTS.searchUser}?q=${query}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };
  let res = fetch(endpoint, requestOptions)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch(function (error) {
      // ADD THIS THROW error
      throw error;
    });

  return res;
};