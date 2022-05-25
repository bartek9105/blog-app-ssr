import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";
import Select from "react-select";
import { Category } from "../../types/Category.type";
import Textarea from "../Textarea/Textarea";
import { isEmpty } from "lodash";
import TextEditor from "../TextEditor";

type NewPostFormProps = {
  onSubmit: (values: any) => void;
  categories: Category[];
};

const NewPostForm = ({ onSubmit }: NewPostFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", content: "", img_url: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form>
          <Field
            name="title"
            type="text"
            as={Input}
            label="Title"
            error={errors.title}
          />
          <Field
            name="content"
            type="text"
            label="Content"
            error={errors.content}
          >
            {({ field }: any) => (
              <TextEditor
                value={field.value}
                onChange={field.onChange(field.name)}
              />
            )}
          </Field>
          <Field name="img_url" type="text" as={Input} label="Image URL" />
          <Button
            disabled={!isEmpty(errors)}
            type="submit"
            className="bg-yellow-400"
            variant="primary"
          >
            Add post
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewPostForm;
