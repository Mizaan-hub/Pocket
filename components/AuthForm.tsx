import React from 'react'

type FormType = "sign-in" | "sign-up"

const AuthForm = ({ type }: {type: FormType}) => {
  return (
    <div>{type === "sign-in" ? "Sign In" : "Sign Up"}</div>
  )
}

export default AuthForm
