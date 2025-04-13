import { SignUp } from '@clerk/clerk-react'

const Register = () => {
    return (
        <div className='w-full flex justify-center mt-6'>
            <SignUp signInUrl='/login' />
        </div>
    )
}

export default Register