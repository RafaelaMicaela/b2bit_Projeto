import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
    return(

     <button
        className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
        {...props}
      /> 

    )
}