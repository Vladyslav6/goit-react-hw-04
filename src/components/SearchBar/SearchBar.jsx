import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const initialValues = {
  query: "",
};

const SearchBar = ({ handleChangeQwery }) => {
  const handleSabmit = (values, options) => {
    // console.log(values);
    handleChangeQwery(values.query);
    if (!values.query) toast.error("The field cannot be empty");
    // values.query.length <= 0
    //   ? toast.error("The field cannot be empty")
    //   : console.log(values);
    options.resetForm();
  };

  return (
    <div className={css.SearchBox}>
      <Formik initialValues={initialValues} onSubmit={handleSabmit}>
        <Form>
          <label>
            {/* <span className={css.SeachSpan}> Search </span> */}
            <Field type="text" name="query" placeholder="Enter Text"></Field>
          </label>
          {/* <FaSearch /> */}
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
