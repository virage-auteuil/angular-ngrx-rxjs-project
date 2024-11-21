import { createReducer, on } from '@ngrx/store';
import { addOrder, removeOrder } from './order.actions';

export interface OrderState {
  orders: any[];
}

const initialState: OrderState = {
  orders: [],
};

export const orderReducer = createReducer(
  initialState,
  on(addOrder, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
  })),
  on(removeOrder, (state, { id }) => ({
    ...state,
    orders: state.orders.filter(order => order.id !== id),
  }))
);
