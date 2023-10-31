import {
  StyledHeader,
  StyledSearchForm,
  StyledFormButton,
  StyledFormInput,
} from './Searchbar.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

let userSchema = yup.object().shape({
  query: yup.string(),
});

export const Searchbar = ({ onSubmit }) => {
  const notifyEmtySearch = () =>
    toast.warn(`Search shouldn't be empty`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const submitHandler = (values, action) => {
    if (values.query.trim() === '') {
      notifyEmtySearch();
      return;
    }

    onSubmit(values);
    action.resetForm();
  };

  return (
    <StyledHeader>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={userSchema}
        onSubmit={submitHandler}
      >
        <StyledSearchForm>
          <StyledFormButton type="submit">
            <span>Search</span>
          </StyledFormButton>

          <StyledFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="query" component="div" />
        </StyledSearchForm>
      </Formik>
    </StyledHeader>
  );
};
