import React from "react";

function ClubDetail({ club }) {
  return (
    <div className="container__Clubdetail">
      <div className="clubdetail">
        <div>
          <div>
            {" "}
            <span className="text">Name:</span> {club.name}
          </div>
          <div>
            {" "}
            <span className="text">Code:</span> {club.code}
          </div>
          <div>
            {" "}
            <span className="text">Country:</span> {club.country}
          </div>
          <div>
            {" "}
            <span className="text">Founded:</span>
            {club.founded}
          </div>
        </div>
      </div>
      <img className="logo__club" src={club.logo} />
    </div>
  );
}

export default ClubDetail;
