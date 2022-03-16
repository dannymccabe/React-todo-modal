//this is a react component is a function that returns JSX. Must return something that can be rendered by the browser

import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the Full React Course'/>
    </div>
  );
} // shift + option + F = format prettier

export default App;
