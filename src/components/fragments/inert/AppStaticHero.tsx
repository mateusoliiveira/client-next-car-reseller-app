import Image from "next/image"
import React from "react"
import carPic from "../../../assets/homepng.png"

const AppStaticHero = () => {
  return (
    <div className="md:flex md:justify-evenly md:py-20">
      <div className="md:w-20 w-100 px-10 md:px-0 text-center md:text-left">
        <h1
          style={{ color: "#F77365" }}
          className="text-lg mt-3 md:mt-0 md:text-3xl font-bold"
        >
          sua próxima oportunidade
        </h1>
      </div>
      <div className="md:w-80 w-80 px-10 py-3 md:py-0 md:px-0 m-auto md:m-0">
        <Image
          src={carPic}
          layout="responsive"
          width="30"
          height="14"
          className="car-hero"
        />
        <div className="wrapper-runner">
          <div className="road-runner"></div>
        </div>
      </div>
    </div>
  )
}

export default AppStaticHero
