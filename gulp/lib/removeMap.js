import { deleteAsync } from 'del';
import { paths } from '../paths.js';

export const removeMap = () => {
  return deleteAsync(paths.cleanMap);
};
