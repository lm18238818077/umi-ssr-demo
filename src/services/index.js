import fetch from 'umi-request'

export async function users(params) {
  return fetch(`/api/users`, {
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