import BudgetItemContent from './BudgetItemContent';
import { render } from '@testing-library/react';

describe('<BudgetItemContent />', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetItemContent /></div>)
    expect(firstChild).toMatchSnapshot();
  })
})