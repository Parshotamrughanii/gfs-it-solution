import React from 'react'
import Style from '../src/styles/LearnMoreButton.module.css'

const LearnMoreButton = ({onClick,title}) => {
  return (
    <div>
        <button
        className={Style.learn_more_button}
              onClick={onClick}
            >
              {title}
            </button>
    </div>
  )
}

export default LearnMoreButton