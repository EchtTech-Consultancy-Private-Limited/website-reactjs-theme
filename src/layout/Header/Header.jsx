import React from 'react'
import TopHeader from './TopHeader';
import LogoMiddleHeader from './LogoMiddleHeader';
import MenuHeader from './MenuHeader';
export default function Header() {
  return (
    <>
       <div className="header">
        <TopHeader/>
        <LogoMiddleHeader/>
        <MenuHeader/>
       </div>
    </>
  )
}
