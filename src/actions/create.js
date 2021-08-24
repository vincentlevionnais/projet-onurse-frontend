// ============actions Types
// connexion api et envoi des données a api
export const SUBMIT_CREATE_ACCOUNT_FORM = 'SUBMIT_CREATE_ACCOUNT_FORM';
// màj de la valeur des input
export const UPDATE_CREATE_FIELD = 'UPDATE_CREATE_FIELD';
// remise des valeur du form à ''
export const CLEAN_INPUT = 'CLEAN_INPUT';

// =========== actions creators
/** envoi des données du nouvel evenement vers API */
export const submitCreateAccountForm = () => ({
  type: SUBMIT_CREATE_ACCOUNT_FORM,
});

export const updateCreateField = (newvalue, name) => ({
  type: UPDATE_CREATE_FIELD,
  value: newvalue,
  name: name,

});

export const cleanInput = () => ({
  type: CLEAN_INPUT,
});
