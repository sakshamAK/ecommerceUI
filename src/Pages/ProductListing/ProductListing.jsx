import { ShopCard } from "../../Components/ShopCard/ShopCard"
import "./ProductListing.css"

export const ProductListing = () => {
    return (
        <div className="pl-cont">
            <div className="filters">
                <div className="filter-head">
                    <b>Filters</b>
                    <span>Clear</span>
                </div>
                <div className="filter-content">
                    <div className="filter-price">
                        <h4>Price</h4>
                        <div className="price-range-num">
                            <span>50</span>
                            <span>150</span>
                            <span>200</span>
                        </div>
                        <div className="filter-range-input">
                            <input
                                type="range"
                                list="tickmark"
                                min="300"
                                max="3100"
                                step="200"
                                className="filter-price-input"
                            />
                        </div>
                    </div>
                    <div>
                        <h4>Category</h4>
                        <div className="filter-radio">
                            <div className="filter-category">
                                <input type="checkbox" />
                                <label>Men Clothing</label>
                            </div>
                            <div className="filter-category">
                                <input type="checkbox" checked />
                                <label>Men Clothing</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Rating</h4>
                        <div className="filter-radio">
                            <div className="filter-category">
                                <input type="radio" />
                                <label>4 Stars & above</label>
                            </div>
                            <div className="filter-category">
                                <input type="radio" checked />
                                <label>3 Stars & above</label>
                            </div>
                            <div className="filter-category">
                                <input type="radio" />
                                <label>2 Stars & above</label>
                            </div>
                            <div className="filter-category">
                                <input type="radio" />
                                <label>1 Stars & above</label>
                            </div>
                        </div>
                        <div>
                            <h4>Sort By</h4>
                            <div className="filter-radio">
                                <div className="filter-category">
                                    <input type="radio" />
                                    <label>Price - Low to High </label>
                                </div>
                                <div className="filter-category">
                                    <input type="radio" checked />
                                    <label>Price - High to Low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="products-head">
                    <h3>Showing All Products</h3> <span>( Showing 20 Products )</span>
                </div>
                <div className="products-items">
                    <ShopCard favorite={true} cardStatus={true} />
                    {
                        Array.from(Array(10)).map((item) => (
                            <ShopCard key={item} favorite={false} cardStatus={false} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
