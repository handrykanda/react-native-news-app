import {
    GET_GENERAL_NEWS, 
    GET_TECHNOLOGY_NEWS, 
    GET_SPORTS_NEWS,
    GET_NEWS_ARTICLE,
    LOADING_UI,
    STOP_LOADING_UI
} from '../types';
  
  const initialState = {
    general: [],
    technology: [],
    sports: [],
    newsArticle: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_UI:
        return {
          ...state,
          loading: true
        };
        case STOP_LOADING_UI:
        return {
          ...state,
          loading: false
        };
      case GET_GENERAL_NEWS:
        return {
          ...state,
          general: action.payload,
          loading: false
        };
        case GET_TECHNOLOGY_NEWS:
        return {
          ...state,
          technology: action.payload,
          loading: false
        };
        case GET_SPORTS_NEWS:
        return {
          ...state,
          sports: action.payload,
          loading: false
        };
      case GET_NEWS_ARTICLE:
        return {
          ...state,
          newsArticle: action.payload
        };
      default:
        return state;
    }
  }