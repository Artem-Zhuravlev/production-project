import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error;
};
