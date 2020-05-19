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

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0.8,
    scale: 1.3,
    
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(.4),
    scale: bounce(0.4),
  },
  // and rest at an opaque, normally-scaled state
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
