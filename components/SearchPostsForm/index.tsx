import { Field, Form, Formik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import Button from "../Button";
import FieldWrapper from "../FieldWrapper";
import Input from "../Input";

type SearchPostsFormProps = {
  onSubmit: (values: any) => void;
};

export type SearchPostsFormValues = {
  query: string;
};

const initialValues: SearchPostsFormValues = {
  query: "",
};

const SearchPostsForm = ({ onSubmit }: SearchPostsFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        query: Yup.string().required("Please provide search query"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form>
          <FieldWrapper error={errors.query}>
            <Field
              name="query"
              type="text"
              as={Input}
              placeholder="Type to search..."
            />
          </FieldWrapper>
          <Button
            disabled={!isEmpty(errors)}
            type="submit"
            variant="primary"
            className="mt-4 w-100"
          >
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchPostsForm;
