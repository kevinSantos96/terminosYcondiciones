const url = process.env.API_URL;

export const setProjects = async (value) => {
  const response = {
    data: [],
  };
  try {
    const resp = await fetch("http://localhost:5000/api/project/setproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const respJSON = await resp.json();
    if (respJSON.success) {
      response.success = respJSON.success;
    }
  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = "error en traer data";
  }
  return response;
};

export const getMatertialsByIdProject = async (id) => {
  const response = { success: true, data: [] };
  try {
    const resp = await fetch(
      `http://localhost:5000/api/materials/getmaterialofproject/${id}`,
      {
        method: "GET",
      }
    );
    const respJSON = await resp.json();
    response.success = respJSON.success;
    if (respJSON.success) {
      response.data = respJSON.data;
    }
  } catch (error) {
    console.log(error);
    response.success = false;
  }
  return response;
};

//Obtener Proyectos

export const getProjects = async () => {
  const response = {
    data: [],
    message: "",
    success: true,
  };

  try {
    const resp = await fetch("http://localhost:5000/api/project/getprojects", {
      method: "GET",
    });
    const respJSON = await resp.json();
    if (respJSON.success) {
      response.data = respJSON.data;
    }
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const addNewMaterials = async (value) => {
  const response = {
    message: "",
  };
  try {
    const resp = await fetch("http://localhost:5000/api/setMaterials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const respJSON = await resp.json();
    if (respJSON.success) {
      response.success = respJSON.success;
      response.message = respJSON.message;
    } else {
      response.success = respJSON.success;
      response.message = respJSON.message;
    }
  } catch (error) {
    response.message = "Error al insertar la data";
    console.log(error);
  }
  return response;
};

export const getAllMaterials = async () => {
  const response = {
    data: [],
    message: "",
    success: true,
  };

  try {
    const resp = await fetch("http://localhost:5000/api/getmaterials", {
      method: "GET",
    });
    const respJSON = await resp.json();
    if (respJSON.success) {
      response.data = respJSON.data;
      response.success = respJSON.success;
    }
  } catch (error) {
    console.log(error);
    response.success = false;
  }
  return response;
};

export const addProjectAndMaterials = async (value) => {
  const response = {
    success: true,
    message: "",
  };
  try {
    const resp = await fetch(
      "http://localhost:5000/api/materials/setnewproject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }
    );

    const respJSON = await resp.json();
    if (respJSON.success) {
      response.success = respJSON.success;
    } else {
      response.success = respJSON.success;
    }
  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = "hubo un error al insertar la data";
  }
  return response;
};
