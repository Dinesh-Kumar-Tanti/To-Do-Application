# To-Do App
This is a simple to-do app built with React. It allows users to add tasks, delete tasks, and toggle task completion.
 
## Features
1. Add tasks
2. Delete tasks
3. Toggle task completion

## Tech Stack
1. React

## Build Tools
1. Vite

## Components
1. App
   The main component that renders the ToDo component.
2. ToDo
   The main component that handles the state of tasks and renders the TaskInput and TaskList components.
   a.   Props
   None
   b.   State
   tasks: An array of task objects, each containing an id, name, and completed property.
   c.   Methods
        handleAddTask: A function that handles adding a new task to the tasks state array.
        handleDeleteTask: A function that handles deleting a task from the tasks state array.
        handleToggleCompleted: A function that handles toggling a task's completion status in the tasks state array.

3. TaskInput
   A component that renders an input field and a button for adding tasks.

Props
   onAddTask: A function that handles adding a new task to the parent component's tasks state array.
State
   input: A string that stores the value of the input field.
Methods
   handleAddTask: A function that calls the onAddTask prop function with the current value of the input state variable.

4. TaskList
   A component that renders a list of tasks.

Props
   tasks: An array of task objects, each containing an id, name, and completed property.
   onDeleteTask: A function that handles deleting a task from the parent component's tasks state array.
   onToggleCompleted: A function that handles toggling a task's completion status in the parent component's tasks state array.
Methods
   None

## Usage
To use this app, simply add tasks using the input field and button. Click on a task to toggle its completion status. Click on the "Delete" button to delete a task.
