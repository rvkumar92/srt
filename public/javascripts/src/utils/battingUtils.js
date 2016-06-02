import React from 'react';
import Australia from '../components/versus/Australia';
import Bangladesh from '../components/versus/Bangladesh';
import Bermuda from '../components/versus/Bermuda';
import England from '../components/versus/England';
import Ireland from '../components/versus/Ireland';
import Kenya from '../components/versus/Kenya';
import Namibia from '../components/versus/Namibia';
import Netherland from '../components/versus/Netherland';
import NewZealand from '../components/versus/NewZealand';
import Pakistan from '../components/versus/Pakistan';
import SouthAfrica from '../components/versus/SouthAfrica';
import SriLanka from '../components/versus/SriLanka';
import UAE from '../components/versus/UAE';
import WestIndies from '../components/versus/WestIndies';
import Zimbabwe from '../components/versus/Zimbabwe';

module.exports = {
  getComponentName(componentName){
    var componentLookup = {
      'Australia': <Australia ref="australia"/>,
      'Bangladesh': <Bangladesh />,
      'Bermuda': <Bermuda />,
      'England': <England />,
      'Ireland': <Ireland />,
      'Kenya': <Kenya />,
      'Namibia': <Namibia />,
      'Netherland': <Netherland />,
      'NewZealand': <NewZealand />,
      'Pakistan': <Pakistan />,
      'SouthAfrica': <SouthAfrica />,
      'SriLanka': <SriLanka />,
      'UAE': <UAE />,
      'WestIndies': <WestIndies />,
      'Zimbabwe': <Zimbabwe />
    };
    return componentLookup[componentName];
  }
}
