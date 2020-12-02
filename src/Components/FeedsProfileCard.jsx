import React from 'react'
import { Container, Col, Row } from "react-bootstrap";


function FeedsProfileCard({user,users}) {
    return (
      <Row className="feedProfileCard">
          <div className="profileDetails_card__profile-bgr">
            <div className="profileDetails_card__profile-img">
              <img className="img-fluid" src={user?.image} />
            </div>
          </div>

          <div className="profileDetails_card__body">
            <div className="profileDetails__card-body-details mb-3">
              <h4>
                {user?.name} {user?.surname}
              </h4>
              <h5>{user?.title}</h5>
              <h6>
                {user?.area} -{" "}
                <span className="blue-primary-color font-weight-bold">
                  {users && users.length} Contacts
                </span>
              </h6>
              <span className="blue-primary-color font-weight-bold">
                Contact Info
              </span>
            </div>
          </div>
      </Row>
    );
}

export default FeedsProfileCard
