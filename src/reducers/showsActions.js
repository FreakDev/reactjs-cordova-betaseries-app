import BetaSeries from '../BetaSeries';
import APIKEY from '../apikey';

import { triggerAction } from './index';

const ACTION = {
  "SHOWS_LOAD_DONE":"SHOWS_LOAD_DONE",
  "SHOWS_LOAD_FAIL":"SHOWS_LOAD_FAIL",
  "SHOWS_REFRESH":"SHOWS_REFRESH"
};

export default ACTION; 

const bs = BetaSeries.getInstance(APIKEY.key);

export const refreshList = (uid, dispatch) => {
    dispatch(triggerAction(ACTION.SHOWS_REFRESH))

    bs.getShows(uid).then((response) => {
        dispatch(triggerAction(ACTION.SHOWS_LOAD_DONE, data));
    }, () => {
        dispatch(triggerAction(ACTION.SHOWS_LOAD_FAIL));
    })
}