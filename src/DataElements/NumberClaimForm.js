import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class NumberClaimForm extends Component {

    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px'
        };
    }

    render() {
        const locations = this.props.officeLocations.map((location) =>
            <option value={location}>{location}</option>);

        const caseTypes = this.props.casetypes.map((caseType) =>
            <option value={caseType}>{caseType}</option>);

        return (
            <div className="FormContainer" style={this.getStyle()}>
            <Form>
                <Form.Group controlId="formOffice">
                    <Form.Label>Select Office</Form.Label>
                    <Form.Control as="select">
                        {locations}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formCase">
                    <Form.Label>Select Case</Form.Label>
                    <Form.Control as="select">
                        {caseTypes}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Get Your Number</Button>
            </Form>
            </div>
        );
    }
}

export default NumberClaimForm;
NumberClaimForm.propTypes = {
    officeLocations: PropTypes.array.isRequired,
    casetypes: PropTypes.array.isRequired
};