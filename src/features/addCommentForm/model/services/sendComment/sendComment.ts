import { getUserAuthData } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
  >(
    'addCommentForm/sendComment',
    async (articleId, thunkApi) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
        getState
      } = thunkApi;

      const userData = getUserAuthData(getState());
      const text = getAddCommentFormText(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('error');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(addCommentFormActions.setText(''));

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
