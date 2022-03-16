import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../pages/login"
export default function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route exact path="/home" element = {<h1>home</h1>}/>

        </Routes>
        </BrowserRouter>
    );
}