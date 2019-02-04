import { createSelector } from "reselect";

const newsListSelector = state => state.loadNews;

const extractRequestUI = obj => ({
  ...obj,
  isFetching: obj.isFetching,
  requested: obj.requested || null,
  received: obj.received || null,
  error: obj.error
});

export const getLoadNewsListUI = createSelector(
  newsListSelector,
  loadNews => extractRequestUI(loadNews.newsList)
);
