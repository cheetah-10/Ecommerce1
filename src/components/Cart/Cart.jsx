import React from 'react'
import useQueryCart from '../../Hooks/useQueryCart'
import { clearCartApi, deleteCartApi, getCartApi, updateCartApi } from '../../APIs/cartApi'
// import Loading from './Loading'
import useMutationCart from '../../Hooks/useMutationCart'
import { Link } from 'react-router-dom'
export default function Cart() {


  let { data, isLoading, isError, error } = useQueryCart('cart', getCartApi)

  let { mutate: delmutate } = useMutationCart(deleteCartApi)
  let { mutate: updatemutate } = useMutationCart(updateCartApi)
  let { mutate: clearmutate} = useMutationCart(clearCartApi)
  
 
  if (isError || !data?.data?.totalCartPrice)
    return <h2>cart is empty</h2>

  if (isLoading)
    return <div className="loader"></div>


if(data?.data?.totalCartPrice)
  return (
    <div className='p-10 m-auto rounded bg-gray-100'>
        <div className="flex justify-between">
        <h1 className='text-3xl'>Cart Shop</h1>
        <Link to='/payment'><button className='px-5 py-3 text-white rounded bg-blue-600'>check out</button></Link>
        </div>
         
        <div className="flex justify-between">
        <h1 className='my-2 bold'>total price: <span className='text-green-500 font-bold'>{data?.data?.totalCartPrice} EGP</span></h1>
        <h1 className='my-2 bold'>total number of items: <span className='text-green-500 font-bold'>{data?.numOfCartItems}</span></h1>
        </div>

      

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         
          <tbody>
            {
              data?.data?.products.map(ele => <tr key={ele?.product?._id} className=" border-b  dark:border-gray-200">
                <td className="p-3">
                  <img src={ele?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={ele?.product?.title} />
                  
                </td>
                <td className="py-4 font-semibold flex-col flex text-gray-900">
                  <h1 className="item font-bold">{ele?.product?.title}</h1>
                  <div>{ele?.price} EGP</div>
                  <button onClick={() => delmutate(ele?.product?._id)} href="#" className="font-medium w-fit text-red-700 py-2 dark:text-red-500 "><i class="fa-solid fa-trash"></i> Remove</button>

                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => ele?.count == 1 ? delmutate(ele?.product?._id) : updatemutate({ id: ele?.product?._id, count: ele?.count ? ele?.count - 1 : ele?.count })} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-700 border border-green-300 rounded focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 dark:text-gray-400  dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                      </svg>
                    </button>
                    <div>
                      <span>{ele?.count}</span>
                    </div>
                    <button
                      onClick={() => updatemutate({ id: ele?.product?._id, count: ele?.count + 1 })} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500  border border-green-500 rounded focus:outline-none focus:ring-4 focus:ring-gray-200  dark:text-gray-400  dark:hover:bg-gray-200  dark:focus:ring-gray-700" type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              
              </tr>)
            }

          </tbody>
        </table>
      </div>
      <button className='border-green-500 border px-5 py-3 my-4 rounded' onClick={clearmutate}>Clear Your Cart</button>


    </div>
  )

}
