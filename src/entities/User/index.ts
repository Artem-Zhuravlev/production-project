import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { UserRole, Theme } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { isUserAdmin, isUserManager } from './model/selectors/roleSelectors';

export type {
  User,
  UserSchema,
};

export {
  userReducer,
  userActions,
  getUserAuthData,
  getUserInited,
  Theme,
  UserRole,
  isUserAdmin,
  isUserManager,
};
