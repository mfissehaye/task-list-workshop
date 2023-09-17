# MIU-CS568-2023-09-Workshop02
# Workshop 2: State & Props, hooks, form, Routing
## Assume that you have a system `TMS` (Task Management System) which manages all todo tasks. 
## Data
1. Each task has properties: id, title, description, duration, deadline,assignee,  and status. Please see the below example
```JavaScript
Task{
  id: "123",
  title: "Implment task input",
  description: "Implment a form to enter a task",
  duration: "2 days",
  deadline: "09-20-2023",
  assignee: "John",
  assignor: "David",
  status: "progressing", //assigned, progressing, done, postpone, canceled
}
```
2. Implement a class `Task` to hold a task
## Implement a React app containing multiple components
1. Home
* AddNewTask Button: To add a new task. When clicking on this button, the app should move to the component `AddNewTask`
* TaskList: The component should load all tasks and then create all `TaskDetails` to display information about a task
2. AddNewTask component
* Should contain input for entering the Task's information
* Submit button: When clicking on this button, the new Task is added to the list, and the app will navigate to the Home page
3. TaskDetails component
* Show the Task's information
* Edit button: When clicking on this button, the app should navigate to the component `EditTask`
4. EditTask component
* Should contain all input to allow users to modify the Task's information. In the beginning, these inputs should have the current Task's value.
* Submit button: When clicking on this button, the current Task is updated to the list, and the app will navigate to the Home page
## Style your app using the regular CSS
