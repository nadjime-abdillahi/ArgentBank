import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home/Home';
import { SignIn } from './pages/SignIn/signin';
import { UserPanel } from './pages/UserPanel/userPanel';
import { useEffect, useState } from 'react';
import { Error404 } from './pages/Error404/error404';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppBar } from './components/appBar/AppBar';
import { Footer } from './components/footer/Footer';

export const App = () => {

  // titre de la page
  const [ pageTitle, setupPageTitle ] = useState("Argent Bank");
  useEffect(() => {
    document.title=`Argent Bank - ${pageTitle}`;
  },[pageTitle])

  return (
    <Provider store={store}>
    <BrowserRouter>
    <AppBar />
      <Routes>
        <Route path="/" element={<Home pTitle={setupPageTitle}/>} />
        <Route path="/sign-in" element={<SignIn pTitle={setupPageTitle}/>} />
        <Route path="/user-panel" element={<UserPanel pTitle={setupPageTitle}/>} />
        <Route path="/" element={<Error404 pTitle={setupPageTitle}/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </Provider>
  );

};