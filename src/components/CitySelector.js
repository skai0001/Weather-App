import React, {Fragment, useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');


    const handleChange = (e) => {
        setCity(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city)
    }

    console.log(alert);

    return (
         <Fragment>
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
         </Fragment>

    );
};

export default CitySelector;


