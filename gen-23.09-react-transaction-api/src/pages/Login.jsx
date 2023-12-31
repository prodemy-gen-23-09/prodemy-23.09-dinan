import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "../component/ui/Button"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setToken, setUser } from "../store/reducers/authSlice"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

const Login = () => {
  const dispatch = useDispatch()
  const [passVisible, setPassVisible] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data
        dispatch(setToken(accessToken))
        dispatch(setUser(user))
        reset()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="w-1/4 m-auto mt-32 shadow-2xl">
      <h1 className="text-2xl font-semibold text-center">Login Page</h1>
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4 p-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} placeholder="masukan Email" className="text-sm border-[1px] p-1 rounded-md border-gray-200 focus:outline-orange-300"></input>
          <p className="error text-red-500 text-xs">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="flex relative">
            <input
              type={passVisible ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="masukan password"
              className="w-full  text-sm border-[1px] p-1 rounded-md border-gray-200 focus:outline-orange-300"
            />
            <div className="absolute w-5 right-2 top-1" onClick={() => setPassVisible(!passVisible)}>
              {passVisible ? <EyeIcon /> : <EyeSlashIcon />}
            </div>
          </div>
          <p className="error text-red-500 text-xs">{errors.password?.message}</p>
        </div>
        <Button type="submit" text="Submit" />
      </form>
    </div>
  )
}

export default Login
