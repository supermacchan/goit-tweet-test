export const selectFilter = state => state.filters.status;

export const selectUser = state => state.user.name;
export const selectAuth = state => state.user.auth;

export const selectTweets = state => state.tweets.items;
export const selectTweetsLoading = state => state.tweets.loading;
export const selectTweetsError = state => state.tweets.error;