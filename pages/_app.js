import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import EccormerceLayout from "../components/eccormerce/layout/EccormerceLayout";
import ProtectedRoute from "../components/dashboardutils/ProtectedRoute";
import Layoutuser from "../components/dashboarduser/layout/Layoutsignedin";

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

  const requireAuthUser = [
    "/user/feed",
    "/user/orders",
    "/user/wallet",
    "/user/inventory",
    "/user/transactions",
    "/user/market",
    "/user/products",
    "/user/followed",
    "/user/settings",
  ];

  const isOnBoarding = onboarding.includes(router.pathname);
  const isNoAuthRoute = requireNoAuth.includes(router.pathname);
  const isSignedUserRoute = requireAuthUser.includes(router.pathname);
  // const isRetailerRoute = requireAuthRetailer.includes(router.pathname);

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
          {isSignedUserRoute ? (
            <EccormerceLayout>
              <ProtectedRoute>
                <Layoutuser>
                  <Component {...pageProps} />
                </Layoutuser>
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
