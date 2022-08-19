import { Select, SelectProps } from "flowbite-react"
import { ReactElement, SelectHTMLAttributes } from "react"

const AppStaticSelect = ({
  placeholder,
  defaultValue,
  id,
  name,
  title,
  value,
  helperText,
  children,
  onChange,
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement>): ReactElement => {
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="text-red-500 font-extrabold">
        {title}
      </label>
      <Select
        className="my-1"
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        helperText={helperText}
        onChange={onChange}
      >
        {children}
      </Select>
    </div>
  )
}

export default AppStaticSelect
