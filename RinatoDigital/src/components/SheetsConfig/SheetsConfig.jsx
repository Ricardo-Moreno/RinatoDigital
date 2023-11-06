const enviarDatosASheet = async (datos) => {
  console.log("Datos a enviar a Google Sheets:", datos);

  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/b8b28b4a-dcde-42f8-9cf2-4f24a96dba15",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return "Datos enviados a Google Sheets correctamente";
    } else {
      const errorResponse = await response.text();
      throw new Error(
        "Error al enviar datos a Google Sheets. Código de estado: " +
          response.status +
          ", Mensaje: " +
          errorResponse
      );
    }
  } catch (error) {
    throw new Error(
      "Hubo un error al enviar datos a Google Sheets: " + error.message
    );
  }
};

export default enviarDatosASheet;
