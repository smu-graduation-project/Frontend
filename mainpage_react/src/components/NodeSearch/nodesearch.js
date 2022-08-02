// import React from 'react';
// import { Link } from "react-router-dom";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HomeIcon from '@mui/icons-material/Home';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SearchIcon from '@mui/icons-material/Search';
// import { Button,TextField, InputLabel, MenuItem, Select, FormControl, FormHelperText, SelectChangeEvent } from "@mui/material";


// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );

// const Node_search = (props) => {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const [type, setType] = React.useState('');
//     const t_handleChange = (event: SelectChangeEvent) =>{
//         setType(event.target.value);
//     };

//     const [sort, setSort] = React.useState('');
//     const s_handleChange = (event: SelectChangeEvent) => {
//         setSort(event.target.value);
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{
//                             marginRight: 5,
//                             ...(open && { display: 'none' }),
//                         }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Lora IoT Management System
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                 <Divider />

//                 <List>
//                     {[<Link to="/login">USER1</Link>, <Link to="/">Main</Link>, <Link to="/site1">Site1</Link>].map((text, index) => (
//                         <ListItemButton
//                             key={text}
//                             sx={{
//                                 minHeight: 48,
//                                 justifyContent: open ? 'initial' : 'center',
//                                 px: 2.5,
//                             }}
//                         >
//                             <ListItemIcon
//                                 sx={{
//                                     minWidth: 0,
//                                     mr: open ? 3 : 'auto',
//                                     justifyContent: 'center',
//                                 }}
//                             >

//                                 {index === 0 ? <AccountCircleIcon /> : null}
//                                 {index === 1 ? < HomeIcon /> : null}
//                                 {index === 2 ? < SearchIcon /> : null}
//                                 {index === 3 ? < LocationOnIcon /> : null}
//                             </ListItemIcon>

//                             <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                         </ListItemButton>
//                     ))}
//                 </List>

//                 <Divider />

//                 <List>
//                     {[<Link to="/setting">Setting</Link>].map((text, index) => (
//                         <ListItemButton
//                             key={text}
//                             sx={{
//                                 minHeight: 48,
//                                 justifyContent: open ? 'initial' : 'center',
//                                 px: 2.5,
//                             }}
//                         >
//                             <ListItemIcon
//                                 sx={{
//                                     minWidth: 0,
//                                     mr: open ? 3 : 'auto',
//                                     justifyContent: 'center',
//                                 }}
//                             >
//                                 {index === 0 ? <SettingsIcon /> : null}
//                             </ListItemIcon>
//                             <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                         </ListItemButton>
//                     ))}
//                 </List>
//             </Drawer>

//             <Box component="main" sx={{ flexGrow: 1, p: 6, m: 6, }}>
//                 <div classname="MainContainer">
//                     <div classname="UpperSearchContainer">
//                         <FormControl sx={{ m: 1, minWidth: 120 }}>
//                             <InputLabel id="selecttype">type</InputLabel>
//                             <Select
//                                 labelId="selecttype"
//                                 id="selecttype"
//                                 value={type}
//                                 label="type"
//                                 onChange={t_handleChange}
//                             >
//                                 <MenuItem value={0}>nodename</MenuItem>
//                                 <MenuItem value={10}>temperature</MenuItem>
//                                 <MenuItem value={20}>voltage</MenuItem>
//                                 <MenuItem value={30}>electric-power</MenuItem>
//                             </Select>
//                             <FormHelperText></FormHelperText>
//                         </FormControl> 
//                         <TextField sx={{ m: 1, minWidth: 120 }} id="inputsearch" label="노드명" variant="outlined"></TextField>            
//                         <FormControl sx={{ m: 1, minWidth: 120 }}>
//                             <InputLabel id="">sort</InputLabel>
//                             <Select
//                                 labelId="selectsort"
//                                 id="selectsort"
//                                 value={sort}
//                                 label="sort"
//                                 onChange={s_handleChange}
//                             >
//                                 <MenuItem value="">
//                                     <em>None</em>
//                                 </MenuItem>
//                                 <MenuItem value={10}>오름차순</MenuItem>
//                                 <MenuItem value={20}>내림차순</MenuItem>
//                             </Select>
//                         </FormControl>
//                         <Button sx={{ m: 2, minWidth: 90 }} variant="contained">search</Button>
//                     </div>
//                     <div classname="DownerListContainer">
//                                 <div className="nodelist">
//                                     <nodelisttable />

//                                 </div>
//                     </div>
//                 </div>
//             </Box>
//         </Box >
//     );

// }
// export default Node_search;



