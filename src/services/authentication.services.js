import { getToken, setToken, base } from './base.services';

const isAuthenticated = () => {
  const token = getToken();
  // TODO: implement check token validity
  return !!token;
}

const logIn = (username, password) => {
  return base.requests.post('/authenticate', {
    username,
    password
  });
}

const register = (body) => {
  return base.requests.post('/register', body)
    .then(result => {
      return base.requests.post('/authenticate', {
        username: body.username,
        password: body.password
      })
        .then(result => {
          setToken(result.token);
          return result;
        });
    })
    .catch(error => {
      console.log(error);
    });
}

const authenticationServices = {
  isAuthenticated,
  logIn,
  register,
}

export default authenticationServices;