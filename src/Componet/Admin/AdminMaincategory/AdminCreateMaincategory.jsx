import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import FormValidator from '../../FormValidation/FormValidator';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { creatMaincategory, getMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreator';

export default function AdminCreateMaincategory() {
     let [data, setData] = useState({
          name: "",
          active: true
     });
     let [errorMessage, setErrorMessage] = useState({
          name: "Name is Mandetory",
     });
     let [show, setShow] = useState(false);
     let navigate = useNavigate();
     let [alldata, setAllData] = useState([]);

     let dispatch = useDispatch()
     let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)

     function InputData(e) {

          let { name, value } = e.target;
          if (name !== 'active') {
               setErrorMessage((old) => {
                    return {
                         ...old,
                         [name]: FormValidator(e)
                    };
               });
          }
          setData((old) => {
               return {
                    ...old,
                    [name]: name === 'active' ? (value === "1" ? true : false) : value
               };
          });
     }

     async function postData(e) {
          e.preventDefault();
          let error = Object.values(errorMessage).find((x => x !== ""));
          if (error)
               setShow(true);
          else {
               let item = alldata.find((x) => x.name?.toLowerCase() === data.name.toLowerCase())
               if (item) {
                    setShow(true);
                    setErrorMessage((old) => {
                         return {
                              ...old,
                              name: "Category Already Exist"
                         }
                    })
               }
               else {
                    dispatch(creatMaincategory({ ...data }))
                    if (MaincategoryStateData.length) {
                         navigate('/admin/maincategory')
                    } else {
                         alert("Somthing wan't wrong")
                    }
               }
          }

     }
     useEffect(() => {

          (() => {

               dispatch(getMaincategory())
               if (MaincategoryStateData.length) {
                    setAllData(MaincategoryStateData)
               } else {
                    setAllData([])
               }




          })()
     }, [MaincategoryStateData.length])
     return (
          <>
               <div className="container-fluid my-3">
                    <div className="row">
                         <div className="col-md-3 col-xl-3 col-12 mb-3">
                              <Sidebar />
                         </div>
                         <div className="col-md-9 col-xl-9 mb-3">
                              <h2 className='bg-danger text-center text-white '>Maincategory <Link to="/admin/maincategory"><span><i className='text-white fa fa-arrow-left float-end'></i></span></Link></h2>
                              <div className="row">
                                   <form onSubmit={postData}>
                                        <div className="col-md-6 my-3">

                                             <label>Name*</label>
                                             <input type="text" name='name' onChange={InputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}  border-2 capitalize `} placeholder='Enter Maincategory Name' />
                                             {show && errorMessage.name ? <p className='text-danger '>{errorMessage.name}</p> : ""}
                                        </div>
                                        <div className="col-md-6 my-3">
                                             <label>Active*</label>
                                             <select name="active" onChange={InputData} className='form-control border-primary border-2'>
                                                  <option value="1">Yes</option>
                                                  <option value="0">No</option>
                                             </select>
                                        </div>
                                        <div className="mb-3">
                                             <button type="submit" className='btn btn-success fs-3 text-white w-100'>Submit</button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
