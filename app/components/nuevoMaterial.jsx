"use client"
import { FormLabel, Input} from "@mui/joy"
import { useForm } from "./hooks/useForm"
import { addNewMaterials } from "./api"
import "./styles/styles.css"

export const NuevoMaterialForm = ()=>{
    const [values, handleInputChange, reset] = useForm({
        codigo_enee:"",
        nombre:"",
        referencia:"",
    })
    const {codigo_enee,nombre,referencia} = values

    const handleForm = async(e)=>{
        e.preventDefault()
        const value = {
           codigo_enee: codigo_enee.toUpperCase(),
           nombre,
           referencia: referencia.toUpperCase()
        }
        try {
            const res =  await addNewMaterials(value)
            const {message, success} = res
            if(success){
                alert(message)
                reset()
            }else{
                alert(message)
            }
        } catch (error) {
            console.log(error)
        }
        

    }

    return(
        <div className="container-form">
            <form onSubmit={handleForm}>
                <FormLabel>Código Enee</FormLabel>
                <Input
                placeholder="Código Enee"
                value={codigo_enee}
                onChange={handleInputChange}
                name="codigo_enee"
                />
                <FormLabel>Nombre del material</FormLabel>
                <Input
                placeholder="nombre"
                value={nombre}
                onChange={handleInputChange}
                name="nombre"
                />
                <FormLabel>Referencia del material</FormLabel>
                <Input
                placeholder="Referencia"
                value={referencia}
                onChange={handleInputChange}
                name="referencia"
                />
                <button className="btn btn-primary btn_save" >Guardar</button>

            </form>
        </div>
    )
}