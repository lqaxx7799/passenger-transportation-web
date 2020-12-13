import axios from 'axios';

let API_ROOT;
if (process.env.NODE_ENV === 'production') {
  API_ROOT = 'https://passenger-transportation-api.herokuapp.com'
} else {
  API_ROOT = 'http://localhost:8080';
}

export const setToken = (token) => {
  document.cookie = 'PT_TOKEN=' + token;
}

export const getToken = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('PT_TOKEN'));
  if (!cookie) {
    return null;
  }
  return cookie.split('=')[1];
}

const getAuthorization = () => {
  return getToken() ? `Bearer ${getToken()}` : '';
}

const getBaseHeader = () => ({
  'Authorization': getAuthorization(),
  'Content-Type': 'application/json',
});

export const base = {
  requests: {
    get: url => 
      axios(`${API_ROOT}${url}`, {
        headers: getBaseHeader(),
      })
      .then(response => response.data),
    post: (url, body) =>
      axios(`${API_ROOT}${url}`, {
        method: 'POST',
        headers: getBaseHeader(),
        data: JSON.stringify(body),
      })
      .then(response => response.data),
    put: (url, body) =>
      axios(`${API_ROOT}${url}`, {
        method: 'PUT',
        headers: getBaseHeader(),
        body: JSON.stringify(body),
      })
      .then(response => response.data),
    patch: (url, body) =>
      axios(`${API_ROOT}${url}`, {
        method: 'PATCH',
        headers: getBaseHeader(),
        body: JSON.stringify(body),
      })
      .then(response => response.data),
    del: (url) =>
      axios(`${API_ROOT}${url}`, {
        method: 'DELETE',
        headers: getBaseHeader(),
      })
      .then(response => response.data),
  }
}
