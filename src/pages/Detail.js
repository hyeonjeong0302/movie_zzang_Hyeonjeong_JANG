import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addItem} from './store';

export default function Detail(props) {
    const {bests} = props;
    const {id} = useParams();
    const dispatch = useDispatch();

    return (
      <div className="movie_detail" style={{ width: 800 }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          영화 소개
        </h1>
        <div
          style={{
            overflow: "hidden",

            position: "relative",
            margin: "0 auto",
          }}
        >
          <img
            src={bests[id].image}
            alt=""
            style={{ width: 300, float: "left", marginRight: "50px" }}
          />
          <div style={{ position: "absolute", left: 400, top: 180 }}>
            <h4>{bests[id].title}</h4>
            <p>{bests[id].price}</p>
            <p
              className="cart_btn"
              style={{
                width: 90,
                border: "3px solid grey",
                backgroundColor: "white",
                borderRadius: "3px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(
                  addItem({
                    id: bests[id].id,
                    title: bests[id].title,
                    count: 1,
                  })
                );
              }}
            >
              장바구니
            </p>
          </div>
        </div>
        <h1 style={{ marginTop: 50, marginBottom: 30 }}>진짜 영화 소개</h1>
        <p>이 시대를 대표하는 영화</p>
      </div>
    );
}