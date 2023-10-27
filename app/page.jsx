"use client";

import { getProjects } from "./components/api";
import { useEffect, useState } from "react";

import "./components/styles/styles.css";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <section className="mx-auto p-4">
        <article  className="contendor_term">
            <p>
              Al descargar o utilizar la aplicación de SIV Galería, usted acepta a cumplir estos términos y condiciones; por lo tanto, debe asegurarse de leerlos detenidamente antes de utilizar la aplicación. Si no está de acuerdo con estos términos, no utilice la Aplicación.
            </p>
            <p>
              No está permitido intentar extraer el código fuente de la aplicación y tampoco debe intentar traducir la aplicación a otros idiomas ni crear versiones derivadas.
            </p>
            <p>
              Nos comprometemos a que la aplicación se lo más útil y eficientemente posible. Por ese motivo, nos reservamos el derecho de realizar cambios en la aplicación. 
            </p>
            <p>
              La aplicación de SIV Galería solicita acceso a la cámara para permitir la captura de nuevas imágenes desde la cámara. 
            </p>
            <p>
               La aplicación hace uso del almacenamiento del dispositivo, por ende, se requiere el acceso gestionar y mostrar las imágenes almacenadas y documentos en su dispositivo.
            </p>
            <p>
              La aplicación de SIV Galería puede recopilar y almacenar información limitada sobre su dispositivo y su actividad dentro de la aplicación, de acuerdo con nuestra Política de Privacidad. Le recomendamos que revise nuestra Política de Privacidad para obtener información detallada sobre la recopilación y el uso de sus datos.
            </p>
            <p>
              Todos los derechos de propiedad intelectual relacionados con la Aplicación, incluidos los derechos de autor y las marcas registradas, son propiedad de los desarrolladores de aplicación de SIV Galería.
            </p>
            <p>
              En algún momento, la Aplicación puede recibir actualizaciones periódicas para mejorar la funcionalidad y corregir errores. La aplicación está actualmente disponible en Android, asegúrese de mantener la aplicación actualizada para disfrutar de la mejor experiencia.
            </p>
            <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en la Aplicación. Es su responsabilidad revisar regularmente estos términos y condiciones de la aplicación.
            </p>
        </article>
        </section>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &reg; Derechos Reservados {new Date().getFullYear()} 
        </span>
      </div>
    </>
  );
};

export default HomePage;
