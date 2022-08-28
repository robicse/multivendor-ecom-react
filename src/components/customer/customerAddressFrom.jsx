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
    address: yup.string().required("required"),
    country: yup.string().required("required"),
    city: yup.string().required("required"),
    postal_code: yup.number().required("required"),
    phone: yup.string().required("required"),
  });

  const initialValues = {
    address: "UI Lib",
    country: "Bangladesh",
    city: "Sylhet",
    country: "Bangladesh",
    postal_code: 4336,
    phone: "01789123456",
  }; // ==================================================================
  
  // ==================================================================
  const NewAddressForm = () => {
    
    const { handleChange, handleSubmit, errors, touched, values } = useFormik({
      initialValues: initialValues,
      validationSchema: checkoutSchema,
      onSubmit: (values, { resetForm }) => {
          console.log(values)
        // if (values) {
          
        //   resetForm(initialValues);
        // }
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
                    name="address"
                    value={values.address}
                    label="Enter Your Address"
                    onChange={handleChange}
                    helperText={touched.address && errors.address}
                    error={touched.address && Boolean(errors.address)}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={values.country}
                    onChange={handleChange}
                    helperText={touched.country && errors.country}
                    error={touched.country && Boolean(errors.country)}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    helperText={touched.city && errors.city}
                    error={touched.city && Boolean(errors.city)}
                  />
                </Grid>
  

  
  
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="zip"
                    label="Zip"
                    type="number"
                    value={values.zip}
                    onChange={handleChange}
                    helperText={touched.zip && errors.zip}
                    error={touched.zip && Boolean(errors.zip)}
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
  
  export default NewAddressForm;
  