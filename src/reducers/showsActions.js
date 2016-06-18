import BetaSeries from '../BetaSeries';
import APIKEY from '../apikey';

import { triggerAction } from './index';

const ACTION = {
  "SHOWS_LOAD_DONE":"SHOWS_LOAD_DONE",
  "SHOWS_LOAD_FAIL":"SHOWS_LOAD_FAIL",
  "SHOWS_REFRESH":"SHOWS_REFRESH",

  "SHOWS_SEARCH": "SHOWS_SEARCH",
  "SHOWS_SEARCH_DONE":"SHOWS_SEARCH_DONE",
  "SHOWS_SEARCH_FAIL":"SHOWS_SEARCH_FAIL",  
};

export default ACTION; 

const bs = BetaSeries.getInstance(APIKEY.key);

export const refreshList = (uid, dispatch) => {
    dispatch(triggerAction(ACTION.SHOWS_REFRESH))

    bs.getShows(uid).then((data) => {
        dispatch(triggerAction(ACTION.SHOWS_LOAD_DONE, data));
    }, () => {
        dispatch(triggerAction(ACTION.SHOWS_LOAD_FAIL));
    })
}