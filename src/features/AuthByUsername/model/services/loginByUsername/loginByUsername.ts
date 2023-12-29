import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entities/User';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string, extra: ThunkExtraArg }
>(
  'login/loginByUsername',
  async ({ username, password }:LoginByUsernameProps, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.post<User>('/login', {
        username,
        password
      });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Email or Password is not correct');
    }
  }
);
