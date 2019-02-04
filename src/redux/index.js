import { get } from "../http";

// ================================
// ACTIONS
// ================================
const LOAD_GET_NEWS_LIST = "LOAD_GET_NEWS_LIST";
const LOAD_GET_NEWS_LIST_SUCCESS = "LOAD_GET_NEWS_LIST_SUCCESS";
const LOAD_GET_NEWS_LIST_FAILURE = "LOAD_GET_NEWS_LIST_FAILURE";

// ================================
// INITIAL STATE
// ================================
const initialState = {
  loadNews: {
    newsList: {
      isFetching: false,
      requested: "",
      error: "",
      nextPage: 1,
      list: []
    }
  }
};

// ================================
// REDUCER
// ================================
export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GET_NEWS_LIST: {
      return {
        ...state,
        loadNews: {
          ...state.loadNews,
          newsList: {
            ...state.loadNews.newsList,
            isFetching: true
          }
        }
      };
    }

    case LOAD_GET_NEWS_LIST_SUCCESS: {
        return {
        ...state,
        loadNews: {
          ...state.loadNews,
          newsList: {
            isFetching: false,
            nextPage: action.data.currentPage+1, 
            list: action.data.results !== state.loadNews.newsList.list ? state.loadNews.newsList.list.concat(action.data.results) : action.data.results,
          }
        }
      };
    }

    case LOAD_GET_NEWS_LIST_FAILURE: {
      return {
        ...state,
        loadNews: {
          ...state.loadNews,
          newsList: {
            ...state.loadNews.newsList,
            isFetching: false,
            error: action.error
          }
        }
      };
    }

    default: {
      return state;
    }
  }
}

// ================================
// ACTION CREATORS
// ================================
export function _loadGetNewsList() {
  return {
    type: LOAD_GET_NEWS_LIST
  };
}

export function _loadGetNewsListSuccess(data) {
  return {
    type: LOAD_GET_NEWS_LIST_SUCCESS,
    data
  };
}

export function _loadGetNewsListFailure(error) {
  return {
    type: LOAD_GET_NEWS_LIST_FAILURE,
    error
  };
}

// ================================
// THUNKS
// ================================
export function loadGetNewsList(page) {
  return function(dispatch) {
    dispatch(_loadGetNewsList());
    (async () => {
      const params = {
        page
      };
      get("/search", params).then(res => {
        try {
          dispatch(_loadGetNewsListSuccess(res.response));
        } catch (err) {
          dispatch(_loadGetNewsListFailure(err));
        }
      });
    })();
  };
}
