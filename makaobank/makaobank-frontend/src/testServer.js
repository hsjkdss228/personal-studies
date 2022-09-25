/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.post(`${baseUrl}/session`, async (request, response, context) => {
    // console.log('로그인 시도');

    const { accountNumber, password } = await request.json();

    if (accountNumber === '1234' && password === 'password') {
      return response(context.json({
        accessToken: 'ACCESS.TOKEN',
        name: 'Tester',
        amount: 100_000,
      }));
    }

    return response(context.status(400));
  }),
  rest.get(`${baseUrl}/accounts/me`, async (request, response, context) => (
    // TODO: access token 확인?
    response(context.json({
      name: 'Tester',
      accountNumber: '1234',
      amount: 100_000,
    })))),
);

export default server;
