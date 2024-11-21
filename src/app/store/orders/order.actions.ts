import { createAction, props } from '@ngrx/store';

export interface Order {
  id: number;
  product: string;
  quantity: number;
  status: string;
}

export const loadOrders = createAction('[Order] Load Orders');
export const addOrder = createAction(
  '[Order] Add Order',
  props<{ order: Order }>()
);
export const removeOrder = createAction(
  '[Order] Remove Order',
  props<{ id: number }>()
);
