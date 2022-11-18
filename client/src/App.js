import * as React from 'react';
//import Button from '@mui/material/Button';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import PlantForm from './components/PlantForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import CssBaseline from '@mui/material/CssBaseline';
import Main from './views/Main';
import Update from './components/Update';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div >
      <Routes>
        <Route element={<PlantForm/>} path='/plants/new'/>
        <Route element={<Main/>} path='/plants'/>
        <Route element={<Update/>} path='/plants/:id'/>
      </Routes>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
