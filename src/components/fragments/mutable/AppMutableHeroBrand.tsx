import React, { ReactElement } from "react"

const AppMutableHeroBrand = ({ brand }: { brand: string }): ReactElement => {
  return (
    <div className="px-20">
      <div className="text-center">
        <h1 style={{ color: "#F77365" }} className="text-3xl font-bold">
          procurando por {brand}
        </h1>
      </div>
    </div>
  )
}

export default AppMutableHeroBrand
