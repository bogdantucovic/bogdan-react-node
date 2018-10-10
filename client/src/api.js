import { store } from "./Main";
import { DEAUTHENTICATE } from "./constants/authConstants";

const api = ({ endpoint, fetchOptions }) => {
  if (!endpoint.startsWith("/auth")) {
    const {
      auth: { token }
    } = JSON.parse(localStorage.getItem("state"));
    const authorizationHeader = { Authorization: `bearer ${token}` };

    fetchOptions.headers = Object.assign(
      {},
      fetchOptions.headers,
      authorizationHeader
    );
  }

  return fetch(endpoint, fetchOptions)
    .then(res => res.json())
    .then(jsonRes => {
      if (jsonRes.noAuthenticated) {
        store.dispatch({ type: DEAUTHENTICATE });
        return;
      }

      return jsonRes;
    });
};

export default api;
