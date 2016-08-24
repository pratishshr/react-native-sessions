/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */
import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Account from './Account';

export function renderScene(route, navigator) {
  if(route.name == 'dashboard') {
    return <Dashboard navigator={navigator}/>
  }
  if(route.name == 'profile') {
    return <Profile navigator={navigator}/>
  }
  if(route.name == 'account') {
    return <Account navigator={navigator}/>
  }
}
