import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../CustomHooks/useLocalStorage";

const ShareState = createContext();

export const useStateShareContext = () => useContext(ShareState);

const StateContext = ({ children }) => {
  const [shrinkSideBar, setShrinkSideBar] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteWorkModal, setShowDeleteWorkModal] = useState(false);
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showEditPFPModal, setShowEditPFPModal] = useState(false);
  const [showDeleteProfilePhotoModal, setShowDeleteProfilePhotoModal] =
    useState(false);
  const [showRevokeWorkModal, setShowRevokeWorkModal] = useState(false);
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);

  // const [showModal, setShowModal] = useState(true);

  return (
    <ShareState.Provider
      value={{
        shrinkSideBar,
        setShrinkSideBar,
        showDeactivateModal,
        setShowDeactivateModal,
        showDeleteModal,
        setShowDeleteModal,
        showDeleteWorkModal,
        setShowDeleteWorkModal,
        showEditInfoModal,
        setShowEditInfoModal,
        darkMode,
        setDarkMode,
        settingsOpen,
        setSettingsOpen,
        showEditPFPModal,
        setShowEditPFPModal,
        showMobileNavBar,
        setShowMobileNavBar,
        showDeleteProfilePhotoModal,
        setShowDeleteProfilePhotoModal,
        showRevokeWorkModal,
        setShowRevokeWorkModal,
      }}
    >
      {children}
    </ShareState.Provider>
  );
};

StateContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StateContext;
