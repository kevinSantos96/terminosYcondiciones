"use client";

import { Box, Modal } from "@mui/material";
import { FormLabel, Input } from "@mui/joy";
import { setProjects } from "./api";
import { useForm } from "./hooks/useForm";
import "./styles/styles.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

export const ModalBasic = ({ openModal, setOpenModal,setAddProject ,addProject}) => {
  const [values, handleInputChange] = useForm({
    name:""
  });
  const {name} = values
  function handleClose() {
    setOpenModal(!openModal);
  }

  const setAddNewProject = async () => {
    const nombre = name.toUpperCase().trim()

    if(nombre.length<=0){
      return alert("El nombre no puede ir vacio")
    }
    const value = {
      name: nombre
    };
    try {
      const res = await setProjects(value);
      const { success } = res;
      if (success) {
        alert("Almacenado correctamente");
        setAddProject(!addProject)
        handleClose()

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <h4>Agregar un nuevo proyecto</h4>
          <FormLabel>Nombre</FormLabel>
          <Input
            placeholder="Código del projecto"
            value={name}
            onChange={handleInputChange}
            name="name"
          />
          <button className="btn btn-primary btn_save" onClick={setAddNewProject}>
            Guardar
          </button>
        </Box>
      </Modal>
    </div>
  );
};
