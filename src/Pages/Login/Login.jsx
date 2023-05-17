import { Link } from "react-router-dom"
import "./Login.css"

export const Login = () => {
  return (
    <div className="login-cont">
        <div className="login-card">
            <h3>Login</h3>
            <div className="login-input">
            <label><b>Email Address</b></label>
            <input type = "text" placeholder="adarshbalika@gmail.com" />
            </div>
            <div className="login-input">
            <label><b>Password</b></label>
            <input type = "text" placeholder="*************" />
            </div>
            <div className="login-forgot-details">
            <div className="remember-me">
                <input type="checkbox" />
                <label>Remember Me</label>
            </div>
            <div className="forgot-password">Forgot your Password?</div>
            </div>
            <button className="card-button active-button">Login</button>
            <Link to="/signup" className="create-new-account">Create New Account <i className="material-symbols-outlined">arrow_forward_ios</i></Link>
        </div>
    </div>
  )
}
