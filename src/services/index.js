import fetch from '@/utils/request'

export async function users(params) {
  console.log(params,'request1')
  return fetch(`/users`, {
    method: 'get',
    params,
  });
}

export async function home(params) {
  return fetch( '/home', {
    method: 'get',
    params,
  });
}