
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { actions } from './redux/reducers/mainReducer';
import { reducers } from './redux/reduxStore';

export type ContactDataType = {
  _id?: string
  name: string
  phone: string
  email: string
  telegram: string
};

export type UserDataType = {
  _id: string
  name: string
  password: string
  contacts:Array<string>
};

export type DataEnterType = {
  name: string
  password: string
};

export type TouchedType = {
  name: boolean
  password: boolean
};

export type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
};

export type AlertType = {
  type: string
  message: string
} | null

export type EventType = React.ChangeEvent<HTMLInputElement>
export type MouseEventType = React.MouseEvent<HTMLButtonElement>

export type actionsType = InferActionsTypes<typeof actions | typeof actions>
export type thunkType = BaseThunkType<actionsType>

// типизация для state
type reducersType = typeof reducers;
export type appStateType = ReturnType<reducersType>;

// типизация для action creators
type propertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends {
// any потому что аргументы могут быть какие угодно
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<propertiesTypes<T>>;

// типизация для thunc creators
export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, appStateType, unknown, A>;
