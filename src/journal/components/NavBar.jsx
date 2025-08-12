import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';


export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <Grid
          container
          width='100%'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color='inherit'
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuOutlined />
            </IconButton>

            <Typography variant='h6' noWrap component='div'>
              JournalApp
            </Typography>
          </Grid>

          <Grid item>
            <IconButton color='error'>
              <LogoutOutlined />
            </IconButton>
          </Grid>

        </Grid>
      </Toolbar>

    </AppBar>
  )
}