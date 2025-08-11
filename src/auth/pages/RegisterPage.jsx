import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Login'>

      <form>
        <Grid container direction="column" gap={2}>
          <TextField
            label='Full Name'
            type='text'
            placeholder='Your full name'
            fullWidth
          />

          <TextField
            label='Phone'
            type='number'
            placeholder='Your phone number'
            fullWidth
          />

          <TextField
            label='Email'
            type='enail'
            placeholder='email@yourdomain.com'
            fullWidth
          />

          <TextField
            label='Password'
            type='password'
            placeholder='****'
            fullWidth
          />

          <Grid container>
            <Button variant='contained' sx={{ flex: 1 }}>
              Create account
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 2 }}>Do you have an accout?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>Login</Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
