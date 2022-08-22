import { Card } from "@mui/material";
import axios from 'axios'
import Router from 'next/router'
import { styled } from "@mui/material/styles";
import BazarButton from "components/BazarButton";
import BazarTextField from "components/BazarTextField";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import SocialButtons from "./SocialButtons";
import useAuth from "hooks/useAuth";


const fbStyle = {
  background: "#3B5998",
  color: "white",
};
const googleStyle = {
  background: "#4285F4",
  color: "white",
};
export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle,
  },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

const Login = () => {
  const {logout, isAuthenticated, login} = useAuth()
  console.log(isAuthenticated, login)
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  // const [defaulLoginUser, setDefaulLoginUser] = useState(null)

const initialValues = {phone: '', password: ''}

const handleDefaulLogin = (type, setFieldValue) =>{
  console.log(type)
  if(type === 'seller'){
    setFieldValue('phone','seller1@gmail.com')
    setFieldValue('password','123456')
  }
  if(type === 'customer'){
    setFieldValue('phone','emon@gmail.com')
    setFieldValue('password','123456')
  }
  if(type === 'default'){
    setFieldValue('phone','')
    setFieldValue('password','')
  }
}
// console.log(initialValues, 'df')
const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  phone: yup.string().required("Phone is required"),
});

  const handleFormSubmit = async (values) => {
    const result = await login({...values, email: values.phone})
    if(result && result?.user.type == 'customer'){
      Router.push('/profile')
    }
    if(result && result?.user.type == 'seller'){
        Router.push('/vendor/dashboard')
    }
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Welcome To Ecommerce
        </H3>
        <Small
          mb={4.5}
          display="block"
          fontSize="12px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          Log in with phone & password
        </Small>

        <BazarTextField
          mb={1.5}
          fullWidth
          name="phone"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          label="Phone Number"
          placeholder="123*******"
          error={!!touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <BazarTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="Password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <BazarButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            mb: "1.65rem",
            height: 44,
          }}
        >
          Login
        </BazarButton>
      </form>

      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Demo login as a</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e)=>handleDefaulLogin(e.target.value,setFieldValue)}
        >
          <FormControlLabel value="default" control={<Radio />} label="Default" />
          <FormControlLabel value="customer" control={<Radio />} label="Customer" />
          <FormControlLabel value="seller" control={<Radio />} label="Seller" />
        </RadioGroup>
      </FormControl>

      <SocialButtons redirect="/signup" redirectText="Sign Up" />
    </Wrapper>
  );
};

const initialValues = {
  phone: "",
  password: "",
};
const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  phone: yup.string().required("Phone is required"),
});
export default Login;
