import React from "react";
// import styled from "@utils/styled-components";
import { styled } from "@linaria/react";
import "lazysizes";

import theme from "../theme/default";
import { ThemeProvider } from "../provider";

import Icons from "./partials/icons";
import Tags from "./partials/tags";
import Stamps from "./partials/stamps";
import Slider from "./partials/slider";
import Cards from "./partials/cards";
import Typography from "./partials/typography";
import Buttons from "./partials/button";
import Inputs from "./partials/inputs.jsx";
import Selects from "./partials/selects.jsx";
import Modals from "./partials/modals";
import Drawers from "./partials/drawers";
import Tooltips from "./partials/tooltips.jsx";
import Datetimes from "./partials/datetimes.jsx";
import Countdowns from "./partials/countdowns.jsx";
import Avatars from "./partials/avatars.jsx";
import Images from "./partials/images.jsx";
import Divider from "@components/divider";
import Lazysizes from "../components/lazysizes";
import Datepickers from "./partials/datepickers.jsx";
import Grids from "./partials/grid";
import ResponsiveViews from "./partials/responsiveViews.jsx";
import Skeletons from "./partials/skeletons";
import Dividers from "./partials/dividers";

import Button from "@components/button";
import Icon from "@components/icon";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../assets/reset.css";
import "../assets/font-icon.css";
import "../assets/styles.css";

import "../assets/local-fonts/font-yekan.css";
import "./App.css";

const TWContainer = styled.div`
  position: relative;
  max-width: 1840px;
  padding: 0 24px 24px;
  margin: 0 auto;

  ${'' /* &[data-theme=light] {
    background: white;
    color: black;
  } */}
`;

const TWFloatingButtn = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

console.log(theme);

function App() {
  const [theme, setTheme] = React.useState("dark");

  const changetheme = () => {
    setTheme(prevState => prevState === "light" ? "dark" : "light");
  };
  return (
    <Lazysizes>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>React + Vite = ui component</h1>
        </div>
        <TWContainer data-theme={theme}>
          <Buttons />
          <Divider />
          <Inputs />
          <Divider />
          <Icons />
          <Divider />
          <Tags />
          <Divider />
          <Stamps />
          <Divider />
          <Cards />
          <Divider />
          <Typography />
          <Divider />
          <Slider />
          <Divider />
          <Datepickers />
          <Divider />
          <Datetimes />
          <Divider />
          <Selects />
          <Divider />
          <Modals />
          <Divider />
          <Drawers />
          <Divider />
          <Tooltips />
          <Divider />
          <Countdowns />
          <Divider />
          <Avatars />
          <Divider />
          <Images />
          <Divider />
          <Grids />
          <Divider />
          <Dividers />
          <Divider />
          <Skeletons />
          <Divider />
          <ResponsiveViews />
          <TWFloatingButtn>
            <Button
              size="large"
              type="primary"
              shape="round"
              icon={<Icon icon="plus" solid />}
              onClick={changetheme}
            />
          </TWFloatingButtn>
        </TWContainer>
      </div>
    </Lazysizes>
  );
}

const withProvider = (Component) => (props) =>
  (
    <ThemeProvider
      theme={{
        color: { red: "green" },
        button: { primaryBackgroundColor: "green" },
      }}
    >
      <Component {...props} />
    </ThemeProvider>
  );

export default App;
