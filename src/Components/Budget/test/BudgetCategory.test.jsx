import BudgetCategory from '../BudgetCategory';
import { render } from '@testing-library/react';

describe('<BudgetCategory />', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetCategory /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})