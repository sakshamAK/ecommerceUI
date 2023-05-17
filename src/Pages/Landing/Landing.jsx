import { Link } from "react-router-dom"
import "./Landing.css"

export const Landing = () => {
    return (
        <div className="landing-comp">
            <div className="landing-head">
                {Array.from(Array(5)).map((item) => (
                    <Link to="/product" key={item}><div className="landing-head-item">
                        <div className="landing-item-label">
                            Men
                        </div>
                    </div>
                    </Link>)
                )}
            </div>
            <div className="landing-sample-div"></div>
            <div className="landing-collection">

                {Array.from(Array(2)).map((item) => (
                    <div key={item} className="landing-collection-item">
                        <div className="blank-space"></div>
                        <div>
                            <p>NEW ARRIVALS</p>

                            <h3>Summer Collection</h3>
                            <p>Check out our best winter collection to stay warm in style this season</p>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )
}
