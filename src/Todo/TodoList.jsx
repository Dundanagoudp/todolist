import { useState } from "react";

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (task !== '') {
      setTodoList([...todoList, { task, completed: false }]);
      setTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const newList = todoList.map((item, idx) => {
      if (index === idx) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(newList);
  };

  const handleDeleteTask = (index) => {
    const newList = todoList.filter((_, idx) => idx !== index);
    setTodoList(newList);
  };

  return (
    <div className="container">
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          value={task}
          placeholder="Add new task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask} className="add-btn">ADD Task</button>
        <div>
          {todoList.map((task, index) => (
            <div key={index} className="todo-item">
              <span className={`task ${task.completed ? 'completed' : ''}`}>
                {task.task}
              </span>
              <button onClick={() => handleCompleteTask(index)} className="complete-btn">
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleDeleteTask(index)} className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
