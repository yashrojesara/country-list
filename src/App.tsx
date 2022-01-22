import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryForm from './Components/CountryForm';
import CountryList from './Components/CountryList';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<CountryForm />} />
          <Route path={'/country/:countryName'} element={<CountryList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
