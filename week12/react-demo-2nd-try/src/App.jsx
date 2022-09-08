import { useState } from 'react';

import Greeting from './Greeting';
import InputName from './InputName';

export default function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <>
      <Greeting name={name || 'world'} />
      <InputName name={name} onChange={handleChange} />
    </>
  );
}
