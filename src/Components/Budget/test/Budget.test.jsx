import Budget from '../Budget';
import { render } from '@testing-library/react';

describe('<Budget/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><Budget /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})