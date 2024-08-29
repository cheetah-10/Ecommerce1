// import React, { useState , useEffect} from "react";
// import style from './CategoriesProducts.module.css'
// import { useParams } from "react-router-dom"
// import Categories from "../Categories/Categories";
// export default function CategoriesProducts() {
//     let { id } = useParams()

//     let [supProduct,setsupProduct]=useState([]) 
//     let [imgSrc, setimgSrc] = useState('')
//     let [msg, setmsg] = useState('')
//     let [loading, setloading] = useState(false)
    
//     async function subCategory(id) {
//         try {
//             let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
//             return data
//         } catch (error) {
//             return error?.message
//         }
     
//     }
//     async function getCategoriesProducts() {
//         setloading(true)
//         let data = await subCategory(id)

//         console.log(data);


//         if (data?.data) {
//             setsupProduct(data.data)
//             setmsg('')
//             setloading(false)
//         }
//         else {
//             setmsg(data)
//             setloading(false)
//         }

//     }

  

//     useEffect(() => {
//         getCategoriesProducts()


//     }, [])

//     // if (loading) {
//     //     return <div className="loaderContainer"><div className="loader"></div></div>
//     // }
//     // if (msg) {
//     //     return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>
//     // }
//     // else {
//     return (
//         <Categories></Categories>
//     )
// }
// // }

