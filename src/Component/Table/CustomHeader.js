import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from '../Select/Select'
import { CompileDefaultData, CompileDropdownData } from './Promiss/CustomHeaderPromiss'
import { HitApi } from '../../Store/Action/CommonApi/ApiAction'
import { GetRoads } from '../../Constant/Api/Constant'
import { setFilter } from '../../Store/Action/Filter/FilterAction'
import FilterConstant from '../../Constant/Filter/FilterConstant'
import { setPagination } from '../../Store/Action/Pagination/Pagination'
import Download from './Download/Download'
import Flatpickr from "react-flatpickr";
import { CalenderIcon } from '../../Constant/Icon/Icon'


export default function CustomHeader({defaultDropdown,  TH, json, apiHit, screen, data, fileName, dateFilter, districtKey, packageKey  }) {
    const dispatch = useDispatch()
    const reduxUser = useSelector(state => state.AuthReducer)
    const reduxFilter = useSelector(state => state.FilterReducer)
    const reduxPagination = useSelector(state => state.PaginationReducer)
    const [districtData, setDistrictData] = useState([])
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState(Date.now())
    const [endDate, setEndDate] = useState(Date.now())
    const [show, setShow] = useState(false)

    let td = FilterConstant.find(Obj => Obj.screen === screen)

    useEffect(() => {
        if (reduxUser?.doc) {
            loadDefault()
        }
    }, [])

    const loadDefault = () => {
        CompileDefaultData(reduxUser?.doc).then((res) => {
            if (res) {
                setDistrictData(res)
            }
        })
    }

    const handleChange = (e, serverKey, searchBy) => {
        var value = e?.target?.value
        if (value !== 'All' && value !== '') {
            Object.assign(json.search, { [serverKey]: value })
        } else {
            delete json.search[serverKey]
        }
        if (apiHit) {
            apiHit()
            handleDataLoad(value, 'districtName', searchBy)
        }
    }

    const handleDataLoad = (value, serverKey, searchBy) => {
        var json = {
            page: 1,
            limit: 5000,
            search: {
                [serverKey]: value
            },
            select: 'Package_no'
        }
        setLoading(true)
        HitApi(json, GetRoads).then((res) => {
            if (res?.doc?.docs) {
                CompileDropdownData(res?.doc?.docs, searchBy).then((result) => {
                    if (result) {
                        var json = reduxFilter?.doc
                        Object.assign(json, { [searchBy]: result })
                        dispatch(setFilter(json))
                    }
                    setLoading(false)
                })
            }
        })
    }

    const handleOnChange = (value, element) => {
        if (value) {
            let childelement = element.value.find(Obj => Obj.text === value)
            var pagination = reduxPagination?.pagination
            pagination.page = 1
            dispatch(setPagination(pagination))
            if (childelement.value !== 'ALL') {
                var tp = { [element.title]: childelement.value }
                Object.assign(json.search, tp)
            } else {
                delete json.search[element.title]
            }
        }
        else {
            delete json.search[element.title]
        }
        if (apiHit !== undefined) { apiHit() }
    }

    return (
        <div className='p-5'>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    {/* <div className='grid grid-cols-5 gap-4'>
                        {
                            defaultDropdown?<>
                            <div><Select title={'District Name'} defaultText={'Select District'} option={districtData} onChange={(e) => handleChange(e, districtKey?districtKey:'districtName', 'Package_no')} /></div>
                            <div><Select loading={loading} show={true} title={'Package No'} defaultText={loading ? 'Loading Packages...' : 'Select Package No'} option={reduxFilter?.doc?.Package_no} serverKey={'districtName'} json={json} onChange={(e) => handleChange(e, packageKey?packageKey:'Package_no', 'Road_Code')} /></div>
                            </>
                            :null
                        }
                        {td?.filterType?.map((element, i) => (
                            <div key={i} className='max-w-lg'>
                                <label className="block">
                                    <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">{element.text}</h2>
                                    <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent" onChange={(e) => handleOnChange(e.target.value, element)}>
                                        <option value={''} selected> Select </option>
                                        {element.value.map((childelement, j) => <option key={j}>{childelement.text}</option>)}
                                    </select>
                                </label>
                            </div>
                        )) || null}
                    </div> */}
                </div>
                <div className='col-span-1'>
                    <Download TH={TH} data={data} screen={screen} fileName={fileName} />
                </div>
            </div>

        </div>
    )
}
