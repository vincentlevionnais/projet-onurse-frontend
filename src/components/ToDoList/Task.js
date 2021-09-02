import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { X } from 'react-feather';
const Task = ({ id, done, label }) => {

  // on a utilisé une bibliothèque pour simplifier l'écriture de code
  const cssClass = classNames(
    // d'abord la classe qui est systématiquement présente
    'task-container',
    // ensuite un objet pour chaque classe conditionnelle :
    // { nomClasse : condition/variable }
    { 'task-container--done': done },
  );
  // => construction automatique de la chaîne de caractères avec les classes CSS

  return (
    <li className={cssClass}>
      <label className="label" htmlFor={id}>
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          checked={done}
          onChange={(event) => {
            console.log("on change le statut de la tâche");
          }}
        />
        {label}
      </label>
      <div className="delete-task">
        <X 
          onClick={() => {
            console.log('suppression de la tâche');
          }}
        />
      </div>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
