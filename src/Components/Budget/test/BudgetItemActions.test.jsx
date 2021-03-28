import BudgetItemActions from '../BudgetItemActions';
import { render } from '@testing-library/react';

describe('<BudgetItemContainer />', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetItemActions /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})