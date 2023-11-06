import { Formik, Form, Field, ErrorMessage } from "formik";
import enviarDatosASheet from "../SheetsConfig/SheetsConfig";
import * as Yup from "yup";

const Forms = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log("Valores del formulario:", values);
    try {
      // Simulación del envío a Google Sheets (en un entorno real, esto se haría en el backend)
      const response = await enviarDatosASheet(values);
      console.log("Respuesta de envío a Google Sheets:", response);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setErrors({ submit: "Error al enviar datos" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        Name: "",
        LastName: "",
        Email: "",
        Phone: "",
        Message: "",
      }}
      validationSchema={Yup.object().shape({
        Name: Yup.string().required("El nombre es obligatorio"),
        LastName: Yup.string().required("El apellido es obligatorio"),
        Email: Yup.string()
          .email("Correo electrónico no válido")
          .required("El correo es obligatorio"),
        Phone: Yup.string().required("El teléfono es obligatorio"),
        Message: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="Name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Apellido:</label>
            <Field type="text" id="lastName" name="LastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Correo:</label>
            <Field type="email" id="email" name="Email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="phone">Teléfono:</label>
            <Field type="text" id="phone" name="Phone" />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div>
            <label htmlFor="message">Mensaje:</label>
            <Field type="text" id="message" name="Message" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
