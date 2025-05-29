import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

ReactGA.initialize('G-R0SC41P1LE');

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);
};

export default usePageTracking;