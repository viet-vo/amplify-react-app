import React from 'react';

const SignUp = () => (
    <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-3">
            <div className="card text-center" style={{ width: 18 + 'rem' }}>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
        <div className="col-xl-2"></div>
        <div className="col-xl-3">
            <div className="card text-center" style={{ width: 18 + 'rem' }}>
            <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Signin</button>
                </form>
            </div>
        </div>
        <div className="col-xl-2"></div>
    </div >

)
export default SignUp
