"use client";
import MaterialTable from "material-table";
import { getProjects } from "../api";
import { useState, useEffect } from "react";
import "./styles/styles.css";


export const TableProjects = () => {

  const [projects, setDataProject] = useState()
  async function getDataProject(){
    try {
     const {data} = await getProjects()
     setDataProject(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   getDataProject()
  }, [])

  const dataProject = projects?.map((item, i = 1) => {
    const { id } = item;
    return {
      id: i + 1,
      name: id,
    };
  });

  const columns = [
    {
      field: "id",
      title: "#",
    },
    {
      field: "name",
      title: "Código",
    },
  ];

  return (
    <div className="table-container">
      <MaterialTable title="Projectos" columns={columns} data={dataProject} />
    </div>
  );
};
