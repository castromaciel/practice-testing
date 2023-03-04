import { Box, Typography } from '@mui/material'
import './App.scss'
import { LoginForm } from './pages'

const App = () => (
  <Box
    className="App"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Typography variant="h2" mb="20px" textAlign="center">
      Testing class
    </Typography>
    <LoginForm />
  </Box>
)

export default App
