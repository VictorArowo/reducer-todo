import dayjs from 'dayjs';

import {
  INPUT_CHANGE,
  FORM_SUBMIT,
  MARK_COMPLETE,
  CLEAR_COMPLETED
} from '../types';
import uuid from 'uuid';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);
export const initialState = {
  todos: [
    {
      id: 3892987589,
      item: 'Learn about reducers',
      completed: false,
      timeCompleted: null
    }
  ],
  form: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        form: action.payload.value
      };

    case FORM_SUBMIT:
      return {
        todos: [
          ...state.todos,
          {
            id: uuid(),
            item: state.form,
            completed: false,
            timeCompleted: null
          }
        ],
        form: ''
      };

    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) return todo;
          return {
            id: todo.id,
            item: todo.item,
            completed: true,
            timeCompleted: dayjs().calendar(dayjs(new Date()))
          };
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };
    default:
      return state;
  }
};
