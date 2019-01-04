import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Reposityories from '~/pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Reposityories,
  }),
);

export default Routes;
