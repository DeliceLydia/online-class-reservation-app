import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const AppForm = (props) => {
  const {
    initialValues, children, onSubmit,
  } = props;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {() => <div className="center">{children}</div>}
    </Formik>
  );
};

AppForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppForm;
