import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Details_img from './Details_img.js';
import Details from './Details';

import NodeTab_Temp from '../Battery/Site1_battery/NodeTab_Temp.js';
import NodeTab_Elec from '../Battery/Site1_battery/NodeTab_Elec.js';
import NodeTab_Volt from '../Battery/Site1_battery/NodeTab_Volt.js';

import Calendar_menu from './Calendar_menu.js';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({name, nodePort}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        상세정보
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {name} 상세정보
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>
        <Box component="main" sx={{ flexGrow: 1, p: 6, m: 6, }}>

{/* Recent Deposits */}
  <Grid item xs={12} md={4} lg={3}>
     <Paper
       sx={{
         p: 2,
         display: 'flex',
         flexDirection: 'row',
         height: 400,
       }}
       >
         <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 350,
         }}
       >
           <Details_img />
           
         </Paper>
         <div> </div>
         <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 350,
         }}
       >
           <Details />
           <div>　 </div>
            <Calendar_menu />
           <div> 　 </div>
         </Paper>
       
     </Paper>
   </Grid>
   <NodeTab_Temp name={name+"TempChart"} url="" nodePort={nodePort} />
   <div>　</div>
   <NodeTab_Elec name={name+"ElecChart"} url="" nodePort={nodePort} />
   <div>　</div>
   <NodeTab_Volt name={name+"VoltChart"} url="" nodePort={nodePort} />
   
   <div>　</div>
</Box>

        </List>
      </Dialog>
    </div>
  );
}