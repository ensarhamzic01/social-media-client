import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const linkClickHandler = () => {
    dispatch(modalActions.hide());
  };
  return (
    <Link
      to={`/profile/${user.id}`}
      style={{ color: "black", textDecoration: "none" }}
      onClick={linkClickHandler}
    >
      <div className="d-flex m-4">
        <div>
          <ProfilePicture url={user.pictureUrl} width={80} />
        </div>
        <div
          style={{
            marginLeft: "25px",
          }}
        >
          <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0" }}>
            {user.firstName} {user.lastName}
          </p>
          <p style={{ fontSize: "1.4rem", margin: "0" }}>
            username: {user.username}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default User;
