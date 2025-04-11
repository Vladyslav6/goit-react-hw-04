import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

const initialValues = {
  query: "",
};

const SearchBar = ({ handleChangeQwery }) => {
  const handleSabmit = (values, options) => {
    console.log(values);
    handleChangeQwery(values.query);
    values.query.length <= 0
      ? toast.error("The field cannot be empty")
      : console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSabmit}>
        <Form>
          <label>
            <span> Search</span>
            <Field type="text" name="query" placeholder="Enter Text"></Field>
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
