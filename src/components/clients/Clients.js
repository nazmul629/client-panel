import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Clients extends Component {

    render() {
        const clients=[
            {
                id:"01",
                firstName: "Rohim",
                lastName:"Uddin",
                email:"rohim@gmai.com",
                phone:"0173-444-2323",
                balance:"32"

            },
            {
                id:"03",
                firstName: "Rohim",
                lastName:"Uddin",
                email:"rohim@gmai.com",
                phone:"0173-444-2323",
                balance:"13.22"

            }
        ]
        if(clients){
            return (
                <div>
                    <div className="row">

                        <div className="col-md-6">
                            <h2> <i className="fas fa-users"/>  Clients</h2>
                        </div>
                        
                        <div className="col-md-6">

                        </div>

                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Blance</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client=>(
                                <tr key={client.id}>
                                    <td> {client.firstName} {client.lastName} </td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                                    <td> <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm"> <i className="fas fa-arrow-circle-right"/>Details </Link>
                                     </td>
                                </tr>
                            ))}
                            <td></td>
                        </tbody>
                    </table>
                </div>
            )
        }
        else
        {
          return  <h1> Loading.....  </h1>
        }


       
    }
}
