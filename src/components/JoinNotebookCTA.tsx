import ctaImage from "../assets/images/join_notebook_cta.png";
import { Link } from "react-router-dom";

export const JoinNotebookCTA = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-xl text-primary-700">
          Vaya, todavía no te has unido a un grupo. Prueba unirte a uno para
          llenar tu feed,
          <Link to="/nb/NoteIt" className="font-bold">
            {" nb/NoteIt"}
          </Link>
        </h1>
      </div>
      <img src={ctaImage} className=" w-96 md:mr-20 md:mt-24" />
    </div>
  );
};
