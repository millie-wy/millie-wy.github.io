import { LoadingButton } from "@mui/lab";
import { Box, FormGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "./ContactFormValidationSchema";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    validationSchema: validationSchema,
    validationOnMount: true,
  });

  const handleSubmit = async (values, resetForm) => {
    setIsSending(true);
    const { name, email, message } = values;
    let mail = {
      name: name,
      email: email,
      message: message,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(mail),
    });
    if (response.ok) resetForm();
    setIsSending(false);
    let result = await response.json();
    setStatus(result.status);
    setInterval(() => setStatus(), 2000);
  };

  return status ? (
    <Box
      sx={{
        background: "rgb(255,255,255,.9)",
        width: { xs: "80%", sm: "70%", md: 500 },
        minWidth: 220,
        maxWidth: 500,
        height: 200,
        margin: "auto",
        borderRadius: "4px",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        textAlign: "center",
        mt: "1rem",
        mb: "2rem",
      }}
    >
      {/* {status} */}
      Your message has been sent!
    </Box>
  ) : (
    <FormGroup
      onSubmit={formik.handleSubmit}
      sx={{
        background: "rgb(255,255,255,.9)",
        width: { xs: "80%", sm: "70%", md: 500 },
        minWidth: 220,
        maxWidth: 500,
        margin: "auto",
        borderRadius: "4px",
        p: "30px",
        mt: "1rem",
        mb: "2rem",
        rowGap: { xs: "1.5rem", sm: "1.5rem", md: "1rem" },
      }}
    >
      <Box
        fullWidth
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          columnGap: "1rem",
          rowGap: { xs: "1.5rem", sm: "1.5rem", md: "1rem" },
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputLabelProps={{
            style: {
              fontSize: ".9rem",
              fontFamily: "Montserrat",
              color: "#B4CEE5",
            },
          }}
          InputProps={{
            style: {
              fontSize: ".8rem",
              fontFamily: "Montserrat",
              color: "#3c3c3c",
            },
            disableUnderline: true,
            sx: { borderBottom: "1px solid #B4CEE5" },
          }}
          FormHelperTextProps={{
            style: {
              fontSize: ".7rem",
              fontFamily: "Montserrat",
              color: "#6ca8ca",
            },
          }}
        />
        <TextField
          fullWidth
          variant="standard"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputLabelProps={{
            style: {
              fontSize: ".9rem",
              fontFamily: "Montserrat",
              color: "#B4CEE5",
            },
          }}
          InputProps={{
            style: {
              fontSize: ".8rem",
              fontFamily: "Montserrat",
              color: "#3c3c3c",
            },
            disableUnderline: true,
            sx: { borderBottom: "1px solid #B4CEE5" },
          }}
          FormHelperTextProps={{
            style: {
              fontSize: ".7rem",
              fontFamily: "Montserrat",
              color: "#6ca8ca",
            },
          }}
        />
      </Box>
      <TextField
        multiline
        minRows={3}
        variant="standard"
        id="message"
        name="message"
        label="Message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        InputLabelProps={{
          style: {
            fontSize: ".9rem",
            fontFamily: "Montserrat",
            color: "#B4CEE5",
          },
        }}
        InputProps={{
          style: {
            fontSize: ".8rem",
            fontFamily: "Montserrat",
            color: "#3c3c3c",
          },
          disableUnderline: true,
          sx: { borderBottom: "1px solid #B4CEE5" },
        }}
        FormHelperTextProps={{
          style: {
            fontSize: ".7rem",
            fontFamily: "Montserrat",
            color: "#6ca8ca",
          },
        }}
      />
      <LoadingButton
        size="small"
        variant="contained"
        loading={isSending}
        disabled={isSending}
        loadingIndicator="Submitting..."
        type="submit"
        onClick={formik.handleSubmit}
        sx={{
          fontFamily: "Montserrat",
          background: "#B4CEE5",
          width: 110,
          m: "auto",
          mt: "1rem",
          transition: "all .15s ease-in-out",
          boxShadow: "none",
          "&:hover": {
            background: "#6ca8ca",
            transform: "scale(1.01)",
            boxShadow: "none",
          },
        }}
      >
        Submit
      </LoadingButton>
    </FormGroup>
  );
};

export default ContactForm;
