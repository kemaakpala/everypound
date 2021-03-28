import Layout from '../Layout';
import { render } from '@testing-library/react';

describe('<Layout/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><Layout>this is a test</Layout></div>)
    expect(firstChild).toMatchSnapshot();
  })
})