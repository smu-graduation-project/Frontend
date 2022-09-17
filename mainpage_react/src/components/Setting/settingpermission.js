import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button,TextField, InputLabel, MenuItem, Select, FormControl, FormHelperText, SelectChangeEvent } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import UserList from './membersearch';
// import ControllableStates from './AuthrDropdown';

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







const Tables = () => {

  const columns = [
    {
      name: 'name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Id',
      selector: row => row.Id,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true,
    },
    {
      name: 'EmployeeNum',
      selector: row => row.employeenum,
      sortable: true,
    },
    {
      name: 'Authority',
      selector: row => row.authority
      // 
      // selector: row => row.authority,
      // sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <FontAwesomeIcon
          // key={d.title}
          // onClick={handleClick.bind(this, d.title)}
          icon={faPen} />,
        <FontAwesomeIcon
          // key={d.title}
          // onClick={handleClick.bind(this, d.title)}
          icon={faTrashCan} />
      ]
    }
  ];

  const data = [
    {
      id: 1,
      name: 'marko',
      Id: 1,
      contact: "010-0000-0000",
      employeenum: 1111,
      authority: 'admin'
    },
    {
      id: 2,
      name: 'stark',
      Id: 2,
      contact: "010-0000-0000",
      employeenum: 2222
    },
    {
      id: 3,
      name: 'tony',
      Id: 3,
      contact: "010-0000-0000",
      employeenum: 3333
    },
    {
      id: 4,
      name: 'james',
      Id: 4,
      contact: "010-0000-0000",
      employeenum: 4444
    },


  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows />
  )

}




const MiniDrawer = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([]);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const Users = () => {    
      axios.get('/admin/api/v1/member/all') 
      .then(response =>{
        const employeeinfo = response.data.data.map((data)=>{
          return{
            username: 
          }
        })
      });

        return (
          <>
              <h1>Users</h1>
              <UserList users={users}/>
          </>
      );
    }

    
    useEffect(()=>{ Users() },[]);
      console.log("반복중");

    
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
              {[<Link to="/setting">Setting</Link>].map((text, index) => (
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
            <Tables/>
          </Box>
      
        </Box>
    );
}

export default MiniDrawer; 