import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  padding-right: 0.5em;
`;

const Input = styled.input`
  font-size: 1em;
  border: 1px solid #CCC;
  border-radius: 4px;
  padding-block: .3em;
`;

const Button = styled.button`
  background-color: #FFF;
  border: 1px solid #000;
  border-radius: 4px;
  padding: .3em .6em;
  margin-left: .5em;
`;

export default function ToDoInput({ addTask }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleClick = () => {
    addTask(title);
  };

  return ((
    <p>
      <Label
        htmlFor="input-task-title"
      >
        Task
      </Label>
      <Input
        id="input-task-title"
        type="text"
        value={title}
        onChange={handleChange}
      />
      <Button
        type="button"
        onClick={handleClick}
      >
        add
      </Button>
    </p>
  ));
}
