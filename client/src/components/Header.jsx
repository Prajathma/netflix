import { useNavigate } from "react-router-dom";
import img1 from "./images/pngwing.com.png";
import "./css/home.css";


function Header() {
    let navigate = useNavigate();
    return <>
        <header className="d-lg-flex d-flex col-12 justify-content-lg-between p-2 mt-0 home-header bg-black">
            <div className="d-lg-flex header-left-div ms-4">
                <img src={img1} className="header-left-div-img ms-2" />
            </div>
            <div className="d-lg-flex header-right-div align-items-lg-center">
                <p className=" Tv-shows d-lg-flex d-none">UNLIMITED TV SHOWS & MOVIES</p>
                <button className="btn btn-danger join-button py-0 ms-2" onClick={() => navigate('/main')}>JOIN NOW</button>
                <button className="bg-transparent button-sign  ms-2 me-4">SIGN IN</button>
            </div>
        </header>
    </>
}
export default Header;