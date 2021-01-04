import React from 'react';

const DisplayNoticeList = ({ contents }) => {
  return (
    contents.map((content, i) => {
      return (
          <tr key={i}>
            <td>{content.number}</td>
            <td>{content.title}</td>
            <td>{content.writer}</td>
            <td>{content.cteaedTime}</td>
          </tr>
      )
    })
  )
}

export default DisplayNoticeList;