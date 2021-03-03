import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

type SampleDispatch = Dispatch<Action>;

const defaultSampleState: State = {
  count: 0,
  text: 'hello',
  color: 'red',
  isGood: true,
};
const SampleStateContext = createContext<State>(defaultSampleState);
const SampleDispatchContext = createContext<SampleDispatch>(() => {});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function SamepleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultSampleState);

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState(): State {
  return useContext(SampleStateContext);
}

export function useSampleDispatch(): SampleDispatch {
  return useContext(SampleDispatchContext);
}
