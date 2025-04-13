import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
    return (
        <div className='w-full flex justify-center mt-6'>
            <SignIn signUpUrl='/register' />
        </div>
    )
}

export default Login