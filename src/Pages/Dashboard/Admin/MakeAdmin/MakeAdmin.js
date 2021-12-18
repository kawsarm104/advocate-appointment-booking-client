import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
// react hot toast 
import toast, { Toaster } from 'react-hot-toast';
// react hot toast 



const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.role = 'admin';
        const email = data.email;
        const api = `https://fathomless-coast-82114.herokuapp.com/makeadmin/${email}`
        axios.put(api, data)
            .then(result => {
                // console.log(result.data);
                if (result.data.modifiedCount || result.data.upsertedCount) {
                  toast("Made Admin Successfully")
                } else if (result.data.matchedCount) {
                   toast.error("Already Admin")
                } else {
                    toast.error('Something is wrang, Please try again!')
            
                }
            })
    }
    return (
        <div className="text-center">
            <h2 className="pb-4">Make an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="px-3 py-1 w-50 " {...register("email")} type="email" placeholder="Enter Email" />
                <input className="px-3 py-1 btn-info w-25" type="submit" />
            </form>
            {/* hot toast  */}
            <Toaster position="top-right" />
            {/* hot toast  */}

        </div>
    );
};

export default MakeAdmin;