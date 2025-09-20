import { delay } from 'msw';

export const networkDelay = () => {
  const delayTime = process.env.NETWORK_DELAY ? 200 : Math.floor(Math.random() * 700) + 300;
  return delay(delayTime);
}