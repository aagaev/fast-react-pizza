import { Link, useNavigate,  } from "react-router-dom"
import PropTypes from 'prop-types'

function LinkButton({children, to}) {
    LinkButton.propTypes = {
        children: PropTypes.any,
        to: PropTypes.any
    };
    // console.log(to)
    const navigate = useNavigate();
    const className = 'text-sm text-red-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton
