import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";
import { Category } from "../../types/Category.type";
import { isEmpty } from "lodash";
import TextEditor from "../TextEditor";
import CategoriesButtons from "../CategoriesButtons";
import FieldWrapper from "../FieldWrapper";

type NewPostFormProps = {
  onSubmit: (values: any) => void;
  categories?: Category[];
};

const NewPostForm = ({ onSubmit, categories }: NewPostFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", category: "", content: "", img_url: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
        category: Yup.string().required("Category is required"),
        img_url: Yup.string().required("Image URL is required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form>
          <FieldWrapper label="Title" error={errors.title}>
            <Field name="title" type="text" as={Input} />
          </FieldWrapper>
          <FieldWrapper label="Content" error={errors.content}>
            <Field name="content" type="text">
              {({ field }: any) => (
                <TextEditor
                  value={field.value}
                  onChange={field.onChange(field.name)}
                  className="mb-4"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Category" error={errors.category}>
            <Field name="category">
              {({ field }: any) => (
                <CategoriesButtons
                  className="mb-4"
                  onChange={field.onChange(field.name)}
                  categories={categories}
                  value={field.value}
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Image URL" error={errors.img_url}>
            <Field name="img_url" type="text" as={Input} label="Image URL" />
          </FieldWrapper>
          <Button
            disabled={!isEmpty(errors)}
            type="submit"
            className="bg-yellow-400 mt-4"
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
