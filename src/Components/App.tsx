import './App.css';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ConfigureMUI } from './Core/ConfigureMUI/ConfigureMUI';

import { themes } from '../constants/themes';
import Content from './Core/Content/Content';

const App: React.FC = () => {

  const [theme, setTheme] = useState<string>(themes.dark);

  return (
    <>
      <div id='cryptonus' className={`cryptonus overflow-hidden relative ${theme}`}>
        <BrowserRouter>
          <ConfigureMUI>
            <Content theme={theme} setTheme={setTheme} />
          </ConfigureMUI>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
