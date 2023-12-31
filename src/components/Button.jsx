const Button = ({ label, icon, variant }) => {

  let variantButton;
  if (variant == 'secondary') {
    variantButton = 'bg-white border-slate-gray text-slate-gray';
  } else {
    // primary styles buttom
    variantButton = 'bg-coral-red text-white border-coral-red';
  }

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${variantButton}`}
    >
      {label}

      {icon && (
        <img src={icon} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  )
}

export default Button