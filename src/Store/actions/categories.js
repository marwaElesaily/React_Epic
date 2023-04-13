
import axiosInstance from '../../axiosConfig/instanc';


export default function changeCategories(){


    return (dispatch)=>{

        axiosInstance.get("/Category").then((res) => {
            console.log(res.data);
              dispatch({type:'SET_CATEGORIES',payload:res.data})
            
        }).catch((err) => {

            console.log(err);
        })
    }
}