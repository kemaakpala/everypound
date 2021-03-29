import BudgetCategoryContent from '../BudgetCategoryContent';
import { render } from '@testing-library/react';

describe('<BudgetCategoryContent />', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetCategoryContent /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})