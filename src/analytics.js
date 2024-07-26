import ReactGA from 'react-ga';

const TRACKING_ID = 'G-NSLLSKF9D0'; 
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
