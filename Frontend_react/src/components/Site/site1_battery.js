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
              Site1 Battery List
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Site 정보</Button>
              <Button variant="outlined">Site 수정</Button>
              <Button href='/setting/addbattery' variant="outlined">Battery 추가</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
              <Tab label="List" {...a11yProps(0)} />
              {/*<Tab label="Electric Power" {...a11yProps(1)} />
              <Tab label="Voltage" {...a11yProps(2)} />*/}
            </Tabs>
          </Box>

{/* 온도 탭 */}
          <TabPanel value={value} index={0}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 1 <Button href="/site1/battery1">상세 정보</Button>
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 2
                </Typography>
              </CardContent>
            </Paper>
            </Grid>
          <div>　</div>

          {/*<Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 3
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 4
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
            <div>　</div>*/}
          </TabPanel>

{/* 전력 탭 */}
          <TabPanel value={value} index={1}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 1 <Button href="/site1/battery1">상세 정보</Button>
                </Typography>
                
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 2
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 3
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 4
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>
          </TabPanel>

{/* 전압 탭 */}
          <TabPanel value={value} index={2}>
            <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 1 <Button href="/site1/battery1">상세 정보</Button>
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 2
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 3
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 100,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Battery 4
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
          <div>　</div>
          </TabPanel>

        </Container>
      </main>
    </ThemeProvider>
  );
}