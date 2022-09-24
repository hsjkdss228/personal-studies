import { useLocalStorage } from 'usehooks-ts';

import Button from '../components/ui/Button';

export default function HomePage() {
  const [themeName, setThemeName] = useLocalStorage('theme', 'default');

  const toggleTheme = () => {
    setThemeName(themeName === 'default' ? 'dark' : 'default');
  };

  return (
    <div>
      <p>
        Hello, world!
      </p>
      <Button
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </Button>
    </div>
  );
}
