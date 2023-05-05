import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ReactElement } from "react";

function ReduxProvider({ children }: { children: ReactElement }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
