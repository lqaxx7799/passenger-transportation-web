import { getToken, setToken, base } from './base.services';

const validate = () => {
  const token = getToken();
  if (!token) {
    return new Promise((resolve, reject) => {
      return resolve({});
    });
  }
  return base.requests.get('/validate');
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
  validate,
  logIn,
  register,
}

export default authenticationServices;