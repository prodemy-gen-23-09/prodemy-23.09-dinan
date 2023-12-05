const Button = ({ color = "bg-orange-400 hover:bg-orange-800", custom = "rounded-lg text-xs font-semibold", text, children, ...props }) => (
  <button {...props} className={`${color} ${custom} flex justify-center gap-1 p-1`}>
    {children || text}
  </button>
)

export default Button
