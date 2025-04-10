import { Field, Form, Formik } from "formik";


const initialValues = {
    userName: "",
    };


const SearchBar = ()=>{
    const handleSabmit = (values, options)=>{
        console.log(values)
        options.resetForm();
    }
   
    return(
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSabmit} >
            <Form>
                <label>
                    <Field type="text" name="userName">

                    </Field>
                </label>
                <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
    )

}
export default SearchBar;