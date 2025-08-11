import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
    >
      <Grid
        className='box-shadow'
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: '100%',
          maxWidth: 450
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>
        {children}
      </Grid>
    </Grid>
  )
}
