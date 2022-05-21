import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";
import Select from "react-select";
import { Category } from "../../types/Category.type";

type NewPostFormProps = {
  onSubmit: (values: any) => void;
  categories: Category[];
};

const NewPostForm = ({ onSubmit, categories }: NewPostFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
      })}
      onSubmit={(values, error) => onSubmit(values)}
    >
      <Form>
        <Field name="title" type="text" as={Input} label="Title" />
        <Field name="content" type="text" as={Input} label="Content" />
        <Field name="img_url" type="text" as={Input} label="Image URL" />
        <Button type="submit" className="bg-yellow-400">
          Add post
        </Button>
      </Form>
    </Formik>
  );
};

export default NewPostForm;
