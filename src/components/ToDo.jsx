import React, { useState } from 'react' // Importing React and useState hook
import './ToDo.css' // Importing CSS file for styling
import TaskInput from './TaskInput'; // Importing TaskInput component
import TaskItem from './TaskList'; // Importing TaskItem component

const ToDo = () => {
    // Using useState hook to create state variables for tasks
    const [tasks, setTasks] = useState([]);

    // Function to handle adding a new task
    const handleAddTask = (taskName) => {
        // If taskName is empty, return and do nothing
        if (!taskName) return;
        // Add new task to tasks array with unique id and completed set to false
        setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    };

    // Function to handle deleting a task
    const handleDeleteTask = (id) => {
        // Filter out task with matching id from tasks array
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Function to handle toggling task completion
    const handleToggleCompleted = (id) => {
        // Map through tasks array and toggle completed property for task with matching id
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className='to-do'>
            <h1>To-Do App</h1>
            {/* Rendering TaskInput component and passing handleAddTask function as prop */}
            <TaskInput onAddTask={handleAddTask} />

            {/* Rendering TaskItem component and passing tasks, handleDeleteTask, and handleToggleCompleted as props */}
            <TaskItem 
            tasks={tasks} 
            onDeleteTask={handleDeleteTask} 
            onToggleCompleted={handleToggleCompleted} 
            />
        </div>
    );
}

export default ToDo;