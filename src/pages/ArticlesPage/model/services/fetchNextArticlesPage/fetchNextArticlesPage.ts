import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageIsLoading,
  getArticlesPageHasMore,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlePageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
      const { getState, dispatch } = thunkApi;
      const isLoading = getArticlesPageIsLoading(getState());
      const page = getArticlesPageNum(getState());
      const hasMore = getArticlesPageHasMore(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
      }
    },
  );
