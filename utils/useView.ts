import { ViewContext } from "@/contexts/viewContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useView = () => {
  const context = useContext(ViewContext);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  if (context === undefined) {
    throw new Error(" must be used within a viewProvider");
  } else {
    var { state, dispatch } = context;
  }

  useEffect(() => {
    dispatch({ payload: { isVisible: inView, visibleNode: entry } });
  }, [entry]);

  return { state, ref };
};

export default useView;
