import request from '@/utils/request';


export function fetchList(query) {
  return request({
    url: '/tutorials/',
    method: 'get',
    params: query,
  });
}


export function fetchDetail(slug) {
  return request({
    url: `/tutorials/${slug}/`,
    method: 'get',
  });
}
