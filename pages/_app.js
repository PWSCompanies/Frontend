// TODO - Update the '"name": "next-js-template",' line in 'package.json' to your project name
// TODO - Update favicon

import { Provider } from "react-redux";

import "../styles/globals.css";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import EccormerceLayout from "../components/eccormerce/layout/EccormerceLayout";
import DashboardLayout from "../components/dashboard/layout/DashboardLayout";
import ProtectedRoute from "../components/dashboard/ProtectedRoute";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const requireNoAuth = [
    "/",
    "/auth/login",
    "/auth/signup",
    "/auth/forgotPassword",
    "/cart",
    "/checkout",
    "/contactus",
  ];

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {requireNoAuth.includes(router.pathname) ? (
          <EccormerceLayout>
            <Component {...pageProps} />
          </EccormerceLayout>
        ) : (
          <ProtectedRoute>
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          </ProtectedRoute>
        )}
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
