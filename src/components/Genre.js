import React from 'react';

function Genre(products){
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow ">
                    <div className="card-body">
                        {products.Cámaras} <br />
                        {products.Trípodes} <br />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;