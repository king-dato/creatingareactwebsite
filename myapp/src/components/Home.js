import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Appbar from "./Appbar";

function Home() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Appbar />
      </StyledEngineProvider>
    </>
  );
}

export default Home;
