import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  if (user === undefined) return <p style={{ textAlign: "center", marginTop: "50px" }}>लोड हुँदैछ...</p>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}
