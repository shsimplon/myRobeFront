/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AccueilPage = lazyLoad(
  () => import('./index'),
  module => module.AccueilPage,
);
