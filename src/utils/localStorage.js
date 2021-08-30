/**
 * return the middle part of the jwt token value in JSON
 * @param {string} jwt
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export const getPayload = (jwt) => {
  // cut the middle part of token
  const str = jwt.split('.')[1];
  // convert in string
  let base = atob(str, 'base64');
  // convert in Json
  base = JSON.parse(base);
  return base;
};
