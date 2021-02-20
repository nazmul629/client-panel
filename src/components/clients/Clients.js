import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner'

class Clients extends Component {
  
    render() {
        const  { clients } = this.props;
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
          return  (<div> <Spinner /> </div>)
        }


       
    }
}
    Clients.propTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
  };
  
  export default
   compose(
    firestoreConnect([{ collection: 'Clients' }]),
    connect((state, props) => ({
      clients: state.firestore.ordered.Clients
    }))
  )
  (Clients);
  