import {
    GET_GENERAL_NEWS, 
    GET_TECHNOLOGY_NEWS, 
    GET_SPORTS_NEWS,
    LOADING_UI,
    STOP_LOADING_UI,
    GET_NEWS_ARTICLE,
    SET_ERRORS,
    CLEAR_ERRORS
} from '../types';
import axios from 'axios';
import {
    articlesBaseUrl,
    countryCode,
    general_category,
    sports_category,
    technology_category
} from '../../config/apiConfig'
import {apiKey} from '../../config/sensitive_info'

// Get all general news
export const getGeneralNews = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`${articlesBaseUrl}?country=${countryCode}&category=${general_category}&apiKey=${apiKey}`)
      .then((res) => {
        dispatch({
          type: GET_GENERAL_NEWS,
          payload: res.data.articles
        });
        dispatch({
          type: STOP_LOADING_UI
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_GENERAL_NEWS,
          payload: []
        });
        dispatch({
          type: SET_ERRORS,
          payload: err
        });
      });
  };

  // Get all technology news
export const getTechnologyNews = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${articlesBaseUrl}?country=${countryCode}&category=${technology_category}&apiKey=${apiKey}`)
    .then((res) => {
      dispatch({
        type: GET_TECHNOLOGY_NEWS,
        payload: res.data.articles
      });
      dispatch({
        type: STOP_LOADING_UI
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TECHNOLOGY_NEWS,
        payload: []
      });
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

// Get all sports news
export const getSportsNews = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`${articlesBaseUrl}?country=${countryCode}&category=${sports_category}&apiKey=${apiKey}`)
    .then((res) => {
      dispatch({
        type: GET_SPORTS_NEWS,
        payload: res.data.articles
      });
      dispatch({
        type: STOP_LOADING_UI
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SPORTS_NEWS,
        payload: []
      });
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

// Get news article
export const getNewsArticle = (data) => (dispatch) => {
  dispatch({ 
    type: GET_NEWS_ARTICLE, 
    payload: data 
  });
};