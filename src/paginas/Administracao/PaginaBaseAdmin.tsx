import { AppBar, Box, Button, Typography, Container, Link, Paper } from "@mui/material";
import { Link as RouterLink, Outlet } from 'react-router-dom'

const PaginaBaseAdmin = () => {

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography variant="h6">
            Administração
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Link component={RouterLink} to="/admin/restaurantes">
              <Button sx={{ my: 2, color: 'white' }}>
                Restaurantes
              </Button>
            </Link>
            <Link component={RouterLink} to="/admin/restaurantes/novo">
              <Button sx={{ my: 2, color: 'white' }}>
                Novo Restaurantes
              </Button>
            </Link>
            <Link component={RouterLink} to="/admin/pratos">
              <Button sx={{ my: 2, color: 'white' }}>
                pratos
              </Button>
            </Link>
            <Link component={RouterLink} to="/admin/pratos/novo">
              <Button sx={{ my: 2, color: 'white' }}>
                Novo Pratos
              </Button>
            </Link>
          </Box>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            {/* Conteudo da pagina */}
            <Outlet></Outlet>

          </Paper>

        </Container>
      </Box>


    </>
  )
}

export default PaginaBaseAdmin