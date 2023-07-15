'use client'
import LoginImage from '@/assets/authentication.jpg';
import useAuth from "@/hooks/useAuth";
import { User, UserCredential } from "firebase/auth";
import Image from 'next/image';
import { useForm } from "react-hook-form";
const Register = () => {

    const {loginWithGoogle,signupWithEmail,updateUser} = useAuth();

    const {register,handleSubmit,formState:{errors}} = useForm()

    const handleLogin = (data:any) => {
        const {name,email,password} = data
        signupWithEmail(password,email)
            .then((res : UserCredential)  => {
                updateUser(name).then((res : User) =>{
                    console.log(res,'this is name update');
                })
            }
            )
    }

  return (
    <div className=" bg-white lg:h-screen flex justify-center items-center">
        <div className='flex lg:flex-row flex-col p-5'>
            <div className="lg:w-1/2 mx-auto lg:p-20 p-5">
                <div>
                    <form className="form-control space-y-4" onSubmit={handleSubmit(handleLogin)} action="">
                        <input {...register('name')} className="input" type="text" name="name" id="name" placeholder="Name" />
                        <input {...register('email')} className="input" type="email" name="email" id="email" placeholder="Email" />
                        <input {...register('password')} className="input" type="password" name="password" id="password" placeholder="Password" />
                        <button className="btn">Login</button>
                    </form>
                    <div className="divider text-black">OR</div>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={()=>loginWithGoogle()} className='btn'>Login With Google</button>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Image src={LoginImage} alt="Login Image" />
            </div>
        </div>
    </div>
  )
}

export default Register;