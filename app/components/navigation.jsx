import Link from "next/link";
import {AiOutlinePlus, AiOutlineHome,AiOutlineTool} from 'react-icons/ai'
// const Links = [
//   {
//     label: "Home",
//     route: "/",
//     icon: <AiOutlineHome/>
//   },
//   {
//     label: "Nuevo Proyecto",
//     route: "/nuevoProjecto",
//     icon: <AiOutlinePlus/>
//   },
//   {
//     label:"Nuevo Material",
//     route: "/nuevoMaterial",
//     icon: <AiOutlineTool/>
//   }
// ];

export const NavigationRoute =()=>{
    return(
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container-fluid "> 
              <h className="navbar-brand text-white mx-auto">T&eacute;rminos y condiciones de SIV GALERIA</h>
            </div>
          </nav>
        </header>
    )
}