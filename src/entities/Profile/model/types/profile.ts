import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/consts/country';
import { ValidateProfileError } from '../consts/profileConsts';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string,
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
