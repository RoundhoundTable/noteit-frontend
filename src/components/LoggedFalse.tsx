import FalseImage from "../assets/images/false_logged.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const LoggedFalse = () => {
    return (
        <div className="md:flex">
            <div className="text-center mt-10 md:mt-56 p-10">
                <h1 className="text-xl text-primary-700">Oops! Parece que no has iniciado sesión, has 
                <Link to="/account/login" className="font-bold"> clic aquí</Link> para iniciar sesion</h1>
            </div>
            <img src={FalseImage} className="w-96 md:ml-20 md:mt-24" />
        </div>
    );
};
export {};