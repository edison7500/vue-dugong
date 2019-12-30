import request from '@/utils/request';


// eslint-disable-next-line import/prefer-default-export
export function fetchList(query) {
  return request({
    url: '/blog/',
    method: 'get',
    params: query,
  });
}
