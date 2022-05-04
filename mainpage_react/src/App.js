/*function App() {
  return (
    <header>
      <div>
        <div className="div-right">
          <h1>Lora IoT Management System</h1>
          <div className='div-mapbox'>
            <Map />;
          </div>
        </div>

        <div className="div-left">
          <ul>
              <li><Button variant="contained" startIcon={<AccountCircleIcon></AccountCircleIcon>}>USER A</Button></li>
              <li><Button variant="contained" startIcon={<HomeIcon></HomeIcon>}>MAIN</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE1</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE2</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE3</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE4</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE5</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE6</Button></li>
          </ul>
        </div>
        

      </div>
    </header>
  );
}
export default App;*/

/*global kakao*/ 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Loginpage from "./components/Loginpage/loginpage"
import Mainpage from "./components/Mainpage/mainpage"
import Map from './components/Mainpage/Map';
import Site from "./components/Site/site1"
import Battery from "./components/Battery/battery1"
import Node from "./components/Node/node1"
import Setting from "./components/Setting/setting"

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Lora IoT Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {[<Link to="/login">USER1</Link>,<Link to="/">Main</Link>,<Link to="/site1">Site1</Link>].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  
                  {index === 0 ? <AccountCircleIcon /> : null}
                  {index === 1 ? < HomeIcon/> : null}
                  {index === 2 ? < SearchIcon/> : null}
                  {index === 3 ? < LocationOnIcon/> : null}
                </ListItemIcon>
                
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            ))}
          </List>

          <Divider />
          
          <List>
            {[<Link to="/">Setting</Link>].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <SettingsIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 6, m: 6, }}>
          <Map />
        </Box>
      </Box>
  );
}

export default function App() {
  MiniDrawer()

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Mainpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/site1" element={<Site/>}/>
          <Route path="/battery1" element={<Battery/>}/>
          <Route path="/node1" element={<Node/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Routes>
      </div>
    </Router>
  );
}
