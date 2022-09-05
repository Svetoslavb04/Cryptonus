import { useState } from 'react';
import './App.css';
import { themes } from '../constants/themes';
import Content from './Core/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {

  const [theme, setTheme] = useState<string>(themes.dark);

  return (
    <>
      <div id='cryptonus' className={`cryptonus overflow-hidden relative ${theme}`}>
        <BrowserRouter>
          <Content theme={theme} setTheme={setTheme} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
