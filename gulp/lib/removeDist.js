import { deleteAsync } from 'del';
import { paths } from '../paths.js';

export const removeDist = () => {
  return deleteAsync(paths.cleanFolder);
};
