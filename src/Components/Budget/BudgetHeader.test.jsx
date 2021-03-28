import BudgetHeader from './BudgetHeader';
import { render } from '@testing-library/react';

describe('<BudgetHeader/>', () => {
  it('matches snapshot', () => {
    const { firstChild } = render(<div><BudgetHeader groupTitle="Test"/></div>)
    expect(firstChild).toMatchSnapshot();
  })
})