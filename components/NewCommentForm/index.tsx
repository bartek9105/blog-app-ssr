import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Textarea from "../Textarea/Textarea";
import { isEmpty } from "lodash";

type NewCommentFormProps = {
  onSubmit: (values: any) => void;
};

const NewCommentForm = ({ onSubmit }: NewCommentFormProps) => {
  return (
    <Formik
      initialValues={{ content: "" }}
      validationSchema={Yup.object({
        content: Yup.string().required("Content is required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form>
          <Field
            name="content"
            type="text"
            as={Textarea}
            error={errors.content}
          />
          <Button
            disabled={!isEmpty(errors)}
            type="submit"
            className="bg-yellow-400"
            variant="primary"
          >
            Add comment
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewCommentForm;
