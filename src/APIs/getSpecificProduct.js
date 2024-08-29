import axios from "axios";




export async function getSpecificProduct(id){
    try {
        let {data} = await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        return data
    } catch (error) {
        return error?.message
    }
  
}



