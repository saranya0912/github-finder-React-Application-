import React from 'react';
import PropTypes from 'prop-types';

const Repoitems = ({repo}) =>
{
    return(
        <div className= 'card'>
            <h4> 
                <a href={repo.html_url}>{repo.name} </a>
            </h4>


        </div>
    )

}

Repoitems.propTypes = {
    repo:PropTypes.object.isRequired
}

export default Repoitems