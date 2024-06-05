// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

// project imports
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON - POPULAR CARD ||============================== //

const PopularCard = () => (
  <Card>
    <CardContent>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs zeroMinWidth>
              <Skeleton variant="rectangular" height={20} />
            </Grid>
            {/*  */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                    <Grid item xs zeroMinWidth>
                      <Skeleton variant="rectangular" height={20} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12}>
          <Grid container spacing={1}>   
            <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} />
        </Grid>
          </Grid>
        </Grid>
        
        
      </Grid>
    </CardContent>
    
  </Card>
);

export default PopularCard;
