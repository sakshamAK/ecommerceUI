import { ShopCard } from "../../Components/ShopCard/ShopCard"
import "./Wishlist.css"

export const Wishlist = () => {
    return (
        <div className="wishlist-cont">
            <h3>My wishlist</h3>
            <div className="wishlist-list">
            <ShopCard favorite={true} />
            <ShopCard favorite={true} />
            </div>
        </div>
    )
}
