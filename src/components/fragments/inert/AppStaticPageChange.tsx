import React from "react"
import { Spinner } from "flowbite-react"

const AppStaticPageChange = () => {
  return (
    <div id="splash-loading" className="flex flex-col gap-2">
      <div className="text-center">
        <Spinner color="success" aria-label="Success spinner example" />
      </div>
    </div>
  )
}

export default AppStaticPageChange
