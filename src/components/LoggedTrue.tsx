import TrueImage from "../assets/images/true_logged.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const LoggedTrue = () => {
    return (
        <div className="md:flex">
            <div className="text-center mt-10 md:mt-56 p-10">
                <h1 className="text-xl text-primary-700">Vaya, todavía no te has unido a un grupo. Prueba unirte a uno para llenar tu feed, 
                <Link to="/nb/NoteIt" className="font-bold"> nb/NoteIt</Link></h1>
            </div>
            <img src={TrueImage} className=" w-96 md:mr-20 md:mt-24" />
        </div>
    );
};
export {};