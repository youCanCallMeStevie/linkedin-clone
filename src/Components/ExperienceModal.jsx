import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

export class ExperienceModal extends React.Component {
  state = {
    validated: false,
    setValidated: false,
  };

  updateRegistration = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
    }
  };
  render() {
    return (
      <div>
        <Container style={{ padding: "8rem" }}>
          <Form
            className="text-white mt-5"
            noValidate
            validated={this.state.validated}
            onSubmit={this.updateRegistration}
          >
                <Form.Group>
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ex: Retail Sales Manager"
                    id="role"
                    role="role"
                    onChange={this.updateRegistration}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Employment Type</Form.Label>
                  <Form.Control
                    as="select"
                    id="EmploymentType"
                    EmploymentType="EmploymentType"
                    custom
                  >
                    <option value="0">Full-Time</option>
                    <option value="1">Part-Time</option>
                    <option value="2">Self Employed</option>
                    <option value="3">Freelance</option>
                    <option value="4">Contract</option>
                    <option value="5">Internship</option>
                    <option value="6">Apprenticeship</option>
                  </Form.Control>
                  <Form.Text className="text-muted">
                    Country-specific employment types
                  </Form.Text>
                </Form.Group>
            <Form.Group>
              <Form.Label>Company *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: Microsoft"
                id="company"
                company="company"
                onChange={this.updateRegistration}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
              required
                type="text"
                placeholder="Ex: London, United Kingdom"
                id="area"
                area="area"
                onChange={this.updateRegistration}
              />
            </Form.Group>
            <Form.Group id="currentlyWorking">
              <Form.Check
                type="checkbox"
                label="I am currently working in this role"
              />
            </Form.Group>
            <Row>
                <Col>
                <Form.Label>Start Date *</Form.Label>
                <Form.Control
                  required
                  as="select"
                  id="startDate"
                  startDate="startDate"
                  custom
                >
                  <option value="0">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Control>
                </Col>
                <Col>
                <Form.Control
                  required
                  as="select"
                  id="startYear"
                  startYear="startYear"
                  custom
                >
                  <option value="0">Year</option>
                  <option value="1">2020</option>
                  <option value="2">2019</option>
                  <option value="3">2018</option>
                  <option value="4">2017</option>
                  <option value="5">2016</option>
                  <option value="6">2015</option>
                  <option value="7">2014</option>
                  <option value="8">2013</option>
                  <option value="9">2012</option>
                  <option value="10">2011</option>
                  <option value="11">2010</option>
                  <option value="12">2009</option>
                  <option value="13">2008</option>
                  <option value="14">2007</option>
                  <option value="15">2006</option>
                  <option value="16">2005</option>
                  <option value="17">2004</option>
                  <option value="18">2003</option>
                  <option value="19">2002</option>
                  <option value="20">2001</option>
                  <option value="21">2000</option>
                </Form.Control>
                </Col>
                <Col>
                <Form.Label>End Date *</Form.Label>
                <Form.Control
                  required
                  as="select"
                  id="endDate"
                  startDate="endDate"
                  custom
                >
                  <option value="0">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Control>
                </Col>
                <Col>
                <Form.Control
                  required
                  as="select"
                  id="endYear"
                  startYear="endYear"
                  custom
                >
                  <option value="0">Year</option>
                  <option value="1">2020</option>
                  <option value="2">2019</option>
                  <option value="3">2018</option>
                  <option value="4">2017</option>
                  <option value="5">2016</option>
                  <option value="6">2015</option>
                  <option value="7">2014</option>
                  <option value="8">2013</option>
                  <option value="9">2012</option>
                  <option value="10">2011</option>
                  <option value="11">2010</option>
                  <option value="12">2009</option>
                  <option value="13">2008</option>
                  <option value="14">2007</option>
                  <option value="15">2006</option>
                  <option value="16">2005</option>
                  <option value="17">2004</option>
                  <option value="18">2003</option>
                  <option value="19">2002</option>
                  <option value="20">2001</option>
                  <option value="21">2000</option>
                </Form.Control>
                </Col>
                </Row>
                <Form.Group controlId="Description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                  required
                  id="description"
                  description="description"
                  as="textarea" rows={3} />
                </Form.Group>
              <Form.File id="uploadFile">
                <Form.File.Label>Upload</Form.File.Label>
                <Form.File.Input />
              </Form.File>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ExperienceModal;
