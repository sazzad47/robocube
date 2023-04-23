import React from 'react';
import { Col, Row } from 'reactstrap';
import MarqueeMessage from './MarqueeMessage';

const Section = () => {

    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <MarqueeMessage/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;