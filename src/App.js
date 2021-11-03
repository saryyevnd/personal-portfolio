import React, { Fragment } from "react";
import Routes from "./routes";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const useCursor = settings.useCustomCursor;

  return (
    <Fragment>
      <GlobalStyles />
      {useCursor ? (
        <Fragment>
          <Routes />
          <AnimatedCursor
            innerSize={15}
            outerSize={25}
            color="110, 125, 165"
            outerAlpha={0.2}
            innerScale={1.5}
            outerScale={2}
          />
        </Fragment>
      ) : (
        <Routes />
      )}
    </Fragment>
  );
};

export default App;
