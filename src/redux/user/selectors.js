/**
 * User selectors
 */

import { createSelector } from 'reselect'

export const userProfileSelector = createSelector(
  state => state.user.profile,
  ({ bio, name, profileImage }) => ({ bio, name, profileImage })
)
