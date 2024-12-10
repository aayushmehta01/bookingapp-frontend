import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);    

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/api/auth/login", credentials);            
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/")
        } catch (err) {
            console.log("Login Error:", err.response.data);
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <>
        <div className="navbar" style={{backgroundColor:'white'}}>
            <div className="navContainer">
                <Link to="/" style={{color:'black', textDecoration:'none'}}>
                <span className="logo">bookeasy</span>
                </Link>
            </div>
        </div>
        <div className="login">
            <div className="lContainer">
                <div className="lHeader">
                    <h2>Sign in</h2>
                    <p>You can sign in using your Bookeasy.com account to access our services.</p>
                </div>
                <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="lInput"
                />
                <input
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                className="lInput"
                />
                <p className="forgot-pass"><Link to="/forgot-password" className="link">Forgot Password?</Link></p>
                <button disabled={loading} onClick={handleClick} className="lButton">
                Login
                </button>
                {error && <span>{error.message}</span>}
                <div className="lFooter">
                    <p>Don't have an account? <span><Link to="/register" className="link">Sign up</Link></span></p>
                </div>
            </div>
        </div>
        </>
  );
};

export default Login;