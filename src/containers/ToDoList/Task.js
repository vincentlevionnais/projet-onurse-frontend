
import { connect } from 'react-redux';
import { deleteTask, setTaskStatus } from 'src/actions/toDoList';
// on importe le composant de présentation
import Task from 'src/components/ToDoList/Task';

// === mapStateToProps
const mapStateToProps = (state) => ({

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  deleteTask : (id) => {
    dispatch(deleteTask(id))
  },

  setTaskStatus: (id, status) => {
    dispatch(setTaskStatus(id, status));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Task);
