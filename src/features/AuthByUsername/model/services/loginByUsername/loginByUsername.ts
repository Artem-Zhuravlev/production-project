import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User, LoginByUsernameProps, { rejectValue: string }
>(
  'login/loginByUsername',
  async ({ username, password }:LoginByUsernameProps, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:8000/login', {
        username,
        password
      });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      thunkAPI.dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Email or Password is not correct');
    }
  }
);
