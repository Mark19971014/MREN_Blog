import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice';
export default function SignIn() {
  const [formData,SetFormData] = useState({});
  const {loading,error :errorMessage} = useSelector(state => state.user);
  // what is dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
      SetFormData({...formData, [e.target.id] : e.target.value.trim()})
  };
  // submit
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields'))
    }
    try {
      //setLoading(true);
      //setErrorMessage(null);
      dispatch(signInStart())// this did same thing as above line 26-27
      const res = await fetch('/api/auth/signin',{
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      };
      if(res.ok){
        dispatch(signInSuccess(data)) // data is the payload in signInSuccess() 
        navigate('/');
      }
    } catch (error) {
       dispatch(signInFailure(error.message));

    }
  };
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md-items-center gap-5">
        {/*left side*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 
            via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Qixin&nbsp;Ma's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google
          </p>
        </div>
        {/*right side*/}
        <div className="flex-1"></div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your email" />
            <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
          </div>
          <div>
            <Label value="Your password" />
            <TextInput type="password" placeholder="********" id="password" onChange={handleChange}/>
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit" disabled = {loading}>
            {
            loading ? (
              <>
                <Spinner size = 'sm'/>
                <span className = 'pl-3'>Loading...</span>
              </>
            ) : 'Sign In'
}
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Don't an account?</span>
          <Link to="/sign-up" className=" text-blue-500">
            Sign Up
          </Link>
        </div>
        <div>
          {
            errorMessage &&(
              <Alert className= 'mt-5' color= 'failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
