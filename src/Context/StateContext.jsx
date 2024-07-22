import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [showDeleteSubmissionModal, setShowDeleteSubmissionModal] =
    useState(false);
  const [showRevokeWorkModal, setShowRevokeWorkModal] = useState(false);
  // I mean the one gliding from the right after nenu icon clik
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [filters, setFilters] = useLocalStorage("filters", [
    { active: true, title: "2000 words" },
    { active: true, title: "1500 words" },
    { active: false, title: "Essay" },
  ]);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showDeactivateAccountModal, setShowDeactivateAccountModal] =
    useState(false);
  // profile picture upload
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useLocalStorage("pfp", "");
  const [upload, setUpload] = useState("");

  // areas to hide mobile NavBar
  const { pathname } = useLocation();
  const AreasToHideMobileNavBar =
    pathname == "/forgot-password" ||
    pathname == "/verify-sent-code" ||
    pathname == "/new-password" ||
    pathname == "/reset-successful";

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
        showMobileSideBar,
        setShowMobileSideBar,
        filters,
        setFilters,
        AreasToHideMobileNavBar,
        showDeleteSubmissionModal,
        setShowDeleteSubmissionModal,
        showDeleteAccountModal,
        setShowDeleteAccountModal,
        showDeactivateAccountModal,
        setShowDeactivateAccountModal,
        // the profile photo upload
        selectedFile,
        setSelectedFile,
        imageURL,
        setImageURL,
        upload,
        setUpload,
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
