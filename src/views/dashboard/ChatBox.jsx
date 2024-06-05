import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { TextField, Box, CircularProgress } from '@mui/material';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import EarningCard from './IncidentCountsCard';


// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalIncomeDarkCard from './BlurbDarkCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import { useEffect } from 'react';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
// ==============================|| CHAT BOX COMPONENT ||============================== //

const PopularCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//-------------------------------------------//
  //useState hook to capture the state of what is typed into the text box 
  const [request, setRequest] = useState('');

  //handler function to send the data to API 
  const handleSubmit = async () => {
    try{
      const messageSend = await axios.post("ENDPONT", request);
      console.log("AXIOS RES!", messageSend.data);

    }catch{
      AbortSignal.timeout();
      console.log(err.message);
    }
    console.log("Msg sent!", request)
  }

  //useEffect used to set conditional loading state for API response
  const [isPending, setisPending] = useState(true);

  //state to capture the response from the API
  const [data, setData] = useState();

  //retrieve data from the API will have to be a useEffect with dependency on handleSubmit
  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
    setisPending(false);
    console.log("GET", data);
    }
    useEffect(() => {
      fetchData();
      
    }, [])

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Chat with your Data</Typography>
                    <Typography variant="subtitle2">Powered by Azure OpenAI and Databricks</Typography>
                  </Grid>
                  
          
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="medium"
                      sx={{
                        color: 'primary.200',
                        cursor: 'pointer'
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}>Options</MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              {/*-----CHAT MESSAGE PROMPT WITH BUTTON----*/}
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <TextField 
                  fullWidth 
                  multiline 
                  type="text"
                  rows={5} 
                  placeholder="Ask a question"
                  value = {request}
                  onChange = {(event) => setRequest(event.target.value)}
                  />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 5, pt: 0, justifyContent: 'center' }}>
            <Button size="medium" variant='contained' type="submit" onClick={handleSubmit}>
              Ask
            </Button>
          </CardActions>
          {/*-----CHAT RESPONSE AREA FROM API----*/}
          <Grid item xs={12} sx={{ pt: '16px !important' }}>
            {/* <BajajAreaChartCard /> */}
            <TextField 
                  fullWidth 
                  multiline 
                  type="text"
                  rows={6} 
                  variant="standard"
                  placeholder='response will pop here...'
                  
               
                  />
          </Grid>
          {/*-------------------------------------*/}
          <Grid item xs={12} sx={{ pt: '16px !important' }}>
            <EarningCard />
          </Grid>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
