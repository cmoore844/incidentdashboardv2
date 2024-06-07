import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';

// material-ui
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import EarningCard from './IncidentCountsCard';


// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

// ==============================|| CHAT BOX COMPONENT ||============================== //

const PopularCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//---------------------------------------------------------------------------------------//
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
              {/*-----IFRAME FOR STREAMLIT APPLICATION----*/}
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                  <iframe 
                    src="https://30days.streamlit.app?embed=true"
                    title='embedded_application' 
                    height='600px' 
                    width='450px'>
                    
                  </iframe>
              </Grid>
              {/*--------------------------------------------*/}
            </Grid>
          </CardContent>
          {/*-----UNIQUE NUMBER OF ROWS OF DATA PRESENT----*/}
          <Grid item xs={12} sx={{ pt: '16px !important' }}>
            <EarningCard />
          </Grid>
          {/*--------------------------------------------*/}
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
