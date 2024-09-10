import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
        <Route path="/dashboard/*" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
