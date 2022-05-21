import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";

type LoginFormProps = {
  onSubmit: (values: any) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <Field name="email" type="text" as={Input} label="First name" />
        <Field name="password" type="password" as={Input} label="Password" />
        <Button type="submit" className="bg-yellow-400">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
