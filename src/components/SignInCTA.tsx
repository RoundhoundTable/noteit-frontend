import ctaImage from "../assets/images/sign_in_cta.png";
import { Link } from "react-router-dom";

export const SignInCTA = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-xl text-primary-700">
          Oops! Parece que no has iniciado sesión, has
          <Link to="/account/login" className="font-bold">
            {" clic aquí "}
          </Link>
          para iniciar sesion
        </h1>
      </div>
      <img src={ctaImage} className="w-80" />
    </div>
  );
};
