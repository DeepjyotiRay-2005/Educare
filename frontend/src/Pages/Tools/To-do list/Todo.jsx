import React, { useState, useEffect } from 'react';
import './Todo.css';
import { Link } from 'react-router-dom';

// Utility class to format todo data
class TodoItemFormatter {
  formatTask(task) {
    return task.length > 14 ? task.slice(0, 14) + "..." : task;
  }

  formatDueDate(dueDate) {
    return dueDate || "No due date";
  }

  formatStatus(completed) {
    return completed ? "Completed" : "Pending";
  }
}

function Todo() {
  const todoItemFormatter = new TodoItemFormatter();
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });
  const [taskInput, setTaskInput] = useState('');
  const [dueDateInput, setDueDateInput] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (taskInput.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    const newTodo = {
      id: getRandomId(),
      task: todoItemFormatter.formatTask(taskInput),
      dueDate: todoItemFormatter.formatDueDate(dueDateInput),
      completed: false,
      status: 'pending',
    };

    setTodos([...todos, newTodo]);
    setTaskInput('');
    setDueDateInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const getRandomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <>

      <div className="to-do-list-container">
        <header>
          <h1>Todo List</h1>
          <div className="alert-message"></div>
          <div className="input-section">
            <input
              type="text"
              placeholder="Add a todo . . ."
              className=" task-input input input-bordered input-secondary w-full max-w-xs"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <div>
            <input
              type="date"
              className="input input-bordered input-secondary w-full max-w-xs schedule-date"
              value={dueDateInput}
              onChange={(e) => setDueDateInput(e.target.value)}
            />
            <button className="btn btn-secondary add-task-button" onClick={addTodo}>
              <i className="fa-solid fa-plus"></i>
            </button>
            </div>
          </div>
        </header>

        <div className="todos-filter">
          <div className="dropdown">
            <label tabIndex="0" className="btn m-1">Filter</label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              {/* Implement filtering */}
              <li><Link>All</Link></li>
              <li><Link>Pending</Link></li>
              <li><Link>Completed</Link></li>
            </ul>
          </div>
          <button className="btn btn-secondary delete-all-btn" onClick={clearAllTodos}>
            Delete All
          </button>
        </div>

        <table className="table w-full">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="todos-list-body">
            {todos.length === 0 ? (
              <tr><td colSpan="4">No tasks found</td></tr>
            ) : (
              todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todoItemFormatter.formatTask(todo.task)}</td>
                  <td>{todoItemFormatter.formatDueDate(todo.dueDate)}</td>
                  <td>{todoItemFormatter.formatStatus(todo.completed)}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => toggleTodoStatus(todo.id)}>
                    <i className="fa-solid fa-check"></i>
                    </button>
                    <button className="btn btn-error btn-sm" onClick={() => deleteTodo(todo.id)}>
                    <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todo;
