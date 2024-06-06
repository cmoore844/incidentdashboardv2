import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import PopularCard from './ChatBox';
import TotalIncomeDarkCard from './BlurbDarkCard';
import TotalGrowthBarChart from './DataGridView';
import Footer from 'ui-component/Footer';
import { gridSpacing } from 'store/constant';
import EarningCard from './IncidentCountsCard';

// ==============================|| INDEX.JS ||============================== //

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
             {/*BLURB DARK CARD */}
            <TotalIncomeDarkCard />
          </Grid>
        </Grid>
      </Grid>
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
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
