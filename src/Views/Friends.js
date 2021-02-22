import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Player from "../Components/Player";
import { Context } from "../store/appContext";

function Friends(props) {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (store.profile === null) history.push("/login");
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md">
          <div className="list-group">
            {!!store.userdb &&
              store.userdb.map((valor, index) => {
                let profileID = `/profile/${valor.user_id}`;
                return (
                  <Link key={index} className="list-group-item list-group-item-action d-flex justify-content-start" to={profileID} >
                    <img className="rounded-circle" src={valor.photo} style={{"width": "100px"}}/> &nbsp; <h4 className="mt-4 nombrePeople">{valor.name}</h4>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;
