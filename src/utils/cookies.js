import Cookies from 'universal-cookie';

const cookies = new Cookies();

/**
 *
 * @param {string} key
 *
 */
export const get = (key) => cookies.get(key);

/**
 *
 * @param {string} key
 * @param {string} value
 * @param {object} options
 *
 * https://www.npmjs.com/package/universal-cookie
 */
export const set = (key, value, options) => cookies.set(key, value, options);

/**
 *
 * @param {string} key
 * @returns
 */
export const remove = (key) => cookies.remove(key);
