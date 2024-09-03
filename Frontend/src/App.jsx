import Home from "./home/Home"
import Courses from "./Course/courses"
import {Route , BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Contacts from "./Contact/Contacts"
import Signups from "./Signup/Signups"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/Authprovider"
import Login from "./Components/Login"
import Abouts from "./About/Abouts"
function App(){
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return(
    <>
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
     <Route path="/Courses" element={authUser?<Courses/>:<Navigate to={"/Signups"}/>}></Route>
     <Route path="/Signups" element={<Signups/>}></Route>
     <Route path="/Abouts" element={<Abouts/>}></Route>
     <Route path="/Contacts" element={<Contacts/>}></Route>
    </Routes>
    <Toaster />
    </BrowserRouter>
    </div>
    </>
  )
}
export default App
