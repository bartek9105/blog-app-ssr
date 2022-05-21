import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";

type LoginFormProps = {
  onSubmit: (values: any) => void;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <Field name="email" type="text" as={Input} label="E-mail" />
        <Field name="password" type="password" as={Input} label="Password" />
        <Button type="submit" variant="primary" className="py-3 mt-4 w-100">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
