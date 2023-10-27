"use client";
import React, { useState, useEffect } from "react";
import { FormLabel, Input } from "@mui/joy";
import { useForm } from "./hooks/useForm";
import "./styles/styles.css";
import { addProjectAndMaterials, getAllMaterials, getProjects } from "./api";
import { SelectBasic } from "./select";

export const NewProject = () => {
  const [values, handleInputChange, reset] = useForm({
    unidad: "",
    cantidad1: 0,
    cantidad2: 0,
  });
  const [projects, setProjects] = useState([]);
  const [projectSelected, setProjectSelected] = useState("");
  const [materiales, setMateriales] = useState([]);
  const [materialSelected, setMaterialSelected] = useState("");
  const { unidad, cantidad1, cantidad2 } = values;

  const getMaterials = async () => {
    try {
      const resp = await getProjects();
      const res = await getAllMaterials();
      const { success, data } = res;
      if (success) {
        setMateriales(data);
        setProjects(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  async function addMaterial(e) {
    e.preventDefault();
    if([unidad,materialSelected,projectSelected].includes(" ")){
      return alert("no deben ir campos vacios")
    }
    const materiales = {
      materials: materialSelected,
      projects: projectSelected,
      unidad,
      C345V: Number(cantidad1),
      C138V: Number(cantidad2),
    };
    try {
      const res = await addProjectAndMaterials(materiales);
      const { success, message } = res;
      if (success) {
        alert("data almacenada")
        reset()
      }
    } catch (error) {
      console.log(error);
    }
    
    
  }
  return (
    <div className="container-form">
      <form>
        
        <SelectBasic
          data={projects}
          value={projectSelected}
          setValue={setProjectSelected}
          label={"Proyecto"}
          id={"project-select"}
        />
        <h5 className="title-second">Ingresar material:</h5>
        
        <SelectBasic
          data={materiales}
          value={materialSelected}
          setValue={setMaterialSelected}
          label={"Material"}
          id={"material-select"}
        />

        <FormLabel>Unidad</FormLabel>
        <Input
          placeholder="Ej. C/U"
          value={unidad}
          onChange={handleInputChange}
          name="unidad"
        />
        <FormLabel>Cantidad</FormLabel>
        <div className="from-quantity">
          <FormLabel>34.5 Kv</FormLabel>
          <Input
            type="number"
            value={cantidad1}
            onChange={handleInputChange}
            name="cantidad1"
          />
          <FormLabel>13.8 Kv</FormLabel>
          <Input
            type="number"
            value={cantidad2}
            onChange={handleInputChange}
            name="cantidad2"
          />
        </div>
        <button className="btn btn-primary btn_save" onClick={addMaterial}>
          Guardar
        </button>
      </form>
    </div>
  );
};
