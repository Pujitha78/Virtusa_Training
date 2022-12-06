I attached my practice codes and a word document that includes the react notes throughout my practice sessions.
I created a simple To-Do list application.

To-Do list:
Using React hooks created a To-Do list app.
React Hooks allows React developers to make functional components stateful. Instead of using a class component to hold stateful logic, we can use functional components.

In React, hooks are functions that allow you to hook into React state and lifecycle features from function components. This allows you to use React without classes.

There are several Hooks that we can use for our applications. You can even create your own. Some of the popular ones include:

useState: returns a stateful value
useEffect: perform side effects from function components
useContext: accepts a context objects and returns current context value
useCallback: pass an inline callback and an array of dependencies

Some benefits of hooks are:
1. Isolating stateful logic, making it easier to test
2. Sharing stateful logic without render props or higher-order components
3. Separating your app’s concerns based on logic
4. Avoiding ES6 classes

The only hook we will need for this particular to do list project is useState(). This hook replaces the need for a state object in a class component structure.

Our main aim is to create a To Do List UI. This UI will have three main components:

1. Header that labels the To Do list. This is just a basic application identifier
2. A list to display each to do item.
3. A form that adds a To Do task item to the list. The default complete should be set to false.

There are two additional features that we need to create are:
1. giving the ability to toggle on and off i.e; strike the task whenever we completed it.
2. At the end of the list we will prompt the user to delete the finished tasks and also to add new tasks as well.

Steps in creating to-do list:
1. Create a react application: npx create-react-app todolist
2. Navigate to App.js and start writing the code
3. Create a new file "Header.js" in src directory
4. It is optional to create a mock data which we will use to test our application. Create a new file in src directory data.json
5. Read list of to dos and display
6. Toggle the task completion
7. Delete completed tasks
8. Add tasks with form component
9. Finally our application is ready. 

