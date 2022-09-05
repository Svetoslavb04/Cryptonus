import { useState } from 'react';
import './App.css';
import { themes } from './constants/themes';
import Content from './Core/Content/Content';

const App: React.FC = () => {

  const [theme, setTheme] = useState<string>(themes.dark);

  return (
    <>
      <div id='cryptonus' className={`cryptonus overflow-hidden ${theme}`}>
        <Content theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
