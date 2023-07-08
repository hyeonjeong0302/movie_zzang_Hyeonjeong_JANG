import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1 style={{textAlign:'center', marginBottom:'30px', marginTop:'50px'}}>🐴영화짱은 말이죠🦓</h1>
      <p style={{textAlign:'center', fontSize:'20px'}}>합리적인 가격을 자랑하는 <b>'영화 구매/대여'</b> 서비스 제공 플랫폼입니다😄</p>
      <p style={{textAlign:'center'}}><span style={{border:'3px solid grey', borderRadius:'3px', padding:'0 2px'}}>장바구니</span> 버튼 클릭 한 번으로 간편하게 영화를 장바구니에 담으실 수 있습니다.</p>
      <Outlet></Outlet>
    </div>
  )
}