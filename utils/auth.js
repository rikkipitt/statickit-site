import Router from 'next/router';
import cookie from 'js-cookie';
import cookies from 'next-cookies';
import Viewer from '../data/viewer';

const endpoint =
  process.env.NODE_ENV == 'production'
    ? 'https://api.statickit.com'
    : 'http://localhost:4000';

export const login = ({ token }) => {
  cookie.set('token', token, { expires: 365 });
  Viewer.revalidate();
  Router.push('/');
};

export const logout = () => {
  cookie.remove('token');
  Viewer.revalidate();
  Router.push('/login');
};

export const redirectToSignin = res => {
  if (res) {
    res
      .writeHead(302, {
        Location: '/login'
      })
      .end();
  } else {
    Router.push('/login');
  }
};

export const fetchToken = async (email, password) => {
  const resp = await fetch(`${endpoint}/tokens`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (resp.status === 200) {
    const body = await resp.json();
    return body.token;
  } else {
    return null;
  }
};

export const getToken = (context = {}) => {
  const { token } = cookies(context);
  return token;
};
