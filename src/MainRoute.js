import React, { lazy } from 'react'
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage.component';
import SearchPage from './pages/searchpage.component';
import RecipePage from './pages/recipepage.component';
import {AnimatedSwitch, spring} from 'react-router-transition';


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default function MainRoute() {
    return (
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/recipe/:recipeName" component={RecipePage} />
      </AnimatedSwitch>
    );
}
