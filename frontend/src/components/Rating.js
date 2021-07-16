import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color }}
          className={
            //值大於1 = 一顆完整的星
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5 //值大於0.5 = 半顆星
              ? 'fas fa-star-half-alt'
              : 'far fa-star' //空星
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            //值大於1 = 一顆完整的星
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5 //值大於0.5 = 半顆星
              ? 'fas fa-star-half-alt'
              : 'far fa-star' //空星
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            //值大於1 = 一顆完整的星
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5 //值大於0.5 = 半顆星
              ? 'fas fa-star-half-alt'
              : 'far fa-star' //空星
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            //值大於1 = 一顆完整的星
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5 //值大於0.5 = 半顆星
              ? 'fas fa-star-half-alt'
              : 'far fa-star' //空星
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            //值大於1 = 一顆完整的星
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5 //值大於0.5 = 半顆星
              ? 'fas fa-star-half-alt'
              : 'far fa-star' //空星
          }
        ></i>
      </span>
      <span>{text ? text : ''}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#5F5F5F    ',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rating;
