import React from 'react';
import { Location, NavigateFunction, Params, useLocation, useNavigate, useParams } from 'react-router';

interface IPropsFromRouter {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
}

export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      props = {...props, location, navigate, params};
  
      return (
        <Component {...props} />
      );
    }
  
    return ComponentWithRouterProp;
}
export type PropsFromRouter = IPropsFromRouter;