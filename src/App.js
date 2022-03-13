import {Chatbot} from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'; 

import MessageParser from './chat/MessageParser';
import ActionProvider from './chat/ActionProvider';
import config from './chat/config';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx ={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography  variant="h6"  noWrap  component="div"   sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
            Chatbot
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Avatar alt="B" src="/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
    <CardContent >
    <Chatbot sx={{border:'1px solid black',}}
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </CardContent>
    </Grid>
    </div>
    </Provider>
  );
}

export default App;