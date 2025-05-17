import React from 'react'
import CustomTh from './CustomTh'
import LoadingTableData from '../Loading/LoadingTableData';
import ServerPagination from './Pagination/Server/ServerPagination';
import LocalPagination from './Pagination/Local/LocalPagination';
import { EditIcon, EyeIcon, RemoveIcon } from '../../Constant/Icons/Icon';
import { useNavigate } from 'react-router-dom';

export default function CustomTable({ TH, data, paginationType, pagination, apiHit, handleClick, loading, header, json, screen, fileName, EnableAction, handleDelete, EditUrl, ViewUrl }) {
  const navigate = useNavigate()
  const handleEdit = (index, ele) => {
    var tu = EditUrl + ele?._id
    navigate(tu)
  }
  const handleView = (index, ele) => {
    console.log(index, ele);

  }
  
  // const handleDelete = (index, ele) => {
  //   console.log(index, ele);

  // }

  const ActionButton = ({index, ele}) => {

    return <td className='text-center p-0'>
      {EnableAction?.edit ? <button className="btn h-9 w-9 rounded-full p-0 font-medium " onClick={() => handleEdit(index, ele)}>{EditIcon}</button> : null}
      {EnableAction?.view ? <button className="btn h-9 w-9 rounded-full p-0 font-medium text-primary" onClick={() => handleView(index, ele)}>{EyeIcon}</button> : null}
      {EnableAction?.delete ? <button className="btn h-9 w-9 rounded-full p-0 font-medium text-error" onClick={() => handleDelete(index, ele)}>{RemoveIcon}</button> : null}
    </td>
  }

  return (
    <div className='card'>
      {/* {header ? <CustomHeader defaultDropdown={defaultDropdown} TH={TH} json={json} apiHit={apiHit} screen={screen} data={data} fileName={fileName} dateFilter={dateFilter} districtKey={districtKey} packageKey={packageKey} /> : null} */}
      <div className='overflow-x-auto'>
        <table className={`is-hoverable w-full text-left ${paginationType === 'server' ? 'overflow-x-auto' : 'overflow-hidden'} `}>
          <thead><CustomTh TH={TH} paginationType={paginationType} /></thead>
          <tbody style={{ maxHeight: 550 }}>
            {loading ? <tr><td colSpan={TH?.length < 12 ? TH?.length : 12}><LoadingTableData /></td></tr> :
              (data)?.map((ele, index) => (
                <tr key={index} className='cursor-pointer'>
                  {TH?.map((obj, j) => {
                    return obj.status && obj?.serverKey !== 'Action' ? <td key={j} style={{ textAlign: obj?.overrideClass }} className={`${obj?.className ? obj?.className : 'text-center'} py-4`}>
                      <label className={ele?.[obj.className]} onClick={obj?.serverKey === 'Action' && handleClick ? (event) => handleClick(ele, event) : null}>{ele?.[obj.serverKey] || ele?.[obj.serverKey] !== '' && ele?.[obj.serverKey] !== undefined ? obj?.suffix ? ele?.[obj?.serverKey] + [obj?.suffix] : ele?.[obj?.serverKey] : '---'}</label>
                    </td> : obj.status ? <ActionButton ele={ele} index={index} /> : null
                  })}
                </tr>
              ))
            }
            {!loading && !data?.[0] && paginationType !== 'local' ? <tr className='text-center'><td colSpan={12}><label className='w-full font-bold tracking-wide text-lg m-5'>No Data Found</label></td></tr> : null}
          </tbody>
        </table>
      </div>
      <div>{pagination?.totalPages ? paginationType === 'server' ? <ServerPagination pagination={pagination} apiHit={apiHit} /> : <LocalPagination pagination={pagination} apiHit={apiHit} /> : null}</div>

    </div>
  )
}
