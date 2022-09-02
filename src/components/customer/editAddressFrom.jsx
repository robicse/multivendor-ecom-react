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
    // country: yup.string().required("required"),
    city: yup.string().required("required"),
    postal_code: yup.number().required("required"),
    phone: yup.string().required("required"),
  });

 // ==================================================================
  
  // ==================================================================
  const NewAddressForm = ({editAddressSubmitHandle, editData}) => {
    
    const initialValues = {
        id: editData?.id,
        address: editData?.address,
        city:editData?.city,
        postal_code: editData?.postal_code,
        phone: editData?.phone,
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
                    name="address"
                    value={values.address}
                    label="Enter Your Address"
                    onChange={handleChange}
                    helperText={touched.address && errors.address}
                    error={touched.address && Boolean(errors.address)}
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
                    name="postal_code"
                    label="Postal Code"
                    type="number"
                    value={values.postal_code}
                    onChange={handleChange}
                    helperText={touched.zip && errors.postal_code}
                    error={touched.postal_code && Boolean(errors.postal_code)}
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
  