import { Field, Form, Formik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import Button from "../Button";
import FieldWrapper from "../FieldWrapper";
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
        email: Yup.string()
          .email("Invalid e-mail format")
          .required("E-mail is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form>
          <FieldWrapper label="E-mail" error={errors.email}>
            <Field name="email" type="text" as={Input} />
          </FieldWrapper>
          <FieldWrapper label="Password" error={errors.password}>
            <Field name="password" type="password" as={Input} />
          </FieldWrapper>
          <Button
            disabled={!isEmpty(errors)}
            type="submit"
            variant="primary"
            className="mt-4 w-100"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
