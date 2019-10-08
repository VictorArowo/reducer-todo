import React, { useReducer } from 'react';
import { MARK_COMPLETE } from '../types';

const Todos = ({ dispatch, todos }) => {
  const markComplete = id => {
    dispatch({
      type: MARK_COMPLETE,
      payload: { id }
    });
  };

  return (
    todos && (
      <div>
        {todos.map(item => {
          console.log(todos);
          return item.completed ? (
            <>
              <div key={item.id} style={{ textDecoration: 'line-through' }}>
                {item.item}
              </div>
              {item.timeCompleted && <div>{item.timeCompleted}</div>}
            </>
          ) : (
            <div key={item.id} onClick={() => markComplete(item.id)}>
              {item.item}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Todos;
