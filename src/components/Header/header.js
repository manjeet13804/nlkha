import "./header.css"
import { Link } from "react-router-dom";
import "./search.svg"
import "./icons8-search.svg"
const Header = () => {
    return <>
        <nav className="header">
            <section className="logo">
                <img src={require("../../images/header.png")} alt="log" />
            </section>
            <section className="input-search">
                <input placeholder="Search Here"></input>
                <img src="./icons8-search.svg" alt="Search SVG" />
            </section>
            <section>
                <Link to="/login">
                    <span>login</span>
                </Link>
                <Link to="/cart">
                    <span>cart</span>
                </Link>
            </section>
        </nav>
        <nav className="header">
            <section>
                <Link to="/fruits&vegitable">
                    <span>Fruit & Veg</span>
                </Link>
                <Link to="/grocery">
                    <span>Grocery</span>
                </Link>
                <Link to="/self-service">
                    <span>Self Service</span>
                </Link>
                <Link to="/mandi">
                    <span>Mandi</span>
                </Link>
                <Link to="/gain-market">
                    <span>Gain Market</span>
                </Link>
            </section>

        </nav>

    </>
}
export default Header