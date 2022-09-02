import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
    Box
  } from "@mui/material";
  import { useFormik } from "formik";
  import React, { Fragment, useState } from "react";
  import * as yup from "yup";

  const checkoutSchema = yup.object({
    name: yup.string().required("required"),
    // country: yup.string().required("required"),
    email: yup.string().required("required"),
    phone: yup.string().required("required"),
  });

 // ==================================================================
  
  // ==================================================================
  const NewProfile = ({editAddressSubmitHandle, editData}) => {
    
    const initialValues = {
      name: editData?.name,
      email: editData?.email,
      phone:editData?.phone,
       
      };

    const { handleChange, handleSubmit, errors, touched, values } = useFormik({
      initialValues: initialValues,
      validationSchema: checkoutSchema,
      onSubmit: (values, { resetForm }) => {
          console.log(values)
        if (values) {
            editAddressSubmitHandle(values)
            resetForm(initialValues);
        }
      },
    });
    return (
      <Fragment>
            <Box mt={4}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="name"
                    value={values.name}
                    label="Enter Your Name"
                    onChange={handleChange}
                    helperText={touched.name && errors.name}
                    error={touched.name && Boolean(errors.name)}
                  />
                </Grid>
                {/* <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={values.country}
                    onChange={handleChange}
                    helperText={touched.country && errors.country}
                    error={touched.country && Boolean(errors.country)}
                  />
                </Grid> */}
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="email"
                    label="email"
                    value={values.email}
                    onChange={handleChange}
                    helperText={touched.email && errors.email}
                    error={touched.email && Boolean(errors.email)}
                  />
                </Grid>
  

  
                <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  label="Enter Your Phone"
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>

                <Grid item sm={6} xs={12}>

                </Grid>
  
                <Grid item sm={6} xs={12}>
                  <Button color="primary" variant="contained" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
            </Box>
      </Fragment>
    );
  };
  
  export default NewProfile;
  