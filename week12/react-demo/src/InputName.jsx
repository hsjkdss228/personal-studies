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

export default function InputName({ name, onChange }) {
  return (
    <p>
      <Label htmlFor="input-name">
        Name:
      </Label>
      <Input
        id="input-name"
        type="text"
        value={name}
        onChange={onChange}
      />
    </p>
  );
}
