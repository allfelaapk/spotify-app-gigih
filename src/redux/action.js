function authToken(token) {
  return {
    type: 'token',
    payload: token,
  };
}

export { authToken };
