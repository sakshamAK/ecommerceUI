import "./ShopCard.css"
import img from "../../assets/img2.png";

// eslint-disable-next-line react/prop-types
export const ShopCard = ({ favorite, cardStatus }) => {
    return (
        <div className="card-cont">
            <div className="card-img">
                <div className="card-badge">
                    {favorite ? <i className="red-fav material-icons-outlined">favorite</i> : <i className="material-symbols-outlined">favorite</i>}
                </div>
                <img src={img} />
            </div>
            <div className="card-details">
                <div>Men Premium Jacket</div>
                <b>₹2000</b>
            </div>
            {cardStatus ?
                <button className="card-button active-button">
                    Go To Cart
                </button> :
                <button className="card-button">
                    Add To Cart
                </button>}
        </div>
    )
}
