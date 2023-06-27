import * as types from "./actionTypes"
import axios from "axios"

const getDataRequest=() => {
    return{
        type: types.GET_DATA_REQUEST
    }
}

const getDataSuccess=(payload) => {
    return{
        type: types.GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure= () =>{
    return{
        type: types.GET_DATA_FAILURE
    }
}

const getData=(page,filter)=>(dispatch)=>{
    console.log("Pageeee",page)
        dispatch(getDataRequest())
    return axios.get(`https://api.spacexdata.com/v3/capsules?offset=${page}&limit=8&status=${filter}`)
    .then((r)=>{
        dispatch(getDataSuccess(r.data))
        console.log(r.data)
    })
    .catch((e)=>{
        dispatch(getDataFailure(e))
    })
  }

export {getData,getDataSuccess}


