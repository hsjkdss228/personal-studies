import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin-left: .5em;
  list-style: none;

  li {
    padding: .7em;
    border: 1px solid #888;
    border-radius: .3em;
    margin-bottom: .5em;
  }
`;

export default function ToDoList({ tasks }) {
  return (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </List>
  );
}
