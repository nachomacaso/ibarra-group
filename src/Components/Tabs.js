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
      <div>
        <h2 style={styles.headline}>Home</h2>
        <p>
          Short description of IBG
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Projects" style={{background: "#173E45"}}>
        <PhotoGrid/>
    </Tab>
    <Tab label="Services" style={{background: "#173E45"}}>
      <div>
        <h2 style={styles.headline}>Services</h2>
        <p>
          Describe services offered
        </p>
      </div>
    </Tab>
    <Tab label="Contact Us" style={{background: "#173E45"}}>
        <ContactUs/>
    </Tab>
  </Tabs>
);

export default NavigationTabs;