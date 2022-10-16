import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <StrictMode>
      <div id="my-app">
        <BrowserRouter>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
