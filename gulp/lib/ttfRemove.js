import { deleteAsync } from 'del';
import { paths } from '../paths.js';

export const ttfRemove = () => {
  return deleteAsync(`${paths.src.fonts}/*.ttf`);
};
