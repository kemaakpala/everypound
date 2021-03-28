import BudgetItemContainer from '../BudgetItemContainer';
import { render } from '@testing-library/react';

describe('<BudgetItemContainer />', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetItemContainer /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})