import React from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

const useSessionExpired = () => {
  const history = useHistory();
  const location = useLocation();

  // the following function checks whether the session is expired or not
  const isSessionExpired = (response) => {
    if (response.code === '403' && response.success === false) {
      return true;
    }
    return false;
  };

  // the following function can be used in components where
  // the user has to be redirected before the component is actually rendered
  const redirectOnSessionExpiredBeforeRender = () => (
    <Redirect
      to={{
        pathname: '/auth/signin',
        state: {
          message: 'Your session has expired. Please login to continue.',
          messageType: 'error',
          from: location,
          isSessionExpired: true,
        },
      }}
    />
  );


  // the following functin can be used in components where
  // the user has to be redirected a query is made by the user from
  // a component which is already been rendered. e.g onClick queries
  const redirectOnSessionExpiredAfterRender = () => {
    history.push({
      pathname: '/auth/signin',
      state: {
        messageType: 'error',
        message: 'Your session has expired. Please login to continue.',
        from: location,
        isSessionExpired: true,
      },
    });
  };
  return {
    isSessionExpired,
    redirectOnSessionExpiredBeforeRender,
    redirectOnSessionExpiredAfterRender,
  };
};

export default useSessionExpired;
