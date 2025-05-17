import { GetDistrictConditionData } from "../../../Utils/Utils"

export const CompileDefaultData = (data) =>{
    const MyPromiss = new Promise((resolve, reject)=>{
        var td = GetDistrictConditionData(data)
        if(GetDistrictConditionData(data)){
            var tempArr = [{title : 'All', status : true, value : 'All', label : 'All', serverKey : 'All'}]
            td?.map(Obj=> tempArr.push({ title : Obj, status : true, value : Obj,  label : Obj, serverKey : Obj.toUpperCase()}))
            resolve(tempArr)
        }
    })

    return MyPromiss
}

export const CompileDropdownData = (data, searchBy) =>{
    const MyPromiss = new Promise((resolve, reject)=>{

        if(data){
            var tempArr = [{title : 'All', status : true, value : 'All', label : 'All', serverKey : 'All'}]
            data?.map(Obj=> tempArr.push({ title : Obj[searchBy], status : true, value : Obj[searchBy],  label : Obj[searchBy], serverKey : Obj[searchBy]}))
            resolve(tempArr)
        }
        resolve([])
    })

    return MyPromiss
}