import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  margin-left: .5em;
  margin-right: .5em;
`;

const Input = styled.input`
  padding: 0.3em;
  margin-right: .7em;
`;

export default function ToDoInput({ addTask }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    addTask(title);
    setTitle('');
  };

  return (
    <p>
      <Label htmlFor="input-task-title">
        Task
      </Label>
      <Input
        id="input-task-title"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
    </p>
  );
}
