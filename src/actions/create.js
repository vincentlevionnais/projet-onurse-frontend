// ============actions Types
// connexion api et envoi des données a api
export const MANAGE_SUBMIT = 'MANAGE_SUBMIT';

// =========== actions creators
/** envoi des données du nouvel evenement vers API */
export const manageEventSubmit = () => ({
  type: MANAGE_SUBMIT,
});
