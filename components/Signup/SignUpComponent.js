import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  Card,
  TextField,
  Container,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  FormHelperText,
} from '@mui/material';

const phoneRegex = new RegExp(/^\d+$/);

const validationSchema = yup.object({
  orgType: yup
    .string()
    .oneOf(['School', 'Retirement Home'])
    .required('Organisation type is required'),
  orgName: yup
    .string('Enter your organisation name')
    .required('Organisation name is required'),
  contactName: yup
    .string('Enter your contact name')
    .required('Contact name is required'),
  contactEmail: yup
    .string('Enter your contact email')
    .email('Enter a valid email')
    .required('Contact email is required'),
  contactNumber: yup
    .string('Please enter your phone number')
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Login email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function SignUpComponent() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      orgType: '',
      orgName: '',
      contactName: '',
      contactEmail: '',
      contactNumber: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      setLoading(true);
      signUp();
    },
  });

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      );

      const data = {
        UID: user.user.uid,
        'Login Email': formik.values.email,
        'Organisation Type': formik.values.orgType,
        'Organisation Name': formik.values.orgName,
        'Primary Contact Email': formik.values.contactEmail,
        'Primary Contact Name': formik.values.contactName,
        'Primary Contact Phone': formik.values.contactNumber,
      };

      await fetch('/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json());
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Card
          sx={{
            minWidth: 275,
            marginTop: 8,
            marginBottom: 8,
            padding: 5,
            borderRadius: 3,
            mt: 5,
          }}
          variant="outlined"
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <Typography
                component="h1"
                variant="h5"
                sx={{ mb: 1, textAlign: 'center' }}
              >
                Sign up
              </Typography>

              <Box>
                <FormControl
                  fullWidth
                  helperText={formik.touched.orgType && formik.errors.orgType}
                  error={
                    formik.touched.orgType && Boolean(formik.errors.orgType)
                  }
                >
                  <InputLabel required hidden htmlFor="Organisation Type">
                    Organisation Type
                  </InputLabel>
                  <Select
                    fullWidth
                    id="orgType"
                    name="orgType"
                    label="Organisation Type"
                    value={formik.values.orgType}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={'School'}>School</MenuItem>
                    <MenuItem value={'Retirement Home'}>
                      Retirement Home
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    {formik.touched.orgType && formik.errors.orgType}
                  </FormHelperText>
                </FormControl>
              </Box>

              <Box>
                <label hidden htmlFor="Organisation Name">
                  Organisation Name
                </label>
                <TextField
                  fullWidth
                  id="orgName"
                  name="orgName"
                  label="Organisation Name"
                  value={formik.values.orgName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.orgName && Boolean(formik.errors.orgName)
                  }
                  helperText={formik.touched.orgName && formik.errors.orgName}
                />
              </Box>

              <Box>
                <label hidden htmlFor="Contact Name">
                  Primary Contact Name
                </label>
                <TextField
                  fullWidth
                  id="contactName"
                  name="contactName"
                  label="Contact Name"
                  value={formik.values.contactName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contactName &&
                    Boolean(formik.errors.contactName)
                  }
                  helperText={
                    formik.touched.contactName && formik.errors.contactName
                  }
                />
              </Box>

              <Box>
                <label hidden htmlFor="Contact Email">
                  Primary Contact Email
                </label>
                <TextField
                  fullWidth
                  id="contactEmail"
                  name="contactEmail"
                  label="Contact Email"
                  value={formik.values.contactEmail}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contactEmail &&
                    Boolean(formik.errors.contactEmail)
                  }
                  helperText={
                    formik.touched.contactEmail && formik.errors.contactEmail
                  }
                />
              </Box>

              <Box>
                <label hidden htmlFor="Contact Number">
                  Primary Contact Number
                </label>
                <TextField
                  fullWidth
                  id="contactNumber"
                  name="contactNumber"
                  label="Contact Number"
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contactNumber &&
                    Boolean(formik.errors.contactNumber)
                  }
                  helperText={
                    formik.touched.contactNumber && formik.errors.contactNumber
                  }
                />
              </Box>

              <Box>
                <label hidden htmlFor="email">
                  Login Email
                </label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Login Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>

              <Box>
                <label hidden htmlFor="password">
                  Password
                </label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>

              <Button
                fullWidth
                variant="outlined"
                sx={{ padding: 1.85, borderRadius: 2 }}
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </Stack>
          </form>
        </Card>
      </Container>
    </>
  );
}
