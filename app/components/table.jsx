"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getMatertialsByIdProject } from "./api";

export const BasicTable = ({ projecto }) => {
  const [materials, setMaterials] = useState([]);

  async function getMaterials() {
    try {
      const res = await getMatertialsByIdProject(projecto);
      const { data, success } = res;
      if (success) {
        setMaterials(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMaterials();
  }, [projecto]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Cod. enee</TableCell>
            <TableCell align="left">Material</TableCell>
            <TableCell align="left">Unidad</TableCell>
            <TableCell align="left">34.5V</TableCell>
            <TableCell align="left">13.8V</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materials?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.materials.codigo_enee}
              </TableCell>
              <TableCell align="left">{row.materials.nombre}</TableCell>
              <TableCell align="left">{row.unidad}</TableCell>
              <TableCell align="left">{row.C138V}</TableCell>
              <TableCell align="left">{row.C345V}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
