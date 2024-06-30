import PropTypes from 'prop-types';
function Button({children, disabled}) {
    Button.propTypes = {
        children: PropTypes.any,
        disabled: PropTypes.any
    };
    return (
        <button 
        disabled={disabled} className="bg-yellow-500 tracking-wide
         rounded-full uppercase font-semibold text-stone-800 
         py-3 px-4 sm:px-6 sm:py-4 inline-block
         hover:bg-yellow-300 transition-colors duration-500
          focus:bg-yellow-300 focus:outline-none focus:ring
           focus:ring-yellow-300 focus:ring-offset-2 
           disabled:cursor-not-allowed">
            {children}
        </button>
    )
}

export default Button
