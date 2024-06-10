// export default function ProtectedRoute() {
//   return <div>ProtectedRoute</div>;
// }

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SessionTimeout from "./SessionTimeout";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const userAuth = useSelector((state) => state.user.auth);
  // const adminAuth = useSelector((state) => state.admin.auth);
  const [routeToRedirect, setRouteToRedirect] = useState("/auth/login");
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    console.log(userAuth, auth, "checking auth");
    if (!auth) {
      router.push("/auth/login");
    }
  }, [router, auth, routeToRedirect]);

  return <SessionTimeout>{auth && children}</SessionTimeout>;
};

export default ProtectedRoutes;
