import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  const pipe = new TestPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test if number is passed return number * number', () => {
    expect(pipe.transform(4)).toBe(16);
  });

  it('test if non number is passed return error message', () => {
    expect(pipe.transform('Yahia')).toEqual('Not a number');
  });
});
