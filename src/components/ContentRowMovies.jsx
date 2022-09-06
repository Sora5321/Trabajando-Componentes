import React from 'react';

function ContentRowMovies(props) {
    return (
        <React.Fragment>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">
            {/*<!-- Movies in Data Base -->*/}
            
            {
                props.datos.map((dato, index) => {
                    return (
                        <div className="col-md-4 mb-4" key={dato + index}>
                            <div className={`card border-left-${ (dato.color) ? dato.color : "warning"} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${ (dato.color) ? dato.color : "warning"} text-uppercase mb-1`}>{(dato.title) ? dato.title : 'Titulo'}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{(dato.number) ? dato.number : 0}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`${(dato.icon) ? dato.icon : 'fa fa-user'} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }





            </div>


            {/*<!-- End movies in Data Base -->*/}
        </React.Fragment>
    );
}

export default ContentRowMovies;