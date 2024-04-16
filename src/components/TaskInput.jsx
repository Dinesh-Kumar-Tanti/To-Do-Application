import React, { useState } from 'react' // Importing React and useState hook
import './TaskInput.css' // Importing CSS file for styling


const TaskInput = ({ onAddTask }) => {
    // Using useState hook to create state variable for input value
    const [input, setInput] = useState('');

    // Function to handle adding a new task
    const handleAddTask = () => {
        // If input value is empty, return and do nothing
        if (!input) return;
        // Add new task to parent component's tasks array with unique id and completed set to false
        onAddTask(input);
        // Reset input value to empty string
        setInput('');
    };

    return (
        <div className='task-input'>
            {/* Rendering input element with value set to input state variable and onChange handler to update input state variable */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a task"
            />
            {/* Rendering button element with onClick handler to call handleAddTask function */}
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default TaskInput;