import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../CustomHooks/useLocalStorage";

const BarContext = createContext();
export const useProgressBarContext = () => useContext(BarContext);

const ProgressBarContext = ({ children }) => {
  const [verifyDone, setVerifyDone] = useLocalStorage("verifyDone", false);
  const [fillDetailsDone, setFillDetailsDone] = useLocalStorage(
    "fillDetailsDone",
    false
  );
  const [profileDone, setProfileDone] = useLocalStorage("profileDone", false);
  const [changePasswordDone, setChangePasswordDone] = useLocalStorage(
    "changePasswordDone",
    false
  );

  return (
    <BarContext.Provider
      value={{
        verifyDone,
        setVerifyDone,
        fillDetailsDone,
        setFillDetailsDone,
        profileDone,
        setProfileDone,
        changePasswordDone,
        setChangePasswordDone,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};

ProgressBarContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProgressBarContext;
