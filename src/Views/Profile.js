import React from 'react'
import '../App.css';

function Profile() {
    return (
        <div className="p-2">
            <div className="card cardprofile d-flex justify-content-center m-auto">
                <div className="card-header bg-success">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="photoprofile"></div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="text-white"><strong></strong></div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-profile">Marisleidis</li>
                            <li class="list-group-item list-group-item-profile">marisleidis84@gmail.com</li>
                            <li class="list-group-item list-group-item-profile">Gustos Musicales: Pop</li>
                            <button type="button" className="btn btn-success mt-5">Agregar amigo</button>
                        </ul>
                        
                </div>
            </div >
        </div>
    )
}

export default Profile
