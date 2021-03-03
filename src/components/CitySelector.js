import React, {Fragment, useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import Alert from './Alert';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [alert, setAlert] = useState(false);


    const handleChange = (e) => {
        setCity(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city === '') {
            console.log('inside check', alert);
        }
        console.log('inside submit', alert);
        onSearch(city)
    }

    console.log(alert);

    return (
        /* <Fragment>
             <Row>
                 <Col>
                     <h1>Search your city</h1>
                 </Col>
             </Row>
             <Row>
                 <Col xs={4}>
                     <FormControl
                         required
                         placeholder="Enter city"
                         type="text"
                         onChange={handleChange}
                         value={city}
                     />
                 </Col>
             </Row>
             <Row>
                 <Col>
                     <Button onClick={handleSubmit}>Check Weather</Button>
                 </Col>
             </Row>
         </Fragment>*/
        <div className="container">
            {!alert ? <Alert alert={alert}/> : null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label><h3>Search your city</h3></label>
                    <input className="form-control" type="text" placeholder="Enter City" value={city}
                           onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Check Weather</button>
            </form>
        </div>
    );
};

export default CitySelector;


