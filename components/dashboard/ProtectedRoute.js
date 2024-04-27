import React from "react";

export default function ProtectedRoute() {
  return <div>ProtectedRoute</div>;
}

// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useAppSelector } from "../hooks/useReducer";
// import SessionTimeout from "./SessionTimeout";

// const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
// 	const router = useRouter();
// 	const userAuth = useAppSelector((state) => state.user.auth);
// 	const adminAuth = useAppSelector((state) => state.admin.auth);
// 	const [routeToRedirect, setRouteToRedirect] = useState("/auth/login");
// 	const [auth, setAuth] = useState(userAuth);

// 	useEffect(() => {
// 		if (!auth) {
// 			router.push("/auth/login");
// 		}
// 	}, [router, auth, routeToRedirect]);

// 	return <SessionTimeout>{auth ? children : null} </SessionTimeout>;
// };

// export default ProtectedRoutes;
