const enviarDatosASheet = async (datos) => {
  console.log("Datos a enviar a Google Sheets:", datos);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz35Du6jyKZj9SvkCKEgkE92g7CVAT5EEJIdEmod6l99F3V0d98BkaICdUdhj3ueh0lIQ/exec",
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
