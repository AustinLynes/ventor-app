import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={
//             props =>
//                 localStorage.getItem('token') ?
//                     <Component {...props} /> :
//                     <Redirect to='/signin' />
//         } />
//     )
// }
const  PrivateRoute  = ({component: Component, ...rest})=>{
    return(
        <Route
        {...rest}
        render={
            props=>{
                if(localStorage.getItem('token'))
                    return <Component {...props}/>
                else{
                    alert('You Must be Logged in To View this Content. Please Log in to Contiue.')
                    {return <Redirect to='/login'/>}
                }
            }
        }
        />
    )
}

export default PrivateRoute