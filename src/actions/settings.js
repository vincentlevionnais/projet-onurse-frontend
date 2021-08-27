// actions type
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';

// action creator
export const updateSettingsField = (newvalue, name) => ({
  type: UPDATE_SETTINGS_FIELD,
  value: newvalue,
  name: name,
});
