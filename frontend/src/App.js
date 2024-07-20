import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { GlobalProvider } from './context/globalContext';
import ViewTransactions from './Components/Transactions/ViewTransactions';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import { ToastContainer } from 'react-toastify';


function App() {
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <ViewTransactions />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])


  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
        <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <>
                      <MainLayout>

                  <Navigation active={active} setActive={setActive} />
                  <main>{displayData()}</main>
                  </MainLayout>

                </>
                  }
            />
          </Routes>
          <ToastContainer />
          </GlobalProvider>
        </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
