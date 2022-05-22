import React from 'react'

const SignUp = () => {
  return (
    <div className='container'>
     <div className='row'>
         <div className='col-sm-8 mx-auto py-5'>
         <h1 className='text-center pb-5'>Sign Up</h1>
         <form>
  <div className="form-group row pb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div className="form-group row pb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label className="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label className="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
     
      </div>
    </div>
  </fieldset>

  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
         </div>
     </div>
    </div>
  )
}

export default SignUp
