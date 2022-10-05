import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContent from '@mui/material/CardContent';

import NodeTab_Temp from './NodeTab_Temp';
import NodeTab_Elec from './NodeTab_Elec';
import NodeTab_Volt from './NodeTab_Volt';
import NodeTab_RT from './NodeTab_RT';
import MiniDrawer from '../../Node/node1';
import NodeDet from '../../Node/node';



import ApexCharts from 'apexcharts';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme();

export default function Site1_battery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Battery1 Node List
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Battery 정보</Button>
              <Button variant="outlined">Battery 수정</Button>
              
              <Button href='/setting/searchnode' variant="outlined">Node 검색</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
              <Tab label="Real Time" {...a11yProps(0)} />
              {/*<Tab label="Electric Power" {...a11yProps(1)} />
              <Tab label="Voltage" {...a11yProps(2)} />*/}
            </Tabs>
          </Box>

{/* 온도 탭 */}
          <TabPanel value={value} index={0}>

          
          <NodeTab_RT name="Node 1" url="" nodePort={1} />
          
          <div>　</div>
              
          <NodeTab_RT name="Node 2" url="2" nodePort={2} />

          <div>　</div>
          <NodeTab_RT name="Node 3" url="3" nodePort={3} />

          <div>　</div>

          <NodeTab_RT name="Node 4" url="4" nodePort={4} />

          <div>　</div>

          </TabPanel>

{/* 전력 탭 
          <TabPanel value={value} index={1}>

          <NodeTab_Elec name="Node 1" url="/site1/node1" nodePort={1} />

          <div>　</div>

          <NodeTab_Elec name="Node 2" url="/site1/node1" nodePort={2} />

          <div>　</div>

          <NodeTab_Elec name="Node 3" url="/site1/node1" nodePort={3} />

          <div>　</div>

          <NodeTab_Elec name="Node 4" url="/site1/node1" nodePort={4} />
          
          <div>　</div>

          </TabPanel>


          <TabPanel value={value} index={2}>

          <NodeTab_Volt name="Node 1" url="/site1/node1" nodePort={1} />

          <div>　</div>

          <NodeTab_Volt name="Node 2" url="/site1/node1" nodePort={2} />
         
          <div>　</div>

          <NodeTab_Volt name="Node 3" url="/site1/node1" nodePort={3} />
          
          
          <div>　</div>

          <NodeTab_Volt name="Node 4" url="/site1/node1" nodePort={4} />
          
          <div>　</div>
          </TabPanel>*/}

        </Container>
      </main>
    </ThemeProvider>
  );
}