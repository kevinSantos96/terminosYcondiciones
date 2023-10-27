"use client"
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material"

const MenuProps = {
    autoFocus: false,
    PaperProps: {
      style: {
        width: "auto",
        overflowY: "scroll"
      }
    }
    };

export const SelectBasic = ({data, value, setValue, id, label})=>{
    
return(
    <div>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> {label}</InputLabel>
        <Select 
        labelId="demo-simple-select-label"
            size="small"
            sx={{borderRadius:2,borderColor:"#000",}}
            id={id}
            value={value}
            label="Selecciona"
            onChange={(newValue)=>setValue(newValue.target.value)}
            MenuProps={MenuProps}
            
        >
            {
                data?.map(item=>(
                    <MenuItem key={item.id} value={item.id} >{item.nombre || item.name}</MenuItem>
                ))
            }
        </Select>
        </FormControl>
        
    </div>
)
}