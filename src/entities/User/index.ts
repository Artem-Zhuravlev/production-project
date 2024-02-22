import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export type {
  User,
  UserSchema,
};

export {
  getUserRoles,
  userReducer,
  userActions,
  getUserAuthData,
  getUserInited,
  UserRole,
  isUserAdmin,
  isUserManager,
};
