import path from 'path';

import { getFilePath } from './path';

describe('getPath', () => {
  it('should return correct file path for empty path', () => {
    const route = '';
    const filePath = getFilePath(route);
    expect(filePath).toBe(path.join(__dirname));
  });

  it('should return correct file path for relative path', () => {
    const route = './route';
    const filePath = getFilePath(route);
    expect(filePath).toBe(path.join(__dirname, ...['route']));
  });

  it('should return correct file path for absolute path', () => {
    const route = '../../route';
    const filePath = getFilePath(route);
    expect(filePath).toBe(path.join(__dirname, ...['..', '..', 'route']));
  });
});
