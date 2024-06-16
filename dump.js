// TODO - Update the '"name": "next-js-template",' line in 'package.json' to your project name
// TODO - Update favicon

import { Provider } from "react-redux";

import "../styles/globals.css";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import EccormerceLayout from "../components/eccormerce/layout/EccormerceLayout";
import ProtectedRoute from "../components/dashboardutils/ProtectedRoute";
import Layoutconsumer from "../components/dashboardconsumer/layout/Layoutconsumer";
import Layoutretail from "../components/dashboardretailer/layout/Layoutretail";

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
    "/description",
  ];

  const requireAuthConsumer = [
    "/consumer/account",
    "/consumer/orders",
    "/consumer/inbox",
    "/consumer/ratings",
    "/consumer/saved",
    "/consumer/addressbook",
    "/consumer/followed",
    "/consumer/settings",
  ];

  const requireAuthRetailer = [
    "/retailer/account",
    "/retailer/orders",
    "/retailer/inbox",
    "/retailer/ratings",
    "/retailer/saved",
    "/retailer/addressbook",
    "/retailer/followed",
    "/retailer/settings",
  ];

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {requireAuthRetailer.includes(router.pathname) ? (
          <ProtectedRoute>
            <Layoutretail>
              <Component {...pageProps} />
            </Layoutretail>
          </ProtectedRoute>
        ) : (
          <EccormerceLayout>
            {requireNoAuth.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <Layoutconsumer>
                  <Component {...pageProps} />
                </Layoutconsumer>
              </ProtectedRoute>
            )}
          </EccormerceLayout>
        )}
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
