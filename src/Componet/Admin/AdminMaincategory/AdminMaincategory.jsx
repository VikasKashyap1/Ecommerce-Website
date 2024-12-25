import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMaincategory, deleteMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreator'

export default function AdminMaincategory() {
     let [data, setData] = useState([]);
     
     let dispatch = useDispatch();

     let MaincategoryStateData = useSelector(state => state.MaincategoryStateData);
 
     function deleteItem(id) {
         if (window.confirm('Are You Sure You Want To Delete This Category?')) {
             dispatch(deleteMaincategory({ id: id }));
             getData();
         }
     }
 
     function getData() {
         dispatch(getMaincategory());
         if (MaincategoryStateData.length) {
             setData(MaincategoryStateData);
             console.log(MaincategoryStateData);
             
         } else {
             setData([]);
         }
     }
 
     useEffect(() => {
         getData()
     }, [MaincategoryStateData.length]);


return (
          <>
               <div className="container-fluid my-3">
                    <div className="row">
                         <div className="col-md-3 col-12 mb-3">
                              <Sidebar />
                         </div>
                         <div className="col-md-9 col-12 mb-3">
                              <h2 className='bg-danger text-center text-white '>Maincategory <Link to="/admin/maincategory/create"><span><i className='text-white fa fa-plus float-end'></i></span></Link></h2>
                              <div className="table-responsive ">
                                   <table className='table table-bordered '>
                                        <thead>
                                             <tr>
                                                  <th>Id</th>
                                                  <th>Name:</th>
                                                  <th>Active:</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                             </tr>
                                        </thead>
                                        <tbody className='text-dark fs-3'>
                                             {
                                                  data.map((item, index) => {
                                                       return <tr key={index}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.active ? <p className='text-success'>Yes</p> : <p className='text-danger'>No</p>}</td>
                                                            <td ><Link to={`/admin/maincategory/update/${item.id}`} className='btn  '><span className='fa fa-edit text-success fs-2'></span></Link></td>
                                                            <td ><Link onClick={() => deleteItem(item.id)} className='btn '><span className='fa fa-trash text-danger fs-2'></span></Link></td>
                                                       </tr>
                                                  })
                                             }
                                        </tbody>
                                   </table>

                              </div>
                         </div>
                    </div>
               </div>



          </>
     )
}
