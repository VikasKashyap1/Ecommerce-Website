import React from 'react'
import Sidebar from '../Sidebar'

export default function AdminHome() {
     return (
          <>
               <div className="container-fluid my-3">
                    <div className="row">
                         <div className="col-md-3 col-12 mb-3">
                              <Sidebar />
                         </div>
                         <div className="col-md-5 col-12 mb-3">
                              <img src="/img/Noimg.png" className='img-fluid  ' width={"100%"} height={400} alt="img" />
                         </div>
                         <div className="col-md-4 col-12 mx-0">
                              <table className='table table-bordered mx-0'>
                                   <tbody>
                                        <tr ><th colSpan={2} className='bg-danger text-center text-light f-5 '>Admin Profile
                                        </th>
                                        </tr>
                                        <tr>
                                             <th>Username:</th>
                                             <td>vikaas_11</td>
                                        </tr>
                                        <tr>
                                             <th>Name:</th>
                                             <td>Vikas Kashyap</td>
                                        </tr>
                                        <tr>
                                             <th>Email:</th>
                                             <td>vikas@gmail.com</td>
                                        </tr>
                                        <tr>
                                             <th>Phone</th>
                                             <td className='tel:9045080163'>+91 9045080163</td>
                                        </tr>
                                        <tr>
                                             <th>Adress</th>
                                             <td className=''>A-43 sector-16 Noida ,India</td>
                                        </tr>


                                        <tr >
                                             <th colSpan={2}> <button className='btn btn-danger w-100'>Update Profile</button></th>

                                        </tr>

                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </>
     )
}
