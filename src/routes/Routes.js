import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login"
import Register from "../pages/register"
export default function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        </Routes>
        </BrowserRouter>
    );
}