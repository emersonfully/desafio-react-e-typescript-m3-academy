import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("*Campo Obrigatório"),
  email: Yup.string().required("*Campo Obrigatório").email("Email inválido"),
  phone: Yup.string()
    .required("*Campo Obrigatório")
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/),
  birthdate: Yup.date()
    .required("*Campo Obrigatório")
    .min(new Date("1900-01-01"), "Data Invalida")
    .max(new Date(), "Não é possível incluir uma data futura"),
  instagram: Yup.string()
    .matches(
      /^(?:@)?([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/,
      "Invalid Instagram handle"
    )
    .required("*Campo Obrigatório"),
});
