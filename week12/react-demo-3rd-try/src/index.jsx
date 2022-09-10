import ReactDOM from 'react-dom/client';

import ToDoApp from './ToDoApp';

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

root.render(<ToDoApp />);
