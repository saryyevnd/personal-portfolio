import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { AnimatedSplash } from "../../components";
import { settings } from "./../../portfolio";

const Default = () => {
  const [redirect, setRedirect] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(() => setRedirect(true), 2000);
    return () => clearTimeout(timeout.current);
  }, []);

  if (!settings.isSplash) return <Redirect to="/home" />;
  return redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
};

export default Default;
