import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Select, Grid , FormLabel ,RadioGroup , Radio , MenuItem, FormControl, InputLabel,FormControlLabel ,  Checkbox, Button, Container } from '@mui/material';

const validationSchema = Yup.object({
  clientName: Yup.string().required('Client name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  date: Yup.date().required('Date is required'),
  consultantName: Yup.string().required('Consultant name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  totalPrice: Yup.number().min(0, 'Total price must be a positive number').required('Total price is required'),
  type: Yup.array().of(Yup.string()).max(20, 'Must be 20 characters or less').required('Type is Required'),
  approved: Yup.string().max(20, 'Must be 20 characters or less').required('Approved is Required'),
});

const countries = [
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'UK' },
  { value: 'australia', label: 'Australia' },
];

const types = [
  { value: 'type1', label: 'Type 1' },
  { value: 'type2', label: 'Type 2' },
  { value: 'type3', label: 'Type 3' },
];

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      clientName: '',
      address: '',
      country: '',
      type: '',
      date: '',
      consultantName: '',
      email: '',
      approved: false,
      totalPrice: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="md" sx = {{marginTop : 3}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="clientName"
          name="clientName"
          label="Client Name"
          value={formik.values.clientName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.clientName && Boolean(formik.errors.clientName)}
          helperText={formik.touched.clientName && formik.errors.clientName}
          sx = {{marginTop : 2}}
        />

        <TextField
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          sx = {{marginTop : 2}}
        />

        <FormControl fullWidth error={formik.touched.country && Boolean(formik.errors.country)}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx = {{marginTop : 2}}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.country && formik.errors.country && <div>{formik.errors.country}</div>}
        </FormControl>

        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                              <FormLabel component="legend">Type</FormLabel>
                              <Grid container>
                                  <Grid item lg={4}>
                                      <FormControlLabel
                                          value="Direct sales"
                                          control={<Checkbox color="primary" />}
                                          label="Direct sales"
                                          labelPlacement="end"
                                          name="type"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                      />
                                  </Grid>
                                  <Grid item lg={4}>
                                      <FormControlLabel
                                          value="Consultative sales"
                                          control={<Checkbox color="primary" />}
                                          label="Consultative sales"
                                          labelPlacement="end"
                                          name="type"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                      />
                                  </Grid>
                                  <Grid item lg={4}>
                                      <FormControlLabel
                                          value="Request for Proposal"
                                          control={<Checkbox color="primary" />}
                                          label="Request for Proposal"
                                          labelPlacement="end"
                                          name="type"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                      />
                                  </Grid>
                              </Grid>
                              {
                                  formik.touched.type && formik.errors.type && (
                                      <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.type}</div>
                                  )
                              }
                          </FormControl>

        <TextField
          fullWidth
          id="date"
          name="date"
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          sx = {{marginTop : 2}}
        />

        <TextField
          fullWidth
          id="consultantName"
          name="consultantName"
          label="Consultant Name"
          value={formik.values.consultantName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.consultantName && Boolean(formik.errors.consultantName)}
          helperText={formik.touched.consultantName && formik.errors.consultantName}
          sx = {{marginTop : 2}}
        />


        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx = {{marginTop : 2}}
        />

  <FormControl fullWidth sx={{ margin: '10px 0' }}>
                              <FormLabel component="legend">Approved ?</FormLabel>
                              <RadioGroup
                                  aria-label="approved"
                                  name="approved"
                                  value={formik.values.approved}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                  }}
                              >
                                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                  <FormControlLabel value="no" control={<Radio />} label="No" />
                              </RadioGroup>
                              {
                                  formik.touched.approved && formik.errors.approved && (
                                      <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.approved}</div>
                                  )
                              }
                          </FormControl>

        <TextField
          fullWidth
          id="totalPrice"
          name="totalPrice"
          label="Total Price"
          type="number"
          value={formik.values.totalPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.totalPrice && Boolean(formik.errors.totalPrice)}
          helperText={formik.touched.totalPrice && formik.errors.totalPrice}
          sx = {{marginTop : 2}}
        />

        <Button variant="contained" type="submit"  sx = {{marginTop : 2}}>Submit</Button>

      </form>
    </Container>

  )
}

export default SignupPage;