import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import UseApi from '../Shared/Hooks/UseApi'
import HomeScreens from "../Screens/Home/HomeScreens";
import SigninScreens from "../Screens/Signin/SigninScreens";
import SignupScreens from "../Screens/Signup/SignupScreens";
import FinancasScreens from "../Screens/Financas/FinancasScreens";
import ConfigScreens from "../Screens/Config/ConfigScreens";

interface PrivateProps {
  Item: React.ComponentType;
}

const Private: React.FC<PrivateProps> = ({ Item }) => {
  const { signed } = UseApi();

  return signed ? <Item /> : <SigninScreens />;
};

const RouterPages: React.FC = () => {
  return (
    <>
      <Fragment>
        <Routes>
          <Route path="/" element={<SigninScreens />} />
          <Route path="/signup" element={<SignupScreens />} />
          <Route path="*" element={<SigninScreens />} />
          <Route path="/home" element={<Private Item={HomeScreens} />} />
          <Route path="/financas" element={<Private Item={FinancasScreens} />} />
          <Route path="/config" element={<Private Item={ConfigScreens} />} />
        </Routes>
      </Fragment>
    </>
  )
}

export default RouterPages