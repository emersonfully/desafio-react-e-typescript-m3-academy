import * as Yup from "yup";

const currentDate = new Date().toLocaleDateString();
const dateFormated = currentDate.split("/").reverse().join("-");
const getFormatedDate = (currentDate: string) => {
  return "";
};
console.log(
  "getFormatedDate(new Date().toLocaleDateString())",
  getFormatedDate(new Date().toLocaleDateString())
);
export default Yup.object().shape({
  name: Yup.string().required("*Campo Obrigatório"),
  email: Yup.string().required("*Campo Obrigatório").email("Email inválido"),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Formato Inválido")
    .required("*Campo Obrigatório"),
  phone: Yup.string()
    .required("*Campo Obrigatório")
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/, "Formato Inválido"),
  birthdate: Yup.date()
    .required("*Campo Obrigatório")
    .min(new Date("1900-01-01"), "Data Inválida")
    .max(new Date(), "Não é possível incluir uma data futura"),
  instagram: Yup.string()
    .matches(/^@[A-Za-z0-9_.]+$/, 'O nome de usuario deve começar com "@"')
    .required("*Campo Obrigatório"),
});
