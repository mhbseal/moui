import React from 'react/addons';
import { Switch, Tab } from '../src/index.js';

const div = document.getElementsByTagName('div');

React.render(
  <Switch />
  , div[0]
);
React.render(
  <Tab />
  , div[1]
);