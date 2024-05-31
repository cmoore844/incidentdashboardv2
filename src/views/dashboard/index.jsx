import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
// project imports
import EarningCard from './IncidentCountsCard';
import PopularCard from './ChatBox';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './BlurbDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './DataGridView';
import Footer from 'ui-component/Footer';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Typography } from '@mui/material';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
       <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={6} sm={6} xs={12}>
            <TotalIncomeDarkCard />
          </Grid>
          </Grid>
          </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          </Grid>
          </Grid> */}
          {/* */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {/*DATA GRID VIEW */}
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/*CHATBOX COMPONENT */}
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} md={6} sm={6} xs={12}>
            {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
