import React, {
  useState,
  createContext,
  PropsWithChildren,
  useReducer,
} from "react";

interface Action {
  payload: {
    isVisible: boolean;
    visibleNode: IntersectionObserverEntry | undefined;
  };
}

interface State {
  isVisible: boolean;
  visibleNode: IntersectionObserverEntry | undefined;
}

type Dispatch = (action: Action) => void;

interface ContextInterface {
  state: State;
  dispatch: Dispatch;
}

export const ViewContext = createContext<ContextInterface | undefined>(
  undefined
);

function reducer(state: State, action: Action) {
  return {
    isVisible: action.payload.isVisible,
    visibleNode: action.payload.visibleNode,
  };
}

const viewProvider: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isVisible: false,
    visibleNode: undefined,
  });

  return (
    <ViewContext.Provider value={{ state, dispatch }}>
      {children}
    </ViewContext.Provider>
  );
};

export default viewProvider;
