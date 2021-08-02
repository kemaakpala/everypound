import { createContext, useReducer } from 'react';

const initialState = {
  month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  category: [{
    title: 'Housing',
    code: 'H',
    order: 0,
    items: [{
      title: 'Mortgage/Rent',
      planned: 0,
      actual: 0,
    }, {
      title: 'Gas',
      planned: 0,
      actual: 0
    }, {
      title: 'Electricity',
      planned: 0,
      actual: 0
    }, {
      title: 'Water',
      planned: 0,
      actual: 0
    }]
  },
  {
    title: 'Food',
    code: 'F',
    order: 0,
    items: [{
      title: 'Groceries',
      planned: 0,
      actual: 0,
    }, {
      title: 'Take Out',
      planned: 0,
      actual: 0
    }, {
      title: 'Lunch',
      planned: 0,
      actual: 0
    }, {
      title: 'Restaurant',
      planned: 0,
      actual: 0
    }]
  },
  {
    title: 'Transportation',
    code: 'T',
    order: 0,
    items: [{
      title: 'Diesel / Petrol',
      planned: 0,
      actual: 0
    }, {
      title: 'Public Transport',
      planned: 0,
      actual: 0
    }]
  }, {
    title: 'Personal',
    code: 'P',
    order: 0,
    items: [{
      title: 'Allowance',
      planned: 0,
      actual: 0
    }, {
      title: 'Phone bill',
      planned: 0,
      actual: 0
    }, {
      title: 'Clothing',
      planned: 0,
      actual: 0
    }]
  }],
};
const store = createContext(initialState);

const { Provider } = store;

const reducer = (state, action) => { 
  switch(action.type) {
    case '':
      return state
    default:
    return state;
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export {store, StoreProvider};