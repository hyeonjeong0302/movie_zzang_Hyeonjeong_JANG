import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/movieData';
// import styled, {keyframes} from 'styled-components';

import About from './pages/About';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from './pages/store';

function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)
const state= useSelector((state)=>state)
const dispatch = useDispatch()
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}} >영화짱🎬</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>홈으로</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>영화짱 소개</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about/info')}}>혜택</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>

        <Route
        path="/" element={
          <Container>
          <h1>❤영화짱에 오신 것을 환영합니다❤</h1>
            <h2>랭킹100</h2>
            <Row>
           {
            bests.map((best, index)=>{
              return(
                <Col key={index}>
                  <Link to={`detail/${index}`} style={{ textDecoration: "none" }}>
                <img src={best.image} alt="product_img" style={{width: 150,height: 217.5 ,marginTop:50, marginBottom:20}}/>
                <h4 style={{color:'black', width:150, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontSize:15}}>{best.title}</h4>
                <p style={{color:'black', fontSize:17}}>{best.price}</p>
                </Link>
                <p className='cart_btn' style={{ width:90,border:'3px solid grey', backgroundColor:'white', borderRadius:'3px'}} onClick={()=>{
                  dispatch(addItem({id:best.id, title:best.title, count: 1}))
                }}>장바구니</p>
                </Col>
              )
            })
           }
            </Row>
          </Container>
        }
        />

        <Route path='/' element={<div>Home Page</div>} />
        <Route path='about' element={<About />}>
          <Route path='info' element={
          <div>
            <ul style={{textAlign:'center', listStyle:'none'}}>
              <li>결제 금액의 10%가 적립되며 적립금은 사이트 내에서 언제든지 현금처럼 사용 가능합니다🤑</li>
              <li>매 분기 '랜선 시사회'를 개최합니다😍<br/>
              (👩‍💻감독, 배우에게 채팅으로 질문하고 답변받는 코너도 마련되어 있습니다👨‍💻)</li>
            </ul>
          </div>
          } />
          <Route path='loca' element={<div>Location</div>} />
        </Route>
        <Route path="detail/:id" element={<Detail bests={bests}/>}/>
         <Route path="cart" element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;