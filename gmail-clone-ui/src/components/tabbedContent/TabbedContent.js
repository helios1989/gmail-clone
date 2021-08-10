import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import StayPrimaryPortraitIcon from '@material-ui/icons/StayPrimaryPortrait';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './TabbedContent.css';


//component
import MailMessage from '../mailMessage/MailMessage';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabbedContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Paper square className="tabbedContent">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<StayPrimaryPortraitIcon />} label="Primary" {...a11yProps(0)}  />
        <Tab icon={<PeopleIcon />} label="Socials" {...a11yProps(1)} />
        <Tab icon={<LocalOfferIcon />} label="Promotions"{...a11yProps(2)}  />
      </Tabs>

    </Paper>
    <div className="tabbedPanel">
        <TabPanel value={value} index={0}>
            <MailMessage/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item two
            <MailMessage/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item three
            <MailMessage/>
        </TabPanel>
    </div>
    </>
  );
}
