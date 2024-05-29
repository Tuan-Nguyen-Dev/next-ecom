"use client"
import React from "react";
import AuthFormContainer from "@components/AuthFormContainer";
import { Button, Input } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import Validation Form
import { useFormik } from "formik";
import * as yup from "yup"
import { formikHelper } from "@/app/utils/formikHelpers";

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
})

export default function SignUp() {

    // Validation Form use useFormik

    const { values, handleBlur, handleChange, handleSubmit, isSubmitting, errors, touched } = useFormik({
        initialValues: { name: '', email: '', password: '' },
        validationSchema,
        onSubmit: (values) => {
            console.log('values >>>>', values)
        }
    })

    // console.log("Check touched", touched);

    const formErrors: string[] = formikHelper(touched, errors, values)
    const { name, email, password } = values

    return (
        <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
            <Input crossOrigin="true" name="name" label="Name" onChange={handleChange} value={name} onBlur={handleBlur} />
            <Input crossOrigin="true" name="email" label="Email" onChange={handleChange} value={email} onBlur={handleBlur} />
            <Input crossOrigin="true" name="password" label="Password" type="password" onChange={handleChange} value={password} onBlur={handleBlur} />
            <Button type="submit" className="w-full">
                Sign up
            </Button>
            <div className="">
                {formErrors.map((err) => {
                    return (
                        <div key={err} className="space-x-1 flex items-center text-red-500">
                            <XMarkIcon className="w-4 h-4" />
                            <p className="text-xs">{err}</p>
                        </div>
                    );
                })}
            </div>
        </AuthFormContainer>
    );
}