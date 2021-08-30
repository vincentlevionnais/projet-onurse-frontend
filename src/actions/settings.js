// actions type
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
export const MANAGE_SETTINGS_SUBMIT = 'MANAGE_SETTINGS_SUBMIT';
export const DELETE_SUBMIT = 'DELETE_SUBMIT';
export const CLEAN_INPUT = 'CLEAN_INPUT';

// action creator
export const updateSettingsField = (newValue, name) => ({
  type: UPDATE_SETTINGS_FIELD,
  value: newValue,
  name: name,
});

export const manageSettingsSubmit = () => ({
  type: MANAGE_SETTINGS_SUBMIT,
});

export const deleteSubmit = () => ({
  type: DELETE_SUBMIT,
});

export const cleanInput = () => ({
  type: CLEAN_INPUT,
});
