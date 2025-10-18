import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import {Routes,Route, Navigate} from "react-router"
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import toast from 'react-hot-toast';
const App = () => {
  return (
       <>
          <button onClick={()=>toast.success("congrats")}>Button</button>

      <SignedIn>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/auth' element={<Navigate to={"/"} replace />}></Route>
        </Routes>
      </SignedIn>

 <SignedOut >
        <Routes>
          <Route path='/auth' element={<AuthPage />} ></Route>
          <Route path='*' element={<Navigate to={"/auth"} replace />}></Route>
        </Routes>
      </SignedOut>
  </>
  )
}

export default App

