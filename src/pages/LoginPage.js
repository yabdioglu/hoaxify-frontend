import React, { Component } from 'react';
import Input from '../components/Input';

export default class LoginPage extends Component {
    state = {
        username: null,
        password: null
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Login</h1>
                    <Input label="Username" name="username" onChange={this.onChange} />
                    <Input label="Password" name="password" type="password" onChange={this.onChange} />
                    <div className='text-center'>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}








// import React from 'react'
// import Input from '../components/Input';

// class LoginPage extends React.Component{
//     state = {
//         username: null,
//         password: null,
//         pendingApiCall: false,
//         errors: {}
//     }
//     render(){
//         return (
//             <div className='container'>
//                     <form>
//                     <h1 className="text-center">Login</h1>
//                     <Input name="username" label="Username"
//                     // error={username}
//                     onChange={this.onChange} />
//                     <Input name="password" label="Password"
//                     // error={password}
//                      onChange={this.onChange} type="password" />
//                     <div className="text-center">
//                         <button className="btn btn-primary"
//                             onClick={this.onClickSignup}
//                             // disabled={pendingApiCall}
//                             >
//                             {/* {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}Sign Up */}
//                         </button>
//                     </div>
//                     <div>
//                         <img src="https://flagcdn.com/24x18/tr.png" alt="Turkish Flag" onClick={() => this.onChangeLanguage('tr')} style={{cursor: 'pointer'}}/>
//                         <img src="https://flagcdn.com/24x18/us.png" alt="USA Flag" onClick={() => this.onChangeLanguage('en')} style={{cursor: 'pointer'}}/>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default LoginPage;
