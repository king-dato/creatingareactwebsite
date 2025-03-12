import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Appbar from "./Appbar";
import ImgList from "./imagelist";

function Home() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Appbar />
        <ImgList />
      </StyledEngineProvider>
    </>
  );
}

export default Home;
