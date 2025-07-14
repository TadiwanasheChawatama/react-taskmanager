import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
     <section className="container mx-auto p-10 my-10 flex flex-col items-center bg-red-25">
        <h1 className="text-3xl center">
            Welcome to My Task App
        </h1>
        <p className="text-lg bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, unde voluptatibus corporis rem iste voluptas quo quas harum eos molestias!
        </p>
        <Link to="/all-tasks" className="bg-indigo-200 rounded-md p-3 m-5">
            View Tasks
        </Link>
        </section> 
    </>
  )
}

export default Hero
