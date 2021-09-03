import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

const Form = ( {label, setLabel, submitTask }) => (
  <form className="addTask"
    onSubmit={(event) => {
      event.preventDefault();
      submitTask();
    }}
  >
    <Field
      className="addTask-input"
      name="label"
      placeholder="Ajouter une tâche"
      manageChange={((newValue, name) => {
        setLabel(newValue, name);
      })}
      value={label}
    />
  </form>
);

Form.propTypes = {
  label: PropTypes.string.isRequired,
  setLabel: PropTypes.func.isRequired,
  submitTask: PropTypes.func.isRequired,
}
export default Form;
