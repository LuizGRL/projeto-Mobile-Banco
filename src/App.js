import { useState } from "react";
import "./style.css"
import logo1 from "./img/lontraLogo2.png"

function App() {
  const[email,setEmail] = useState("") /* faz com quem o emal e senha sumam caso tenha voalor inserido */
  const[password,setPassword] = useState("")
  return (
    <div className="container">
      
      <div className="container-login">
        <div className="wrap-login">
          <form className="form-login">
            <span className="login-form-title">
            <div>

            </div>
            <img src={logo1} alt="Logo" />
            <br/>
            Login
            </span> {/* Texto exibido no inicio */}
            <div className="wrap-input">
              <input className={email !==""?'has-val input':'input'}/* faz com que caso email seja vazio a class name receba um caso nao recebe outro*/ type= {"email"} value={email} onChange={e=>setEmail(e.target.value)}/>
              <span className="focus-input" data-placeholder="Email">
              </span>{/* Se chama focus poruqe colere durante o input */}
            </div>

            <div className="wrap-input">
              <input className={password !==""?'has-val input':'input'} type={"password"} value={password} onChange={e=>setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Password">
              </span>{/* Se chama focus poruqe colere durante o input */}
            </div>

            <div className="container-form-login-0-btn"> 
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Usuário Novo  ?</span>
              <a className="txt2" href="#">Crie sua conta aqui  </a>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
