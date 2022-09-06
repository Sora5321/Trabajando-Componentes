import React from 'react';
import ContentRowMovies from './ContentRowMovies.jsx';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb.js';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<ContentRowMovies 

					datos = {[
						{
							title: 'Movies in Data Base',
							number: 21,
							color: 'success',
							icon: 'fa fa-film'
						},
						{
							title: 'Total awards',
							number: 79,
							color: 'primary',
							icon: 'fa fa-award'
						},
						{
							title: 'Actors quantity',
							number: 10,
							color: 'warning',
							icon: 'fa fa-user'
						}
					]}

					/>

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">

						{/*<!-- Last Movie in DB -->*/}
						
						<LastMovieInDb />

						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />


					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;