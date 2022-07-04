import * as React from 'react';
import { Link } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Administrator Function
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
        < SearchIcon/>
        </ListItemIcon>
        <Button href="/">정보 수정</Button>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        < SearchIcon/>
        </ListItemIcon>
        <Button href='/setting/settingpermission'>권한 설정</Button>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        < SearchIcon/>
        </ListItemIcon>
        <Button>기능 추가</Button>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <SendIcon />
            </ListItemIcon>
            <Button href='/setting/addsite'>Site</Button>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <SendIcon />
            </ListItemIcon>
            <Button href='/setting/addbattery'>Battery</Button>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <SendIcon />
            </ListItemIcon>
            <Button href='/setting/addnode'>Node</Button>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
