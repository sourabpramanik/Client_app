import React from 'react'
import GlobalStyle from './GlobalStyles'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'
import BottomNav from './components/BottomNav/BottomNav'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar/>
      <Homepage/>
      <BottomNav/>
    </React.Fragment>
  );
}

export default App;
