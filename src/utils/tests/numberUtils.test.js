import {parseFloatAmount} from '../numberUtils';

describe('tests Number Utils', () => {
  it('tests parseFloatAmount', () => {
    expect(parseFloatAmount('0')).toEqual('0.00');
  })
})