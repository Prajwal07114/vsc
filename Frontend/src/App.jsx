import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import {Routes,Route, Navigate} from "react-router"
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import toast from 'react-hot-toast';
import CallPage from './pages/CallPage';
const App = () => {

  const {isSignedIn,isLoaded} = useAuth()
  if(!isLoaded)return null;
  return (
       <>

        <Routes>
          <Route path='/' element={isSignedIn ? <HomePage /> : <Navigate to={"/auth"} replace />} ></Route>
          <Route path='/auth' element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}></Route>
        
          <Route path='/call/:id' element={isSignedIn ? <CallPage/> : <Navigate to={"/auth"} replace />}></Route>


          <Route path='*' element={isSignedIn ? <HomePage/> : <Navigate to={"/auth"} replace />}></Route>
        </Routes>
</>
  )
}

export default App

