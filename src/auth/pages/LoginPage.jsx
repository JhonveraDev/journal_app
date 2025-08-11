import { Link as RouterLink } from 'react-router-dom'
import { Google, Person } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>

      <form>
        <Grid container direction="column" gap={2}>
          <TextField
            label='Email'
            type='email'
            placeholder='email@yourdomain.com'
            fullWidth
          />

          <TextField
            label='Password'
            type='password'
            placeholder='****'
            fullWidth
          />

          <Grid container width='100%' gap={2}>
            <Button variant='contained' sx={{ flex: 1 }}>
              <Person />
              <Typography sx={{ ml: 1 }}>Login</Typography>
            </Button>
            <Button variant='contained' sx={{ flex: 1 }}>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>Create an Account</Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
