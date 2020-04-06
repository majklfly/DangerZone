import React from "react";

import { List, Avatar } from "antd";

import "./CloudsScreen.css";

const CloudsScreen = () => {
  return (
    <>
      <List className="cloudsList">
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://b1.pngbarn.com/png/742/401/alternative-python-icons-and-folder-icon-python-2-png-clip-art.png" />
            }
          />
          <div className="cloudListItemText">Python 3.1.0</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://library.kissclipart.com/20181222/roq/kissclipart-js-icon-png-clipart-javascript-computer-icons-17798e7f40a26d8f.png" />
            }
          />
          <div className="cloudListItemText">Javascript (ES6+)</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://clipartart.com/images/javascript-icon-clipart-3.jpg" />
            }
          />
          <div className="cloudListItemText">NodeJs</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg" />
            }
          />
          <div className="cloudListItemText">postgresql</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://img.stackshare.io/service/1630/New_Project__67_.png" />
            }
          />
          <div className="cloudListItemText">Django REST framework</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://i7.pngguru.com/preview/10/113/180/django-web-development-web-framework-python-software-framework-django.jpg" />
            }
          />
          <div className="cloudListItemText">Django 3.0</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://i7.pngguru.com/preview/452/495/745/react-javascript-angularjs-ionic-github.jpg" />
            }
          />
          <div className="cloudListItemText">Reactjs 16.1 (with hooks)</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png" />
            }
          />
          <div className="cloudListItemText">Redux</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://library.kissclipart.com/20191125/yaq/kissclipart-logo-icon-css-icon-css-3-icon-27fbbe8fb920adff.png" />
            }
          />
          <div className="cloudListItemText">
            CSS 3 (CSS animations of SVG documents)
          </div>
        </List.Item>
        <List.Item
          className="cloudListItem
        "
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/5894313931548218185-512.png" />
            }
          />
          <div className="cloudListItemText">Jest</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://cdn4.iconfinder.com/data/icons/bloomies-webdesign-tools/25/Figma_square-512.png" />
            }
          />
          <div className="cloudListItemText">Figma</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" />
            }
          />
          <div className="cloudListItemText">AntD</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" />
            }
          />
          <div className="cloudListItemText">Heroku</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg" />
            }
          />
          <div className="cloudListItemText">Github</div>
        </List.Item>
      </List>
    </>
  );
};

export default CloudsScreen;
