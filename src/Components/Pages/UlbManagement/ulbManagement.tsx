/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Sidebar from '../../Common/Sidebar/sidebar'
import { Button, Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Row, Table, UncontrolledDropdown } from 'reactstrap'
import { MoreVertical, Edit, FileText, Archive, Trash, X, ChevronDown, ChevronUp, Plus } from 'react-feather'
import { getUlbHeader, getULBdata } from './../../Redux/ulbManagementapi'
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import axios from './../../Lib/apiCall'
const UlbManagement = () => {
    const [sortName, setSortName] = useState('')
    const [sortValue, setSortValue] = useState('desc')
    const [currentSortId, setCurrentSortId] = useState('')
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [parPage, setParPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(getUlbHeader())
    }, [])


    const handleSort = (e: any, sortBy: any) => {
        let value
        if (sortName === sortBy.accessor) {
            value = (sortValue === 'desc') ? 'asc' : 'desc'
            setSortName(sortBy.accessor)
            setSortValue(value)
        } else {
            setSortName(sortBy.accessor)
            setSortValue('desc')
            value = 'desc'
        }
        setCurrentSortId(sortBy.accessor)
        const payload = {
            field: "sorting",
            query: searchValue,
            sortingName: sortBy.accessor,
            sortingValue: value,
            page: parPage,
            limit: rowsPerPage
        }
        // dispatch(getULBdata(payload))
    }

    useEffect(() => {
        dispatch(getUlbHeader())
        const payload = {
            field: "all",
            query: searchValue,
            sortingName: sortName,
            sortingValue: sortValue,
            page: parPage,
            limit: rowsPerPage
        }
        dispatch(getULBdata())
    }, [])
    const store: any = useSelector((state: any) => state)
    const columns = store.ulbManagementapi.ulbHeaderData
     const ULBstore = store.ulbManagementapi.ulbData.data?.ulbs
    console.log(ULBstore)
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ minHeight: "100vh", backgroundColor: '#f6f6f6', width: "80%",}}>
                <div style={{ padding: '25px' }}>
                    <Card style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', height: '60px', backgroundColor: '#fff', borderRadius: '5px' }}>
                    </Card>
                    <h2 style={{ color: '#636363', fontWeight: '500' }}>ULB Management</h2>
                    <Card style={{ boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', marginBottom: '2rem', padding: '20px', marginTop: '-5px', borderRadius: "6px",minHeight:"60vh",backgroundColor:'#f6f6f6' }}>
                        <div className='align-items-end row' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Col className='d-flex align-items-center' sm='6' style={{ marginRight: '50px', marginTop: '20px' }}>
                                <Label className='me-25' for='search-input'>
                                    {('Search')}
                                </Label>
                                <Input
                                    style={{ width: '120px', height: '35px', marginLeft: "5px", borderRadius: '6px', border: '1px solid #d8d6de', textAlign: 'center' }}
                                    className='dataTable-filter mb-0'
                                    type='text'
                                    placeholder={('ULB Name')}
                                    id='search-input'
                                // value={searchValue}
                                // onChange={handleFilter}
                                />
                            </Col>
                            <Button style={{ width: '150px', height: '60px', borderRadius: '6px', border: 'none', backgroundColor: '#28c76f', color: '#fff', fontSize: '16px' }} type="submit" className="btn btn-primary">Add a New <br />ULB</Button>
                        </div>
                        <div className='react-dataTable' style={{ boxSizing: 'border-box', width: '100%' }}>
                            <div style={{ overflowX: 'auto', maxHeight: '400px', marginTop: "20px", width: '100%' }}>
                                <table className='table table-bordered' style={{ width: "100%" }}>
                                    <thead style={{ backgroundColor: '#f3f2f7', width: '100%' }}>
                                        <tr style={{ display: 'table-row', width: '100%' }}>
                                            {columns.length !== 0
                                                ? columns.map((item: any, index: any) => (
                                                    <th
                                                        key={index}
                                                        style={{ display: 'table-cell', width: 'auto' }}
                                                    >
                                                        {item.header}
                                                        {item.header === 'Action' ? (
                                                            ''
                                                        ) : (
                                                            <>
                                                                {' '}
                                                                {currentSortId === item.accessor &&
                                                                    sortValue === 'asc' ? (
                                                                    <ChevronUp onClick={(e) => handleSort(e, item)} />
                                                                ) : (
                                                                    <ChevronDown onClick={(e) => handleSort(e, item)} />
                                                                )}
                                                            </>
                                                        )}
                                                    </th>
                                                ))
                                                : []}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!!ULBstore && ULBstore.length !== 0 ? ULBstore.map((val: any, i: any) => {
                                            return <tr key={i}>{
                                                columns.map((accesser: any, h: any) => {
                                                    switch (accesser.accessor) {
                                                        case "logo":
                                                            return val["logo"] === null ? <td>_</td> : <td><a style={{ color: "#006400" }} href={`${val["logo"]}`}>{('View')}</a></td>
                                                        case "updatedAt":
                                                            return val["updatedAt"] === null ? "_" : <td style={{ width: '100px' }} key={h}>{moment(val["updatedAt"]).format("lll")}</td>
                                                        case "actionButton":
                                                            return <div className='d-flex align-items-center justify-content-center'>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle className='pe-1' tag='span'>
                                                                        <MoreVertical size={15} style={{ cursor: "pointer" }} />
                                                                    </DropdownToggle>
                                                                    <DropdownMenu end>
                                                                      
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        default:
                                                            return <td key={h} className='text-nowrap'>{val[accesser.accessor] === null || val[accesser.accessor] === "null" ? "_" : val[accesser.accessor]}</td>
                                                    }
                                                })
                                            }
                                            </tr>
                                        }) : []}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default UlbManagement