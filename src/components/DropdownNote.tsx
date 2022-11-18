import { useMutation } from "@apollo/client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ENoteMutationType } from "../enums/EMutationTypes";
import { ERoles } from "../enums/ERoles";
import { note as noteMutation } from "../graphql/mutations/note";
import { Note } from "../interfaces/Entities";
import { IModalProps } from "../interfaces/IModalProps";
import { Modal } from "./Modal";

export const DropdownNoteOptions = (note: Note) => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteNote, { data }] = useMutation(noteMutation);

  const toggleModal = () => setShowModal(!showModal);
  const deleteNoteModal: IModalProps = {
    message: "¿Estas seguro de que deseas eliminar la publicacion?",
    acceptOption: {
      text: "Aceptar",
      onClick: () =>
        deleteNote({
          variables: {
            type: ENoteMutationType.DELETE,
            payload: {
              id: note.id,
            },
          },
        }),
    },
    cancelOption: {
      text: "Cancelar",
      onClick: toggleModal,
    },
  };

  useEffect(() => {
    if (data?.note?.deleted) {
      toggleModal();
      location.pathname.includes("/n/") ? navigateTo("/") : navigateTo(0);
    }
  }, [data]);

  return (
    <>
      {note.isOwner && (
        <li>
          <Link
            to={`/n/edit/${note.id}`}
            className="p-2 font-semibold flex flex-row gap-2 items-center w-full hover:bg-gray-200"
          >
            <Icon
              className="w-5 h-5 text-primary-500"
              icon="ant-design:edit-filled"
            ></Icon>
            <p>Edit</p>
          </Link>
        </li>
      )}
      {note.isOwner ||
        (note?.notebook.role !== ERoles.USER && (
          <li>
            <button
              className="p-2 font-semibold text-danger-500 flex flex-row gap-2 items-center w-full hover:bg-gray-200"
              onClick={toggleModal}
            >
              <Icon className="w-5 h-5 text-danger-500" icon="bi:trash-fill" />
              <p>Delete</p>
            </button>
          </li>
        ))}
      {showModal && <Modal {...deleteNoteModal} />}
    </>
  );
};
