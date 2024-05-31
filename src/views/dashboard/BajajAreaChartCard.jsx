import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import chartData from './chart-data/bajaj-area-chart';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
  const theme = useTheme();
  const orangeDark = theme.palette.secondary[800];

  const customization = useSelector((state) => state.customization);
  const { navType } = customization;

  React.useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: { theme: 'light' }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [navType, orangeDark]);

  return (
    <Card sx={{ bgcolor: '#F2F2F' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: '#00283C' }}>
                Ticket Volume
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: '#00283C' }}>
            6 Months
          </Typography>
        </Grid>
      </Grid>
      <Chart {...chartData} />
    </Card>
  );
};

export default BajajAreaChartCard;
