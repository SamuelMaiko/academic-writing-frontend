import React, { useEffect, useRef } from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import Home from "./app/Home/page";
import NotFound from "./app/NotFound/page";
import AssignedWork from "./app/AssignedWork/page";
import NavBar from "./app/Home/components/NavBar";
import SideBar from "./app/Home/components/SideBar";
import UptakenWork from "./app/UptakenWork/page";
import History from "./app/History/page";
import Bookmark from "./app/Bookmark/page";
import UserManagement from "./app/Admin/UserManagement/page";
import WorkManagement from "./app/Admin/WorkManagement/page";
import CreateUsers from "./app/Admin/CreateUsers/page";
import CreateWork from "./app/Admin/CreateWork/page";
import SpecificUserDetails from "./app/Admin/SpecificUserDetails/page";
import EditUsers from "./app/Admin/EditUsers/page";
import EditWork from "./app/Admin/EditWork/page";
import DeactivateUserModal from "./app/Admin/UserManagement/components/DeactivateUserModal";
import DeleteWorkModal from "./app/Admin/WorkManagement/components/DeleteWorkModal";
import DeleteUserModal from "./app/Admin/UserManagement/components/DeleteUserModal";
import Revisions from "./app/Revisions/page";
import RevisionsDetails from "./app/RevisionsDetails/page";
import SubmitWork from "./app/SubmitWork/page";
import Profile from "./app/Profile/page";
import EditInfoModal from "./app/Profile/components/EditInfoModal";
import { useStateShareContext } from "./Context/StateContext";
import WorkDetail from "./app/WorkDetail/page";
import Settings from "./app/Settings/page";
import Footer from "./app/Footer/page";
import Notifications from "./app/Notifications/page";
import EditPFPModal from "./app/Profile/components/EditPFPModal";
import DeleteProfilePhotoModal from "./app/Profile/components/DeleteProfilePhotoModal";
import RevokeWorkModal from "./app/WorkDetail/components/RevokeWorkModal";
import SideBarModal from "./MobileView/SideBar/SideBarModal";
import TransparentModal from "./MobileView/SideBar/TransparentModal";
import ChangePassword from "./app/ChangePassword/page";
import Submissions from "./app/Submissions/page";
import SubmissionsDetail from "./app/SubmissionsDetail/page";
import DeleteSubmissionModal from "./app/Submissions/components/DeleteSubmissionModal";
import Analytics from "./app/Analytics/page";
import DeleteAccountModal from "./app/Settings/components/DeleteAccountModal";
import DeactivateAccountModal from "./app/Settings/components/DeactivateAccountModal";
import ScrollToTop from "./SharedComponents/ScrollToTop ";

const EntryPoint = () => {
  const { showEditInfoModal, darkMode, showEditPFPModal } =
    useStateShareContext();
  const { pathname } = useLocation();
  const { setFilters } = useStateShareContext();
  // storing the filters in local storage if none during app launch
  useEffect(() => {
    const filterAvailable = JSON.parse(localStorage.getItem("filters"));
    if (!filterAvailable) {
      setFilters([
        { type: "words", active: false, value: "2000", title: "2000 words" },
        { type: "words", active: false, value: "1500", title: "1500 words" },
        {
          type: "deadline",
          active: false,
          value: "today",
          title: "Deadline Today",
        },
        {
          type: "deadline",
          active: false,
          value: "tomorrow",
          title: "Deadline Tomorrow",
        },
      ]);
    }
  }, []);

  const scrollableRef = useRef(null);
  return (
    <>
      <div
        // preventing scrolling on modal open
        className={`${
          showEditInfoModal | showEditPFPModal ? " overflow-hidden" : ""
        }  flex justify-between gap-0 font-opensans ${
          darkMode ? "dark" : ""
        } dark:bg-darkMode-bars h-[calc(100vh-0.5rem)] w-full overflow-hidden`}
      >
        <div className=" h-full w-fit overflow-y-scroll  overflow-x-hidden">
          <SideBar />
        </div>
        <div
          ref={scrollableRef}
          className=" w-full h-full flex-1 overflow-y-scroll scrollble"
        >
          <ScrollToTop scrollableRef={scrollableRef} />
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/assigned-work" element={<AssignedWork />} />
            <Route path="/uptaken-work" element={<UptakenWork />} />
            <Route path="/revisions" element={<Revisions />} />
            <Route path="/revisions/:id" element={<RevisionsDetails />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/work/:id/submit" element={<SubmitWork />} />
            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/submissions/:id" element={<SubmissionsDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/settings/change-password"
              element={<ChangePassword />}
            />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/work" element={<WorkManagement />} />
            <Route path="/admin/users/new" element={<CreateUsers />} />
            <Route path="/admin/work/new" element={<CreateWork />} />
            <Route path="/admin/users/:id/edit" element={<EditUsers />} />
            <Route path="/admin/work/:id/edit" element={<EditWork />} />
            <Route path="/admin/users/:id" element={<SpecificUserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <div className={` overflow-x-hidden `}> */}
          <Outlet />
          <Footer />
          {/* </div> */}
        </div>
      </div>
      <div className={`${darkMode ? "dark" : ""}`}>
        <DeactivateUserModal />
        <DeleteUserModal />
        <DeleteWorkModal />
        <EditInfoModal />
        <Settings />
        <EditPFPModal />
        <DeleteProfilePhotoModal />
        <RevokeWorkModal />
        <SideBarModal />
        <TransparentModal />
        <DeleteSubmissionModal />
        <DeleteAccountModal />
        <DeactivateAccountModal />
      </div>
    </>
  );
};

export default EntryPoint;
