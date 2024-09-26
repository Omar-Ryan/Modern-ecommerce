import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./store/indx";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
