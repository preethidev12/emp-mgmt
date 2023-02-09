import React from 'react'
import {useNavigate} from "react-router-dom"

const EmployeeList = () => {

  const navigate = useNavigate();
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12 '>
            <button onClick={() => navigate("/addEmployee")}className='bg-slate-600 rounded shadow border-b mx-6 my-2 px-2 py-2 text-white'>
              Add Employee
            </button>
        </div>
        <div className='flex shadow border-b my-3'>
           <table className='min-w-full'>
              <thead className='bg-gray-200'>
                <tr>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>FirstName</th>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>LastName</th>
                    <th className='text-left font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>Email</th>
                    <th className='text-right font-medium uppercase py-3 px-6 text-gray-20 tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                    <td className='text-left'> <div className='text-sm px-5'>chinna</div> </td>
                    <td className='text-left'> <div className='text-sm px-5'>Annepu</div> </td>
                    <td className='text-left '> <div className='text-sm px-5'>chinna@gmail.com</div> </td>
                    <td className='text-left '> <div className='text-sm px-5'>#</div> </td>
                </tr>
              </tbody>
           </table>  
        </div>    
    </div>
  )
}

export default EmployeeList