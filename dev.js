import {handler} from './dist/index.js'
//To test locally:
const path = `/ocrPan`
const httpMehtod = 'POST'
const body =
  '{"url":"https://i.ibb.co/NNB0nwv/pancard.jpg"}'
const event = {
  httpMethod: `${httpMehtod}`,
  headers: {
    'Content-Type': 'application/json'
  },
  path: path,
  pathParameters: {
    walletId: 3
  },
  body: `${body}`
}
const res = await handler(event);
console.info('RES', res)