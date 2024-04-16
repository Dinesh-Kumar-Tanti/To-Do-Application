import React from 'react' // Importing React
import './TaskList.css' // Importing CSS file for styling


const TaskList = ({ tasks, onDeleteTask, onToggleCompleted }) => {    
    return (
        <div className="task-list">
            <ul>
            {/* Mapping through tasks array and rendering list item element for each task */}
            {tasks.map((task) => (
                <li key={task.id}>
                    {/* Rendering checkbox input element with checked property set to task.completed and onChange handler to toggle task completion */}
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleCompleted(task.id)}
                    />
                    {/* Rendering div element with task name */}
                    <div className='list-item'>{task.name}</div>
                    {/* Rendering button element with onClick handler to delete task */}
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default TaskList;