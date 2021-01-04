import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"
import DisplayNoticeList from '../components/DisplayNoticeList';

class NoticeList extends Component {
  state = {
    contents: [
      {
        number: 1,
        title: "재밌다 리액트",
        writer: "조영완",
        cteaedTime: "2020.1.20"
      },
      {
        number: 2,
        title: "재밌다 파이어베이스",
        writer: "조영완",
        cteaedTime: "2020.1.20"
      },
      {
        number: 3,
        title: "재밌다 파이어베이스",
        writer: "조영완",
        cteaedTime: "2020.1.20"
      },
      {
        number: 4,
        title: "재밌다 파이어베이스",
        writer: "조영완",
        cteaedTime: "2020.1.20"
      },
    ]
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <DisplayNoticeList contents={this.state.contents} />
          </tbody>
        </table>
        <Link to="/notice/write">
          <button>
            새글작성
          </button>
        </Link>
      </div>
    )
  }
}

export default NoticeList