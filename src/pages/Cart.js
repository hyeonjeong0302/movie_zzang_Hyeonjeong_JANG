import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {changeName, changeYear, deleteItem, addCount, subCount} from './store';


export default function Cart() {

  const state = useSelector((state)=>state)
  const dispatch = useDispatch()

  return (
    <div style={{ width: 1200, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              ({state.user.name})
            </span>{" "}
            님의 장바구니{" "}
          </h3>
          <p
            style={{
              fontSize: 17,
              height: 40,
              lineHeight: "40px",
              border: "3px solid grey",
              padding: "0 10px",
              borderRadius: "3px",
              cursor: "pointer",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={() => dispatch(changeName())}
          >
            아이디 확인
          </p>
        </div>
        <div>
          <h3>
            회원가입기간: {state.user.memberYear}년
            <span
              style={{
                width: 40,
                padding: "0 12px 2px 11px",
                boxSizing: "border-box",
                border: "3px solid grey",
                borderRadius: "3px",
                display: "inline-block",
                cursor: "pointer"
              }}
              onClick={() => dispatch(changeYear(-1))}
            >
              -
            </span>
            <span
              style={{
                width: 40,
                padding: "0 15px 2px 8px",
                boxSizing: "border-box",
                border: "3px solid grey",
                borderRadius: "3px",
                display: "inline-block",
                cursor: "pointer"
              }}
              onClick={() => dispatch(changeYear(1))}
            >
              +
            </span>
          </h3>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(subCount(state.cart[i].id));
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(state.cart[i].id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}