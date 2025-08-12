import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      {/* Navbar */}

      {/* Sidebar */}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}
