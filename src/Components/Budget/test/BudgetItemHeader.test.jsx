import BudgetItemHeader from '../BudgetItemHeader';
import { render } from '@testing-library/react';

describe('<BudgetHeader/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetItemHeader groupTitle="Test"/></div>)
    expect(firstChild).toMatchSnapshot();
  })
})