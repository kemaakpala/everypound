import BudgetCategoryHeader from '../BudgetCategoryHeader';
import { render } from '@testing-library/react';

describe('<BudgetHeader/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetCategoryHeader title="Test"/></div>)
    expect(firstChild).toMatchSnapshot();
  })
})