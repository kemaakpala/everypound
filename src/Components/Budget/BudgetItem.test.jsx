import BudgetItem from './BudgetItem';
import { render } from '@testing-library/react';

describe('<BudgetItem/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetItem /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})