import "./Cart.css"
import img from "../../assets/img2.png";

export const Cart = () => {
    return (
        <div className="cart-cont">
            <h3>My Cart (1)</h3>
            <div className="cart-items">
                <div className="cart-card-cont">
                    <div className="cart-card-img">
                        <img src={img} />
                    </div>
                    <div className="cart-card-details-cont">
                        <div className="cart-card-details">
                            <h3>Men Premium Jacket</h3>
                            <div>
                                <div className="cart-card-price"><h2>₹2000</h2> <h4><s>₹3999</s></h4></div>
                                <div className="cart-card-price"><h4>50% off</h4></div>
                                <p className="cart-cart-quantity-cont">Quantity:
                                    <div className="cart-card-quantity">
                                        <div>-</div>
                                        <input type="number" value={1} />
                                        <div>+</div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <button className="cart-card-button">
                            Remove From Cart
                        </button>
                        <button className="cart-card-wishlist">
                            Move To Wishlist
                        </button>
                    </div>
                </div>
                <div className="cart-price-details-card">
                    <h4>PRICE DETAILS</h4>
                    <hr />
                    <div className="cart-price-flex">
                        <p>Price (1 item)</p>
                        <p>₹2000</p>
                    </div>
                    <div className="cart-price-flex">
                        <p>Discount</p>
                        <p>- ₹1000</p>
                    </div>
                    <div className="cart-price-flex">
                        <p>Delivery Charges</p>
                        <p>₹499</p>
                    </div>
                    <hr />
                    <div className="cart-price-flex">
                        <h4>TOTAL AMOUNT</h4>
                        <h4>₹2499</h4>
                    </div>
                    <hr />
                    <p>You will save ₹1000 on this order</p>
                    <button className="cart-card-button active-button">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}
