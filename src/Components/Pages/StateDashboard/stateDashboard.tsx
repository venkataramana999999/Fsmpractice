import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar/sidebar";
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from "reactstrap";
import { Grid } from "@material-ui/core";

const StateDashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ minHeight: "100vh", backgroundColor: '#f6f6f6', width: "80%" }}>
        <div style={{ padding: '25px' }}>
          <Card style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', height: '60px', backgroundColor: '#fff', borderRadius: '5px' }}>
          </Card>
          <h2 style={{ color: '#636363', fontWeight: '500' }}>State Dashboard</h2>
          <div style={{ display: 'flex', padding: '25px' }}>
            <Grid container spacing={4}>
              <Card style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', marginBottom: '2rem', padding: '20px', marginTop: '-5px', marginLeft: '-10px', borderRadius: "6px",height:'110px' }}>
                <CardHeader className="fw-900">Filter by</CardHeader>
                <div style={{ display: 'flex' }}>
                  <CardBody style={{ marginTop: '25px', display: 'flex', flexDirection: 'column' }}>
                    <Label htmlFor='sort-select align-items-start fw-bolder'>{('Days')}</Label>
                    <Input
                      className='dataTable-select'
                      type='select'
                      id='sort-select'
                      style={{ width: "190px", height: '35px', marginTop: '6px', borderRadius: '5px', border: '1px solid #d8d6de', }}
                    // value={selectDays}
                    // onChange={e => handleDaysSelect(e)}
                    >
                      <option value={"Current Day"}>{('Current Date')}</option>
                      <option value={"7 Days"}>7 {('days')}</option>
                      <option value={"30 Days"}>30 {('days')}</option>
                      <option value={"1 Year"}>1 {('Year')}</option>
                      <option value={"Till Date"}>{('TillDate')}</option>
                    </Input>
                  </CardBody>
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px', marginLeft: '20px' }}>
                    <Label className='form-label required' htmlFor='date'>
                      {('Date')}
                    </Label>
                    <Input
                      style={{ width: '50px', height: '30px', marginTop: '6px' }}
                      id='date'
                      name='date'
                      // value={localStorage.getItem('sdFilterDate')}
                      disabled={true}
                      required
                    />
                  </div>
                </div>
              </Card>
              <Col sm={4}>
                <Card style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', marginBottom: '2rem', padding: '20px', marginTop: '5px', marginLeft: '30px', borderRadius: "6px", width: '130%',height:"80px" }}>
                  <CardHeader > {('FilterByCategory')}</CardHeader>
                  <CardBody>
                    <div className='d-flex flex-column'>
                      <Label htmlFor='sort-select align-items-start fw-bolder'></Label>
                      <Input
                        className='dataTable-select'
                        type='select'
                        id='sort-select'
                        style={{ backgroundSize: '15px 14px', height: '35px', borderRadius: '5px', border: '1px solid #d8d6de', width: '100%', marginTop: '30px', padding: '0.571rem 1rem 0.571rem 1rem' }}
                        // value={selectCategory}
                        // onChange={e => handleSelectCategory(e)}
                      >
                        <option value={1}>FSTP</option>
                        <option value={2}>STP</option>
                      </Input>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateDashboard;
