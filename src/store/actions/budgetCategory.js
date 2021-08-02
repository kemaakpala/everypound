import * as actionTypes from './types'

// export const initBudgetCategory = () => {};

export const addBudgetCategory = (title) => ({
  type: actionTypes.ADD_BUDGET_CATEGORY,
  title: title
});

export const delBudgetCategory = (title) => ({
  type: actionTypes.DEL_BUDGET_CATEGORY,
  title: title
});