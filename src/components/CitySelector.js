import React, {Fragment, useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

   const onchange = (e) => {setCity(e.target.value)}
   const onSubmit = () => {onSearch(city)}

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
                        placeholder="Enter city"
                        onChange={onchange}
                        value={city}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={onSubmit}>Check Weather</Button>
                </Col>
            </Row>
        </Fragment>
    );
};

export default CitySelector;
