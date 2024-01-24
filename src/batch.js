import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Logo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px' }}>
        <Typography variant="h4">Welcome to Your Website</Typography>
        <p>This is your home page content.</p>
      </div>
    </div>
  );
}

export default App;