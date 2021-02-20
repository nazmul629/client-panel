import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner'
import classnames from 'classnames'


class ClientDetails extends Component {
    state = {
        showBlanceUpdate:false,
        balanceUpdateAmount: ''
    }

    balanceSubmit = e =>{
        e.preventDefault()
        const{firestore, client}=this.props
        const{balanceUpdateAmount}= this.state

        const balanceUpdate ={
            balance:parseFloat(balanceUpdateAmount)
        }

        firestore.update( { collection: 'Clients',  doc:client.id },balanceUpdate)
    }


   // Delete client
   onDeleteClick = () => {
    const { client, firestore, history } = this.props;

    firestore
      .delete({ collection: 'Clients', doc: client.id })
      .then(history.push('/'));
  };


    onChange = e=>this.setState({[e.target.name]:e.target.value})
    render() {
        const {client}= this.props
        const {showBlanceUpdate,balanceUpdateAmount} = this.state



        let balanceForm = ''

        if( showBlanceUpdate){
            balanceForm = (
                <form onSubmit={this.balanceSubmit}>
                    <div className= "input-group">
                        <input 
                        type="number"
                        className="form-control"
                        name="balanceUpdateAmount"
                        placeholder="New Blance"
                        value={balanceUpdateAmount}
                        onChange = {this.onChange}
                        />
                        <div className="input-group-append"> 
                            <input
                              type="submit"
                              value="Update"
                              className="btn btn-outlike-dark"

                            />
                        </div>
                    </div>
                </form>
            )
        }
        else{
            balanceForm = null
        }


        if(client){ 
            return(
            <div>
               <div className="row">
                   <div className="col-md-6">
                        <Link to="/" className="btn-btn-link"> 
                           <i className="fas fa-arrow-circle-left"/> Back To Dashboard
                        </Link>
                    </div> 

                    <div className="col-md-6">
                       <div className = "btn-group float-right">
                           <Link className ="btn btn-dark  px-4" to={`/client/edit/${client.id}`}>Edit
                           </Link>
                           <button className="btn btn-danger" onClick={this.onDeleteClick} >Delete</button>
                       </div> 
                    </div>
                </div>  
                <hr/>  

                <div className="card">
                     <h3 className="card-header">
                         {client.firstName} {client.lastName}
                     </h3>
                     <div className="card-body">
                         <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <h4>
                                    Client ID:{' '}
                                    <samp className="text-secondary">{client.id}</samp>
                                </h4>
                            </div> 

                            <div className="col-md-4 col-sm-6">

                                <h3 className="pull-right"> 
                                    Balance: <span className={classnames({
                                        'text-success':client.balance>0,
                                        'text-danger':client.balance === 0
                                        })}>${parseFloat(client.balance)}{" "} 
                                    </span>

                                    <small >
                                        <a href="#!" onClick={()=>this.setState({
                                            showBlanceUpdate: !showBlanceUpdate
                                            })}>
                                            <i className="fas fa-pencil-alt"/>
                                        </a>
                                    </small>
                                </h3>
                               {balanceForm}
                            </div> 
                         </div>
                         <hr/>
                         <ul className="list-group">
                             <li className= "list-group-item"> Contact Email: {client.email} </li>
                             <li className= "list-group-item"> Contact Phone: {client.phone} </li>

                         </ul>
                     </div>
                </div>  
                        
            </div>
            )
        }
        else{
        return (
            <div>
                <Spinner />
            </div>
        )
        }
    }
}


ClientDetails.PropTypes = {
    firestore:PropTypes.object.isRequired
}
export default compose(
    firestoreConnect(props => [
        { collection: 'Clients', storeAs: 'client', doc: props.match.params.id }] ),

 connect(({ firestore: { ordered } }, props) => ({
   
   client: ordered.client && ordered.client[0]
 }))
)
(ClientDetails);
