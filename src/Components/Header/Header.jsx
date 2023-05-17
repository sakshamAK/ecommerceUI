import { Link } from "react-router-dom"
import "./Header.css"


export const Header = () => {
    return (
        <div className="header-cont">
            <h3><Link to="/" className="brand-name">MyShoppingSite</Link></h3>
            <div className="header-search">
                <i className="material-symbols-outlined">search</i>
                <input type="text" placeholder="Search" />
            </div>
            <div className="header-profile">
                <Link className="login-button" to="/login">Login</Link>
                <Link to="/wishlist" className="header-badge">
                    <div>0</div>
                    <i className="material-symbols-outlined">favorite</i>
                </Link>
                <Link to="/cart" className="header-cart">
                    <div className="header-badge">
                        <div>0</div>
                        <i className="material-symbols-outlined">shopping_cart</i>
                    </div>
                    <label>cart</label>
                </Link>
            </div>
        </div>
    )
}
