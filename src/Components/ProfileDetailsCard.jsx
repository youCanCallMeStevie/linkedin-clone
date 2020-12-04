import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../Styles/ProfileDetailsCard.css";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfileDetailsButtons from "./ProfileDetailsButtons";
import DottedBox from "./DottedBox";
import {Link} from "react-router-dom"

function ProfileDetailsCard({ user,users,handleChangeImage }) {
  return (
    <Row className="profileDetails_card">
      <div className="profile Details_card__profile-bgr">
        <PhotoCameraIcon />
        <div className="profileDetails_card__profile-img">
        <label for="file-input">
          <img className="img-fluid" src={user?.image} />
          </label>
        </div>
        <input id="file-input" type="file" className="d-none" onChange={(e)=>handleChangeImage(e)}/>
      </div>

      <div className="profileDetails_card__body">
        <ProfileDetailsButtons />
        <div className="profileDetails__card-body-details mb-3">
          <h4>
            {user?.name} {user?.surname}
          </h4>
          <h5>{user?.title}</h5>
          <h6>
            {user?.area} -{" "}
          <Link to="/connections">
            <span className="blue-primary-color font-weight-bold">
              {users && users.length} Connections
            </span>
            </Link>
          </h6>
          <span className="blue-primary-color font-weight-bold">
            Contact Info
          </span>
        </div>
        <DottedBox
          textBold="Show recruiters you're open to work"
          text="- you control who sees this"
          linkText="Get Started"
        />
      </div>
    </Row>
  );
}

export default ProfileDetailsCard;
