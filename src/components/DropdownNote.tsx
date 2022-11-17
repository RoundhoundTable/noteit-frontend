import { useMutation } from "@apollo/client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ENoteMutationType } from "../enums/EMutationTypes";
import { note } from "../graphql/mutations/note";
import { IModalProps } from "../interfaces/IModalProps";
import { Modal } from "./Modal";

export const DropdownNoteOptions = ({ noteId }: { noteId: string }) => {
  const navigateTo = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteNote, { data }] = useMutation(note);

  console.log({
    variables: {
      type: ENoteMutationType.DELETE,
      payload: {
        id: noteId,
      },
    },
  });

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
              id: noteId,
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
    if (data?.comment?.deleted) {
      toggleModal();
      navigateTo("/");
    }
  }, [data]);

  return (
    <>
      <li>
        <Link
          to={`/n/edit/${noteId}`}
          className="p-2 font-semibold flex flex-row gap-2 items-center w-full hover:bg-gray-200"
        >
          <Icon
            className="w-5 h-5 text-primary-500"
            icon="ant-design:edit-filled"
          ></Icon>
          <p>Edit</p>
        </Link>
      </li>
      <li>
        <button
          className="p-2 font-semibold text-danger-500 flex flex-row gap-2 items-center w-full hover:bg-gray-200"
          onClick={toggleModal}
        >
          <Icon className="w-5 h-5 text-danger-500" icon="bi:trash-fill" />
          <p>Delete</p>
        </button>
      </li>
      {showModal && <Modal {...deleteNoteModal} />}
    </>
  );
};
