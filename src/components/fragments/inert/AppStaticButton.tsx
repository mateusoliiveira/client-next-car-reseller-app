import { Button } from "flowbite-react"
import { ButtonHTMLAttributes, ReactElement } from "react"

const AppStaticButton = ({
  onClick,
  disabled,
  title,
  id,
}: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
  return (
    <Button id={id} disabled={disabled} onClick={onClick}>
      {title}
    </Button>
  )
}

export default AppStaticButton
