import moment from 'moment';

/**
 * @param {number} ts
 */
// eslint-disable-next-line import/prefer-default-export
export function ts2datetime(ts) {
  return moment.unix(ts).format('YYYY-MM-DD hh:mm');
}
