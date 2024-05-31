import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: '#00283C',
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalIncomeDarkCard = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemText
                  sx={{ py: 0, my: 0.45 }}
                  primary={
                    <Typography variant="body2" textAlign='center' sx={{ color: '#fff' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Rutrum quisque non tellus orci ac auctor augue. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. 
                      Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. 
                      Eget nunc scelerisque viverra mauris in aliquam sem. 
                      Cum sociis natoque penatibus et magnis dis parturient montes nascetur. 
                      Consectetur a erat nam at lectus urna. A cras semper auctor neque vitae tempus quam pellentesque nec. 
                      Arcu cursus euismod quis viverra nibh cras pulvinar. Nullam non nisi est sit amet facilisis magna etiam. 
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle1" textAlign='right' sx={{ color: 'primary.light', mt: 0.25 }}>
                      - Evergreen Professional Services
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalIncomeDarkCard;
