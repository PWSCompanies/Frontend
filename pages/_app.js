import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import EccormerceLayout from "../components/eccormerce/layout/EccormerceLayout";
import ProtectedRoute from "../components/dashboardutils/ProtectedRoute";
import Layoutconsumer from "../components/dashboardconsumer/layout/Layoutconsumer";
import Layoutretail from "../components/dashboardretailer/layout/Layoutretail";

import "../styles/globals.css";
import { persistor, store } from "../store/store";
import NotFoundPage from "../components/notfound/NotFoundPage";
import Onboardinglayout from "../components/Onboarding/layout/Onboardinglayout";
import { SnackbarProvider } from "notistack";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const requireNoAuth = [
    "/",
    "/checkout",
    "/contactus",
    "/description",
    "/cart",
  ];

  const onboarding = [
    "/auth/login",
    "/auth/signup",
    "/auth/OtpVerify",
    "/auth/SignUpChoice",
    "/auth/forgotPassword",
    "/auth/Newpassword",
  ];

  const requireAuthConsumer = [
    "/user/account",
    "/user/orders",
    "/user/inbox",
    "/user/ratings",
    "/user/saved",
    "/user/addressbook",
    "/user/saveditems",
    "/user/inbox",
    "/user/followed",
    "/user/settings",
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

  const isOnBoarding = onboarding.includes(router.pathname);
  const isNoAuthRoute = requireNoAuth.includes(router.pathname);
  const isConsumerRoute = requireAuthConsumer.includes(router.pathname);
  const isRetailerRoute = requireAuthRetailer.includes(router.pathname);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {isRetailerRoute ? (
            <ProtectedRoute>
              <Layoutretail>
                <Component {...pageProps} />
              </Layoutretail>
            </ProtectedRoute>
          ) : isConsumerRoute ? (
            <EccormerceLayout>
              <ProtectedRoute>
                <Layoutconsumer>
                  <Component {...pageProps} />
                </Layoutconsumer>
              </ProtectedRoute>
            </EccormerceLayout>
          ) : isOnBoarding ? (
            <Onboardinglayout>
              <Component {...pageProps} />
            </Onboardinglayout>
          ) : isNoAuthRoute ? (
            <EccormerceLayout>
              <Component {...pageProps} />
            </EccormerceLayout>
          ) : (
            <NotFoundPage />
          )}
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;