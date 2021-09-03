
import { connect } from 'react-redux';
import { setLabel } from 'src/actions/toDoList';
// on importe le composant de présentation
import ToDoList from 'src/components/ToDoList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
