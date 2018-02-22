import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import PhotoGrid from './PhotoGrid';
import ContactUs from './Contact';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
};

const NavigationTabs = () => (
  <Tabs>
    <Tab label="Home" style={{background: "#173E45"}}>
      <div style={{padding: "20px"}}> 
        <h2 style={styles.headline}>Home</h2>
        <p>
          Ask Bobby for a short description of IBG. Ask for any content/pictures that he might want on home tab.
        </p>
      </div>
    </Tab>
    <Tab label="Projects" style={{background: "#173E45"}}>
        <PhotoGrid/>
    </Tab>
    <Tab label="Services" style={{background: "#173E45"}}>
      <div style={{padding: "20px"}}>
        <h2 style={styles.headline}>Services</h2>
        <p>
          Describe services offered and add pricing if necessary.
        </p>
      </div>
    </Tab>
    <Tab label="Contact Us" style={{background: "#173E45"}}>
        <ContactUs/>
    </Tab>
  </Tabs>
);

export default NavigationTabs;