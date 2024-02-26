import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleSignUp() {
        navigate("/signup");
    }

    function handleLogin() {
        navigate("/login");
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/07/14/03/48/1000_F_714034878_6FqL6PNChlNmrn4WM341BK5WcH9d5Kg7.jpg"
                        alt="Online Market"
                        className="img-fluid rounded"
                        style={{ height: '100vh', objectFit: 'cover' }} // Adjusted image height and object fit
                    />
                </div>
                <div className="col-md-6 d-flex align-items-center bg-light">
                    <div className="p-5">
                        <h1 className="display-4 mb-4 text-primary">Welcome to the Online Market</h1>
                        <p className="lead mb-4">Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.</p>
                        <p className="mb-4">If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!</p>
                        <div className="d-flex flex-column">
                            <button onClick={handleLogin} className="btn btn-primary btn-lg mb-3">Login</button>
                            <p className="text-center">Don't have an account? <button onClick={handleSignUp} className="btn btn-link btn-sm">Sign Up</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
