import React from 'react'
import Style from '../src/styles/BlockChainCTN.module.css'

const BlockChainCTN = ({onClick,title}) => {
  return (
    <div>
        <a className={Style.blockchain} onClick={onClick} href="#">{title}</a>
    </div>
  )
}

export default BlockChainCTN