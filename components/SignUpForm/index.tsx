import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";

type SignUpFormProps = {
  onSubmit: (values: any) => void;
};

export type SignUpFormValues = {
  email: string;
  name: string;
  password: string;
};

const initialValues: SignUpFormValues = {
  email: "",
  name: "",
  password: "",
};

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
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
        <Field name="name" type="text" as={Input} label="Name" />
        <Field name="password" type="password" as={Input} label="Password" />
        <Button type="submit" variant="primary" className="py-3 mt-4 w-100">
          Create an account
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
