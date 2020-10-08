import React, {Component} from 'react';
import './slide.css';

class menu extends Component{
  render(){
  return (
	    <div>       
        <ul>
          <li><a className="mau" href="trangchu">Trang chủ</a></li>
          <li><a href="gioithieu">Giới thiệu</a></li>
          <li><a href="diendan">Diễn đàn</a></li>
          <li><a href="tintuc">Tin tức</a></li>
          <li><a href="hoidap">Hỏi đáp</a></li>
          <li><a href="lienhe">Liên hệ</a></li>
          <li><a href="khac">Khác</a></li>
        </ul>
      </div>
    
  );
}
}

export default menu;
