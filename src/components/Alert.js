import React from 'react'


const alert = ({error}) => {
    return(
        <div className="alert alert-primary" role="alert">
            {error}
        </div>
    )
}
export default alert;
