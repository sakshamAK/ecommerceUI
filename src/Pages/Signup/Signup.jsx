import { Link } from "react-router-dom"
import "./Signup.css"

export const Signup = () => {
  return (
    <div className="signup-cont">
        <div className="signup-card">
            <h3>Signup</h3>
            <div className="signup-input">
            <label><b>Email Address</b></label>
            <input type = "text" placeholder="adarshbalika@gmail.com" />
            </div>
            <div className="signup-input">
            <label><b>Password</b></label>
            <input type = "text" placeholder="*************" />
            </div>
            <div className="signup-forgot-details">
            <div className="remember-me">
                <input type="checkbox" />
                <label>I accept all Terms & Conditions</label>
            </div>
            </div>
            <button className="card-button active-button">Create New Account</button>
            <Link to="/login" className="create-new-account">Already have an account <i className="material-symbols-outlined">arrow_forward_ios</i></Link>
        </div>
    </div>
  )
}
