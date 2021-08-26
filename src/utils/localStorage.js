/**
 * return the middle part of the jwt token
 * @param {string} jwt
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export const getPayload = (jwt) => {
  const str = jwt.split('.')[1];
  console.log(str);

  let base = atob(str, 'base64');
  console.log(base);

  base = JSON.parse(base);
  console.log(base);
  return base;
};
