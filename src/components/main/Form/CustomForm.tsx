import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import MaskedInput from "react-text-mask";

import "./CustomForm.scss";
import FormSchema from "../../../schema/FormSchema";

interface IFormikValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  birthdate: string;
  instagram: string;
  cpf: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  birthdate: "",
  instagram: "",
  cpf: "",
};

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const cpfMask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

const dateMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

// copilot write birthdate field with mask:
//

const CustomForm = () => {
  const handleFormikSubmit = (values: IFormikValues) => {};
  console.log("algo");
  return (
    <Formik
      onSubmit={handleFormikSubmit}
      initialValues={initialValues}
      validationSchema={FormSchema}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <div className="form-col">
            <label htmlFor="name">Nome </label>
            <Field
              id="name"
              name="name"
              className={errors.name && touched.name && "invalid"}
              placeholder="Seu nome completo"
            />
            <ErrorMessage
              component="span"
              name="name"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-col">
            <label htmlFor="email">E-mail </label>
            <Field
              id="email"
              name="email"
              className={errors.email && touched.email && "invalid"}
              placeholder="Seu e-mail"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-col">
            <label htmlFor="cpf">CPF</label>
            <Field
              name="cpf"
              render={({ field }: any) => (
                <MaskedInput
                  {...field}
                  mask={cpfMask}
                  onChange={handleChange}
                  id="cpf"
                  className={errors.cpf && touched.cpf && "invalid"}
                  placeholder="999.999.999-99"
                />
              )}
            />
            <ErrorMessage
              component="span"
              name="cpf"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-col">
            <label htmlFor="birthdate">Data de Nascimento</label>
            <Field
              id="birthdate"
              name="birthdate"
              type="date"
              className={errors.birthdate && touched.birthdate && "invalid"}
            />
            <ErrorMessage
              component="span"
              name="birthdate"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-col">
            <label htmlFor="phone">Seu Telefone</label>
            <Field
              name="phone"
              render={({ field }: any) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  onChange={handleChange}
                  className={errors.phone && touched.phone && "invalid"}
                  placeholder="(00) 00000-0000"
                />
              )}
            />
            <ErrorMessage
              component="span"
              name="phone"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-col">
            <label htmlFor="instagram">Seu Instagram</label>
            <Field
              id="instagram"
              name="instagram"
              className={errors.instagram && touched.instagram && "invalid"}
              placeholder="@seuuser"
            />
            <ErrorMessage
              component="span"
              name="instagram"
              className="form-invalid-feedback"
            />
          </div>

          <div className="form-checkbox-wrapper">
            <span className="">*</span>
            <span className="form-checkbox-declaration">
              Declaro que li e aceito
            </span>
            <input type="checkbox" name="" id="" />
          </div>

          <button className="form-button" type="submit">
            cadastre-se
          </button>
        </Form>
      )}
    </Formik>
  );
};

export { CustomForm };
