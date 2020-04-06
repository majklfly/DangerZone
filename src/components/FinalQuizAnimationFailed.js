import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { RiseOutlined } from "@ant-design/icons";

import "./FinalQuizAnimationFailed.css";

export const FinalQuizAnimationFailed = props => {
  const history = useHistory();

  const handleClickPositive = () => {
    history.push("/chapters/");
  };

  return (
    <div>
      <div className="failedAnimationContainer">
        <div className="failedAnimationText">
          You have answered {props.validatedCount} out of 5 questions correctly
        </div>
        <div className="failedAnimationText2">
          Oops, that didn't go well. Let's revisit this chapter again.
        </div>
        <Button className="failedAnimationButton" onClick={handleClickPositive}>
          <RiseOutlined />
        </Button>
        <svg className="failedAnimation" fill="none">
          <g id="undraw_annotation_7das 1">
            <g clip-path="url(#clip0)">
              <rect fill="#364D79" />
              <g id="drawing">
                <path
                  id="Vector"
                  d="M424.802 247.637C418.848 258.428 106.28 257.522 106.753 247.636C112.707 236.845 425.275 237.751 424.802 247.637Z"
                  fill="#D0CDE1"
                />
                <path
                  id="Vector_2"
                  d="M268.95 28.3256H118.603V149.782H268.95V28.3256Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_3"
                  d="M394.08 240.375C394.08 240.375 404.367 206.684 365.246 187.502L394.08 240.375Z"
                  fill="#D0CDE1"
                />
                <path
                  id="Vector_4"
                  d="M395.361 240.555C395.361 240.555 399.439 207.303 445 205.219L395.361 240.555Z"
                  fill="#D0CDE1"
                />
                <path
                  id="Vector_5"
                  d="M220.57 235.233L209.936 234.543L213.481 250.069L225.532 245.239L220.57 235.233Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_6"
                  d="M318.044 206.251L293.233 182.79L279.055 193.486L251.053 226.263L254.243 231.093L288.27 208.667L311.309 237.994L333.285 227.298L318.044 206.251Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_7"
                  opacity="0.1"
                  d="M318.044 206.251L293.233 182.79L279.055 193.486L251.053 226.263L254.243 231.093L288.27 208.667L311.309 237.994L333.285 227.298L318.044 206.251Z"
                  fill="black"
                />
                <path
                  id="Vector_8"
                  d="M320.171 221.777L316.981 224.192L291.106 215.567L285.08 213.152L273.029 215.567C273.029 215.567 273.029 205.906 284.371 206.251L296.068 209.012L309.892 210.047L320.171 221.777Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_9"
                  d="M343.209 247.31L335.411 252.14H326.196L283.307 236.614L220.57 247.654L218.797 234.544L276.218 210.047L326.55 226.263L343.209 247.31Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_10"
                  d="M292.878 185.895L287.561 186.93L286.403 185.614C285.485 184.573 284.904 183.291 284.732 181.929C284.56 180.567 284.804 179.187 285.435 177.959V177.959L300.321 158.983C300.321 158.983 304.575 149.668 311.309 153.463C318.044 157.258 305.638 163.469 305.638 163.469L298.195 174.854L298.904 180.72L292.878 185.895Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_11"
                  d="M326.551 163.469C334.185 163.469 340.374 157.444 340.374 150.013C340.374 142.581 334.185 136.557 326.551 136.557C318.916 136.557 312.727 142.581 312.727 150.013C312.727 157.444 318.916 163.469 326.551 163.469Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_12"
                  d="M320.348 159.846L326.728 174.682L341.969 168.472C341.969 168.472 337.007 156.741 337.007 156.396C337.007 156.051 320.348 159.846 320.348 159.846Z"
                  fill="#FFB9B9"
                />
                <path
                  id="Vector_13"
                  d="M213.201 240.576C213.201 240.576 216.376 235.338 215.035 234.727C213.694 234.115 207.999 231.678 207.999 231.678L199.648 228.984C199.648 228.984 187.597 211.551 187.333 226.711C187.068 241.871 196.107 245.515 196.107 245.515C196.107 245.515 204.168 262.402 208.735 259.709C213.301 257.016 217.871 247.875 217.871 247.875C217.871 247.875 209.636 243.566 213.201 240.576Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_14"
                  opacity="0.1"
                  d="M358.451 200.731L344.982 209.357L324.878 227.001L323.361 224.538L319.107 203.836H320.171L331.159 184.17L358.451 200.731Z"
                  fill="black"
                />
                <path
                  id="Vector_15"
                  d="M315.799 140.008L314.301 140.569C314.071 140.417 313.874 140.222 313.722 139.995C313.57 139.768 313.466 139.514 313.416 139.247C313.366 138.981 313.372 138.708 313.432 138.443C313.492 138.179 313.606 137.929 313.767 137.708L310.999 137.582C312.776 135.278 315.035 133.368 317.626 131.978C320.218 130.588 323.084 129.75 326.033 129.518C328.983 129.287 331.949 129.668 334.736 130.636C337.523 131.604 340.067 133.137 342.2 135.134C342.326 134.711 343.7 135.533 344.261 136.367C344.449 135.679 345.737 139.002 346.193 141.351C346.403 140.569 347.214 141.832 346.504 143.043C346.954 142.979 347.157 144.1 346.809 144.725C347.301 144.5 347.218 145.838 346.684 146.732C347.387 146.671 341.142 156.106 338.614 161.619C337.88 158.335 337.054 154.878 334.687 152.432C334.285 152.016 333.844 151.637 333.404 151.259L331.025 149.215C328.258 146.838 325.741 143.904 322.055 143.015C319.522 142.404 317.92 142.267 319.301 139.488C318.054 139.995 316.889 140.748 315.631 141.219C315.647 140.831 315.823 140.396 315.799 140.008Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_16"
                  d="M333.462 153.98C334.833 153.98 335.944 152.899 335.944 151.565C335.944 150.231 334.833 149.15 333.462 149.15C332.092 149.15 330.981 150.231 330.981 151.565C330.981 152.899 332.092 153.98 333.462 153.98Z"
                  fill="#FFB9B9"
                />
              </g>
              <g id="middleContent">
                <path
                  id="Line3"
                  d="M247.788 65.664H206.122V69.9556H247.788V65.664Z"
                  fill="#6C63FF"
                />
                <path
                  id="Line6"
                  d="M214.279 93.9894H172.613V98.2812H214.279V93.9894Z"
                  fill="#364D79"
                />
                <path
                  id="Line2"
                  d="M180.77 65.664H139.105V69.9556H180.77V65.664Z"
                  fill="#364D79"
                />
                <path
                  id="Line1"
                  d="M223.758 48.4969H163.795V55.7929H223.758V48.4969Z"
                  fill="#364D79"
                />
                <path
                  id="Line4"
                  d="M248.449 79.8268H139.105V84.1185H248.449V79.8268Z"
                  fill="#364D79"
                />
                <path
                  id="Line8"
                  d="M248.449 112.444V108.152H193.777H139.105V112.444H248.449Z"
                  fill="#364D79"
                />
                <path
                  id="Line7"
                  d="M247.787 93.9894H223.317V98.2812H247.787V93.9894Z"
                  fill="#364D79"
                />
                <path
                  id="Line5"
                  d="M163.575 93.9894H139.105V98.2812H163.575V93.9894Z"
                  fill="#6C63FF"
                />
                <path
                  id="Line9"
                  d="M163.575 122.315H139.105V126.607H163.575V122.315Z"
                  fill="#364D79"
                />
                <path
                  id="Line10"
                  d="M248.448 122.315H184.297V126.607H248.448V122.315Z"
                  fill="#364D79"
                />
              </g>
              <g id="leftTable">
                <path
                  id="Vector_17"
                  d="M52.4674 47.6384H0V91.8435H52.4674V47.6384Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_18"
                  d="M141.684 96.4612L71.7044 38.1965H24.6905V37.3383H72.03L142.257 95.809L141.684 96.4612Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_19"
                  d="M24.6905 44.6343C28.5865 44.6343 31.7449 41.5599 31.7449 37.7675C31.7449 33.975 28.5865 30.9007 24.6905 30.9007C20.7944 30.9007 17.6361 33.975 17.6361 37.7675C17.6361 41.5599 20.7944 44.6343 24.6905 44.6343Z"
                  fill="#6C63FF"
                />
                <g id="LeftTableContent">
                  <path
                    id="Vector_20"
                    d="M44.5311 62.3099H6.61353V64.2969H44.5311V62.3099Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_21"
                    d="M44.972 57.9387H7.05444V59.9256H44.972V57.9387Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_22"
                    d="M44.5311 76.902H6.61353V78.8888H44.5311V76.902Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_23"
                    d="M44.972 72.5306H7.05444V74.5175H44.972V72.5306Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_24"
                    d="M44.972 81.2731H7.05444V83.2601H44.972V81.2731Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_25"
                    d="M44.972 66.6812H7.05444V68.6681H44.972V66.6812Z"
                    fill="#6C63FF"
                  />
                </g>
              </g>
              <g id="rightTable">
                <path
                  id="Vector_26"
                  d="M237.996 68.0707L237.296 67.5489L285.046 6.86664H332.441V7.72533H285.482L237.996 68.0707Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_27"
                  d="M332.44 13.7336C336.337 13.7336 339.495 10.6592 339.495 6.8668C339.495 3.07437 336.337 0 332.44 0C328.544 0 325.386 3.07437 325.386 6.8668C325.386 10.6592 328.544 13.7336 332.44 13.7336Z"
                  fill="#6C63FF"
                />
                <g id="rightBack">
                  <path
                    id="Vector_28"
                    d="M349.134 20.5263H296.667V64.7314H349.134V20.5263Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_29"
                    d="M341.639 54.161H303.722V56.1479H341.639V54.161Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_30"
                    d="M341.198 49.7897H303.281V51.7766H341.198V49.7897Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_31"
                    d="M341.639 45.4184H303.722V47.4054H341.639V45.4184Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_312"
                    d="M341.639 39.5689H303.722V41.5559H341.639V39.5689Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_313"
                    d="M341.198 35.1977H303.281V37.1846H341.198V35.1977Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_314"
                    d="M341.639 30.8265H303.722V32.8134H341.639V30.8265Z"
                    fill="#6C63FF"
                  />
                </g>
                <g id="rightFront">
                  <path
                    id="Vector_315"
                    d="M370.325 41.0526H317.857V85.2576H370.325V41.0526Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_36"
                    d="M363.313 56.3563H325.395V58.3432H363.313V56.3563Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_37"
                    d="M362.872 51.985H324.954V53.9719H362.872V51.985Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_38"
                    d="M363.313 47.6137H325.395V49.6007H363.313V47.6137Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_39"
                    d="M363.313 62.2057H325.395V64.1927H363.313V62.2057Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_40"
                    d="M363.313 70.9482H325.395V72.9352H363.313V70.9482Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_41"
                    d="M362.872 66.577H324.954V68.5639H362.872V66.577Z"
                    fill="#6C63FF"
                  />
                </g>
              </g>
              <g id="tshirt">
                <path
                  id="Vector_42"
                  d="M331.159 182.1L320.171 201.766H316.272L313.791 208.666L308.119 210.046L323.361 226.262L344.982 207.286L358.451 198.661L331.159 182.1Z"
                  fill="#575A89"
                />
                <path
                  id="Vector_43"
                  d="M362.318 203.736C362.318 211.857 361.004 219.927 358.423 227.65L357.388 230.748L352.426 252.829L347.109 254.21L343.21 249.379L335.412 243.859L329.741 234.888L324.878 227.001L323.361 224.538L318.044 198.661L297.84 187.62L291.106 186.585L292.524 182.79L298.549 174.854L304.575 174.164L306.347 172.784L307.765 173.474L313.436 170.369L315.208 171.059L325.572 171.998L331.868 170.714L340.92 165.984L344.628 166.574L357.388 176.925C360.65 185.507 362.319 194.585 362.318 203.736V203.736Z"
                  fill="#575A89"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="445" height="260" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* {props.validatedCount >= 4 ? (
        <Button
          type="primary"
          size="large"
          className="result-button-positive"
          onClick={handleClickPositive}
        >
          You passed, please continue to next lesson
        </Button>
      ) : (
        <Button
          type="primary"
          size="large"
          className="result-button-negative"
          onClick={handleClickNegative}
        >
          You failed, please repeate the lesson
        </Button>
      )} */}
    </div>
  );
};
