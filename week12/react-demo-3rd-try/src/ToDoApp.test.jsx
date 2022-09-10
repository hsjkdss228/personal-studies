import ToDoApp from './ToDoApp';

const { render } = require('@testing-library/react');

test('ToDoApp', () => {
  render(<ToDoApp />);
});
