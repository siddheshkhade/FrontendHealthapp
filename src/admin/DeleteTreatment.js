import React, { useEffect, useState } from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "jquery/dist/jquery.min.js";
import $ from "jquery"
import { NavLink } from 'react-router-dom';


const DeleteTreatment = () => {
  // initially we will take state as empty because we dont know how many no of document we have after taking states hit the api
  const [treatment, setTreatment] = useState([])

  // useeffect to display the treatment data
  useEffect(() => {
    axios.get(`https://finalmernbackend-sozm.onrender.com/treatment`)
      .then((res) => {
        setTreatment(res.data)
      })
      .catch((err) => {
        alert("Unable to fetch treatment data")
      })

    setTimeout(() => {
      $("#my-table").DataTable();
    }, 1000);
  });

  const deleteTreatment = (tid) => {
    axios.delete(`https://finalmernbackend-sozm.onrender.com/treatment/${tid}`)
      .then((res) => {
        alert("Treatment deleted successfully")
      })
      .catch((err) => {
        alert("Unable to delete Treatment")
      })
  }

  return (
    <main>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <table id='my-table' class="display">
                <thead>
                  <tr>
                    <th>Treatment Name</th>
                    <th>Treatment Description</th>
                    <th>Image</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    treatment.map((treat) => {
                      return (
                        <tr>
                          <td>{treat.tname}</td>
                          <td>{treat.tdesc}</td>
                          <td>
                            <img
                              src={`https://finalmernbackend-sozm.onrender.com/uploads/${treat.filename}`}
                              alt={treat.tname}
                              className='img-fluid'
                            />
                          </td>
                          <td className='d-flex'>
                            <NavLink to={`/editTreatment/${treat._id}`}>
                              <button className='btn btn-success me-2'>
                                <EditSharpIcon />
                              </button>
                            </NavLink>
                            <button className='btn btn-danger' onClick={() => deleteTreatment(treat._id)}>
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default DeleteTreatment
