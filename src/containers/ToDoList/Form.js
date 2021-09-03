import { connect } from 'react-redux';
import { setLabel, submitTask } from 'src/actions/toDoList';
// on importe le composant de présentation
import Form from 'src/components/ToDoList/Form';

// === mapStateToProps
const mapStateToProps = (state) => ({
  label: state.task.label,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setLabel: (newValue, name) => {
    dispatch(setLabel(newValue, name));
  },

  submitTask: () => {
    dispatch(submitTask());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Form);
