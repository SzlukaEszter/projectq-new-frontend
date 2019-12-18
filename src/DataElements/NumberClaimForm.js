import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";



class GroupedDropDown extends Component{

    render() {
        const locations = this.props.officeLocations.map((location) =>
            <option value={location}>{location}</option>);

        const caseTypes = this.props.casetypes.map((caseType) =>
            <option value={caseType}>{caseType}</option>);

        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridOffice">
                        <Form.Label>Select Office</Form.Label>
                        <Form.Control as="select">
                            {locations}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCase">
                        <Form.Label>Select Case</Form.Label>
                        <Form.Control as="select">
                            {caseTypes}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Get Your Number!
                </Button>
            </Form>
        );
    }
}

export default GroupedDropDown;
GroupedDropDown.propTypes = {
    officeLocations: PropTypes.array.isRequired,
    casetypes: PropTypes.array.isRequired
};