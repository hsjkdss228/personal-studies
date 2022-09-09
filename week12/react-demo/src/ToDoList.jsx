import styled from 'styled-components';

const Task = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  
  li {
    border: 1px solid #BBB;
    border-radius: 4px;
    padding-block: .3em;
    padding-inline: .3em;
    margin-bottom: .3em;
  }
`;

export default function ToDoList({ tasks }) {
  return ((
    <Task>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </Task>
  ));
}
