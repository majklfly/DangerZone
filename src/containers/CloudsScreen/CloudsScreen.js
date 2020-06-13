import React from "react";

import { List, Avatar } from "antd";

import "./CloudsScreen.css";

const CloudsScreen = () => {
  return (
    <>
      <List className="cloudsList" data-test="cloudsList">
        <List.Item className="cloudListItem" data-test="cloudListItem">
          <List.Item.Meta
            data-test="cloudListAvatar"
            avatar={
              <Avatar src="https://b1.pngbarn.com/png/742/401/alternative-python-icons-and-folder-icon-python-2-png-clip-art.png" />
            }
          />
          <div className="cloudListItemText" data-test="cloudListItemText">
            Python 3.x
          </div>
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
          <div className="cloudListItemText">NodeJs 14.x</div>
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
          <div className="cloudListItemText">Reactjs 16.x (with hooks)</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png" />
            }
          />
          <div className="cloudListItemText">Redux 7.x</div>
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
        <List.Item
          className="cloudListItem
        "
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://spectrum.imgix.net/communities/583ce9f6-fb1f-484f-b19b-e7f8adec525c/f9607fee-ac53-4d41-8749-4b2232f48bd8-logo-large.png?w=256&h=256&dpr=2&auto=compress&expires=1585353600000&ixlib=js-1.3.0&s=3d199376b42e94e101817a00ab0814de" />
            }
          />
          <div className="cloudListItemText">React testing library</div>
        </List.Item>
        <List.Item
          className="cloudListItem
        "
        >
          <List.Item.Meta
            avatar={<Avatar src="https://airbnb.io/img/projects/enzyme.png" />}
          />
          <div className="cloudListItemText">Enzyme</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://banner2.cleanpng.com/20180907/pyg/kisspng-computer-icons-gitlab-scalable-vector-graphics-ci-circleci-logo-svg-vector-amp-png-transparent-v-5b92b5229299d3.9570815315363412826005.jpg" />
            }
          />
          <div className="cloudListItemText">Circle CI</div>
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
              <Avatar src="https://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png" />
            }
          />
          <div className="cloudListItemText">Git</div>
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
        <List.Item className="cloudListItem">
          <List.Item.Meta avatar={<Avatar src="" />} />
          <div className="cloudListItemText">jsPDF</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://cdn.clipart.email/cfc5d676f9b850a384a440ccf1917097_react-javascript-angularjs-ionic-github-transparent-background-_500-500.jpeg" />
            }
          />
          <div className="cloudListItemText">React Native 0.62</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={
              <Avatar src="https://apprecs.org/ios/images/app-icons/256/83/982107779.jpg" />
            }
          />
          <div className="cloudListItemText">Expo</div>
        </List.Item>
        <List.Item className="cloudListItem">
          <List.Item.Meta
            avatar={<Avatar src="https://airbnb.io/lottie/images/logo.webp" />}
          />
          <div className="cloudListItemText">Lottie</div>
        </List.Item>
      </List>
    </>
  );
};

export default CloudsScreen;
