export const SET_LABEL = 'SET_LABEL';

export const setLabel = (newValue, name) => ({
  type: SET_LABEL,
  value: newValue,
  name: name,
});
