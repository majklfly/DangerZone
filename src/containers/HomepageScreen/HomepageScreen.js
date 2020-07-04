import React, { useEffect, useRef } from "react";
import "./HomepageScreen.scss";
import lottie from "lottie-web";

const HomepageScreen = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/questions.json"),
    });
    lottie.setSpeed(0.5);
  }, []);

  return (
    <>
      <div
        className="welcomeScreenContainer"
        data-test="welcomeScreenContainer"
      >
        <svg
          id="logo"
          width="736"
          height="143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-test="logo"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.23999"
            y="0.0480042"
            width="735"
            height="143"
            fill="black"
          >
            <rect
              fill="white"
              x="0.23999"
              y="0.0480042"
              width="735"
              height="143"
            />

            <path d="M5.23999 6.2C7.06399 5.912 9.07999 5.72 11.288 5.624C13.592 5.432 15.944 5.336 18.344 5.336C20.84 5.24 23.24 5.192 25.544 5.192C27.944 5.096 30.152 5.048 32.168 5.048C40.232 5.048 47.192 6.296 53.048 8.792C59 11.288 63.896 14.792 67.736 19.304C71.576 23.72 74.408 29.048 76.232 35.288C78.152 41.528 79.112 48.392 79.112 55.88C79.112 62.696 78.2 69.272 76.376 75.608C74.648 81.848 71.864 87.416 68.024 92.312C64.184 97.112 59.192 101 53.048 103.976C46.904 106.856 39.464 108.296 30.728 108.296C29.192 108.296 27.176 108.248 24.68 108.152C22.28 108.152 19.784 108.056 17.192 107.864C14.6 107.768 12.2 107.672 9.99199 107.576C7.78399 107.48 6.19999 107.336 5.23999 107.144V6.2ZM32.456 15.704C31.208 15.704 29.816 15.704 28.28 15.704C26.84 15.704 25.4 15.752 23.96 15.848C22.52 15.944 21.176 16.04 19.928 16.136C18.776 16.232 17.864 16.328 17.192 16.424V97.064C17.672 97.16 18.584 97.256 19.928 97.352C21.272 97.352 22.664 97.4 24.104 97.496C25.544 97.496 26.936 97.544 28.28 97.64C29.624 97.64 30.536 97.64 31.016 97.64C37.736 97.64 43.352 96.488 47.864 94.184C52.472 91.88 56.12 88.808 58.808 84.968C61.592 81.032 63.56 76.568 64.712 71.576C65.864 66.488 66.44 61.256 66.44 55.88C66.44 51.176 65.912 46.472 64.856 41.768C63.8 36.968 61.976 32.648 59.384 28.808C56.792 24.968 53.288 21.848 48.872 19.448C44.552 16.952 39.08 15.704 32.456 15.704Z" />
            <path d="M97.1547 40.328C100.803 38.12 105.027 36.488 109.827 35.432C114.723 34.376 119.811 33.848 125.091 33.848C130.083 33.848 134.067 34.52 137.043 35.864C140.115 37.208 142.419 38.984 143.955 41.192C145.587 43.304 146.643 45.656 147.123 48.248C147.699 50.84 147.987 53.432 147.987 56.024C147.987 61.784 147.843 67.4 147.555 72.872C147.267 78.344 147.123 83.528 147.123 88.424C147.123 91.976 147.267 95.336 147.555 98.504C147.843 101.672 148.371 104.6 149.139 107.288H140.643L137.619 97.208H136.899C136.035 98.552 134.931 99.896 133.587 101.24C132.339 102.488 130.803 103.64 128.979 104.696C127.155 105.656 125.043 106.472 122.643 107.144C120.243 107.816 117.507 108.152 114.435 108.152C111.363 108.152 108.483 107.672 105.795 106.712C103.203 105.752 100.947 104.408 99.0267 102.68C97.1067 100.856 95.5707 98.696 94.4187 96.2C93.3627 93.704 92.8347 90.872 92.8347 87.704C92.8347 83.48 93.6987 79.976 95.4267 77.192C97.1547 74.312 99.5547 72.056 102.627 70.424C105.795 68.696 109.539 67.496 113.859 66.824C118.275 66.056 123.123 65.672 128.403 65.672C129.747 65.672 131.043 65.672 132.291 65.672C133.635 65.672 134.979 65.768 136.323 65.96C136.611 63.08 136.755 60.488 136.755 58.184C136.755 52.904 135.699 49.208 133.587 47.096C131.475 44.984 127.635 43.928 122.067 43.928C120.435 43.928 118.659 44.072 116.739 44.36C114.915 44.552 112.995 44.888 110.979 45.368C109.059 45.752 107.187 46.28 105.363 46.952C103.635 47.528 102.099 48.2 100.755 48.968L97.1547 40.328ZM117.603 98.072C120.291 98.072 122.691 97.736 124.803 97.064C126.915 96.296 128.739 95.384 130.275 94.328C131.811 93.176 133.059 91.928 134.019 90.584C135.075 89.24 135.843 87.944 136.323 86.696V74.744C134.979 74.648 133.587 74.6 132.147 74.6C130.803 74.504 129.459 74.456 128.115 74.456C125.139 74.456 122.211 74.648 119.331 75.032C116.547 75.32 114.051 75.944 111.843 76.904C109.731 77.768 108.003 79.016 106.659 80.648C105.411 82.184 104.787 84.152 104.787 86.552C104.787 89.912 105.987 92.696 108.387 94.904C110.787 97.016 113.859 98.072 117.603 98.072Z" />
            <path d="M215.968 107V65.96C215.968 58.472 214.864 52.856 212.656 49.112C210.544 45.272 206.608 43.352 200.848 43.352C195.76 43.352 191.536 44.744 188.176 47.528C184.912 50.216 182.608 53.624 181.264 57.752V107H169.744V35H177.808L179.968 43.784H180.544C182.848 40.712 185.92 38.216 189.76 36.296C193.696 34.28 198.352 33.272 203.728 33.272C207.664 33.272 211.12 33.752 214.096 34.712C217.072 35.576 219.52 37.16 221.44 39.464C223.456 41.768 224.944 44.888 225.904 48.824C226.96 52.664 227.488 57.56 227.488 63.512V107H215.968Z" />
            <path d="M303.646 110.312C303.646 119.624 301.15 126.488 296.158 130.904C291.262 135.32 283.966 137.528 274.27 137.528C268.51 137.528 263.854 137.144 260.302 136.376C256.846 135.704 253.87 134.792 251.374 133.64L254.398 123.848C256.606 124.712 259.054 125.528 261.742 126.296C264.43 127.064 267.934 127.448 272.254 127.448C276.286 127.448 279.55 127.064 282.046 126.296C284.638 125.624 286.702 124.424 288.238 122.696C289.774 121.064 290.83 118.904 291.406 116.216C291.982 113.624 292.27 110.504 292.27 106.856V99.944H291.694C289.774 102.728 287.326 104.888 284.35 106.424C281.374 107.864 277.486 108.584 272.686 108.584C262.99 108.584 255.838 105.56 251.23 99.512C246.718 93.464 244.462 84.056 244.462 71.288C244.462 59 247.39 49.688 253.246 43.352C259.102 36.92 267.742 33.704 279.166 33.704C284.638 33.704 289.294 34.136 293.134 35C297.07 35.864 300.574 36.872 303.646 38.024V110.312ZM274.702 98.504C279.598 98.504 283.438 97.304 286.222 94.904C289.006 92.408 290.974 88.568 292.126 83.384V46.52C288.286 44.696 283.39 43.784 277.438 43.784C270.91 43.784 265.774 45.992 262.03 50.408C258.286 54.824 256.414 61.736 256.414 71.144C256.414 75.176 256.75 78.872 257.422 82.232C258.094 85.592 259.15 88.472 260.59 90.872C262.03 93.272 263.902 95.144 266.206 96.488C268.51 97.832 271.342 98.504 274.702 98.504Z" />
            <path d="M378.398 101.24C375.518 103.544 371.87 105.368 367.454 106.712C363.134 108.056 358.526 108.728 353.63 108.728C348.158 108.728 343.406 107.864 339.374 106.136C335.342 104.312 332.03 101.768 329.438 98.504C326.846 95.144 324.926 91.16 323.678 86.552C322.43 81.944 321.806 76.76 321.806 71C321.806 58.712 324.542 49.352 330.014 42.92C335.486 36.488 343.31 33.272 353.486 33.272C356.75 33.272 360.014 33.656 363.278 34.424C366.542 35.096 369.47 36.44 372.062 38.456C374.654 40.472 376.766 43.352 378.398 47.096C380.03 50.744 380.846 55.592 380.846 61.64C380.846 64.808 380.558 68.312 379.982 72.152H333.758C333.758 76.376 334.19 80.12 335.054 83.384C335.918 86.648 337.262 89.432 339.086 91.736C340.91 93.944 343.262 95.672 346.142 96.92C349.118 98.072 352.718 98.648 356.942 98.648C360.206 98.648 363.47 98.072 366.734 96.92C369.998 95.768 372.446 94.424 374.078 92.888L378.398 101.24ZM353.63 43.352C347.966 43.352 343.406 44.84 339.95 47.816C336.59 50.792 334.574 55.88 333.902 63.08H369.614C369.614 55.784 368.222 50.696 365.438 47.816C362.654 44.84 358.718 43.352 353.63 43.352Z" />
            <path d="M432.947 46.088C430.067 45.128 427.331 44.648 424.739 44.648C420.611 44.648 417.347 45.8 414.947 48.104C412.547 50.312 411.059 53.144 410.483 56.6V107H398.963V35H407.027L409.187 43.784H409.763C411.587 40.52 413.747 38.024 416.243 36.296C418.835 34.472 422.099 33.56 426.035 33.56C428.819 33.56 431.939 34.04 435.395 35L432.947 46.088Z" />
            <path d="M442.285 96.2L493.117 22.616L499.164 16.856H442.285V6.2H509.964V17L458.845 91.016L452.797 96.344H509.964V107H442.285V96.2Z" />
            <path d="M515.025 71C515.025 58.808 517.713 49.496 523.089 43.064C528.561 36.536 536.385 33.272 546.561 33.272C551.937 33.272 556.593 34.184 560.529 36.008C564.561 37.736 567.873 40.28 570.465 43.64C573.057 46.904 574.977 50.888 576.225 55.592C577.473 60.2 578.097 65.336 578.097 71C578.097 83.192 575.361 92.552 569.889 99.08C564.513 105.512 556.737 108.728 546.561 108.728C541.185 108.728 536.481 107.864 532.449 106.136C528.513 104.312 525.249 101.768 522.657 98.504C520.065 95.144 518.145 91.16 516.897 86.552C515.649 81.848 515.025 76.664 515.025 71ZM526.977 71C526.977 74.648 527.313 78.152 527.985 81.512C528.753 84.872 529.905 87.8 531.441 90.296C532.977 92.792 534.993 94.808 537.489 96.344C539.985 97.88 543.009 98.648 546.561 98.648C559.617 98.744 566.145 89.528 566.145 71C566.145 67.256 565.761 63.704 564.993 60.344C564.321 56.984 563.217 54.056 561.681 51.56C560.145 49.064 558.129 47.096 555.633 45.656C553.137 44.12 550.113 43.352 546.561 43.352C533.505 43.256 526.977 52.472 526.977 71Z" />
            <path d="M642.484 107V65.96C642.484 58.472 641.38 52.856 639.172 49.112C637.06 45.272 633.124 43.352 627.364 43.352C622.276 43.352 618.052 44.744 614.692 47.528C611.428 50.216 609.124 53.624 607.78 57.752V107H596.26V35H604.324L606.484 43.784H607.06C609.364 40.712 612.436 38.216 616.276 36.296C620.212 34.28 624.868 33.272 630.244 33.272C634.18 33.272 637.636 33.752 640.612 34.712C643.588 35.576 646.036 37.16 647.956 39.464C649.972 41.768 651.46 44.888 652.42 48.824C653.476 52.664 654.004 57.56 654.004 63.512V107H642.484Z" />
            <path d="M727.57 101.24C724.69 103.544 721.042 105.368 716.626 106.712C712.306 108.056 707.698 108.728 702.802 108.728C697.33 108.728 692.578 107.864 688.546 106.136C684.514 104.312 681.202 101.768 678.61 98.504C676.018 95.144 674.098 91.16 672.85 86.552C671.602 81.944 670.978 76.76 670.978 71C670.978 58.712 673.714 49.352 679.186 42.92C684.658 36.488 692.482 33.272 702.658 33.272C705.922 33.272 709.186 33.656 712.45 34.424C715.714 35.096 718.642 36.44 721.234 38.456C723.826 40.472 725.938 43.352 727.57 47.096C729.202 50.744 730.018 55.592 730.018 61.64C730.018 64.808 729.73 68.312 729.154 72.152H682.93C682.93 76.376 683.362 80.12 684.226 83.384C685.09 86.648 686.434 89.432 688.258 91.736C690.082 93.944 692.434 95.672 695.314 96.92C698.29 98.072 701.89 98.648 706.114 98.648C709.378 98.648 712.642 98.072 715.906 96.92C719.17 95.768 721.618 94.424 723.25 92.888L727.57 101.24ZM702.802 43.352C697.138 43.352 692.578 44.84 689.122 47.816C685.762 50.792 683.746 55.88 683.074 63.08H718.786C718.786 55.784 717.394 50.696 714.61 47.816C711.826 44.84 707.89 43.352 702.802 43.352Z" />
          </mask>
          <path d="M5.23999 6.2C7.06399 5.912 9.07999 5.72 11.288 5.624C13.592 5.432 15.944 5.336 18.344 5.336C20.84 5.24 23.24 5.192 25.544 5.192C27.944 5.096 30.152 5.048 32.168 5.048C40.232 5.048 47.192 6.296 53.048 8.792C59 11.288 63.896 14.792 67.736 19.304C71.576 23.72 74.408 29.048 76.232 35.288C78.152 41.528 79.112 48.392 79.112 55.88C79.112 62.696 78.2 69.272 76.376 75.608C74.648 81.848 71.864 87.416 68.024 92.312C64.184 97.112 59.192 101 53.048 103.976C46.904 106.856 39.464 108.296 30.728 108.296C29.192 108.296 27.176 108.248 24.68 108.152C22.28 108.152 19.784 108.056 17.192 107.864C14.6 107.768 12.2 107.672 9.99199 107.576C7.78399 107.48 6.19999 107.336 5.23999 107.144V6.2ZM32.456 15.704C31.208 15.704 29.816 15.704 28.28 15.704C26.84 15.704 25.4 15.752 23.96 15.848C22.52 15.944 21.176 16.04 19.928 16.136C18.776 16.232 17.864 16.328 17.192 16.424V97.064C17.672 97.16 18.584 97.256 19.928 97.352C21.272 97.352 22.664 97.4 24.104 97.496C25.544 97.496 26.936 97.544 28.28 97.64C29.624 97.64 30.536 97.64 31.016 97.64C37.736 97.64 43.352 96.488 47.864 94.184C52.472 91.88 56.12 88.808 58.808 84.968C61.592 81.032 63.56 76.568 64.712 71.576C65.864 66.488 66.44 61.256 66.44 55.88C66.44 51.176 65.912 46.472 64.856 41.768C63.8 36.968 61.976 32.648 59.384 28.808C56.792 24.968 53.288 21.848 48.872 19.448C44.552 16.952 39.08 15.704 32.456 15.704Z" />
          <path d="M97.1547 40.328C100.803 38.12 105.027 36.488 109.827 35.432C114.723 34.376 119.811 33.848 125.091 33.848C130.083 33.848 134.067 34.52 137.043 35.864C140.115 37.208 142.419 38.984 143.955 41.192C145.587 43.304 146.643 45.656 147.123 48.248C147.699 50.84 147.987 53.432 147.987 56.024C147.987 61.784 147.843 67.4 147.555 72.872C147.267 78.344 147.123 83.528 147.123 88.424C147.123 91.976 147.267 95.336 147.555 98.504C147.843 101.672 148.371 104.6 149.139 107.288H140.643L137.619 97.208H136.899C136.035 98.552 134.931 99.896 133.587 101.24C132.339 102.488 130.803 103.64 128.979 104.696C127.155 105.656 125.043 106.472 122.643 107.144C120.243 107.816 117.507 108.152 114.435 108.152C111.363 108.152 108.483 107.672 105.795 106.712C103.203 105.752 100.947 104.408 99.0267 102.68C97.1067 100.856 95.5707 98.696 94.4187 96.2C93.3627 93.704 92.8347 90.872 92.8347 87.704C92.8347 83.48 93.6987 79.976 95.4267 77.192C97.1547 74.312 99.5547 72.056 102.627 70.424C105.795 68.696 109.539 67.496 113.859 66.824C118.275 66.056 123.123 65.672 128.403 65.672C129.747 65.672 131.043 65.672 132.291 65.672C133.635 65.672 134.979 65.768 136.323 65.96C136.611 63.08 136.755 60.488 136.755 58.184C136.755 52.904 135.699 49.208 133.587 47.096C131.475 44.984 127.635 43.928 122.067 43.928C120.435 43.928 118.659 44.072 116.739 44.36C114.915 44.552 112.995 44.888 110.979 45.368C109.059 45.752 107.187 46.28 105.363 46.952C103.635 47.528 102.099 48.2 100.755 48.968L97.1547 40.328ZM117.603 98.072C120.291 98.072 122.691 97.736 124.803 97.064C126.915 96.296 128.739 95.384 130.275 94.328C131.811 93.176 133.059 91.928 134.019 90.584C135.075 89.24 135.843 87.944 136.323 86.696V74.744C134.979 74.648 133.587 74.6 132.147 74.6C130.803 74.504 129.459 74.456 128.115 74.456C125.139 74.456 122.211 74.648 119.331 75.032C116.547 75.32 114.051 75.944 111.843 76.904C109.731 77.768 108.003 79.016 106.659 80.648C105.411 82.184 104.787 84.152 104.787 86.552C104.787 89.912 105.987 92.696 108.387 94.904C110.787 97.016 113.859 98.072 117.603 98.072Z" />
          <path d="M215.968 107V65.96C215.968 58.472 214.864 52.856 212.656 49.112C210.544 45.272 206.608 43.352 200.848 43.352C195.76 43.352 191.536 44.744 188.176 47.528C184.912 50.216 182.608 53.624 181.264 57.752V107H169.744V35H177.808L179.968 43.784H180.544C182.848 40.712 185.92 38.216 189.76 36.296C193.696 34.28 198.352 33.272 203.728 33.272C207.664 33.272 211.12 33.752 214.096 34.712C217.072 35.576 219.52 37.16 221.44 39.464C223.456 41.768 224.944 44.888 225.904 48.824C226.96 52.664 227.488 57.56 227.488 63.512V107H215.968Z" />
          <path d="M303.646 110.312C303.646 119.624 301.15 126.488 296.158 130.904C291.262 135.32 283.966 137.528 274.27 137.528C268.51 137.528 263.854 137.144 260.302 136.376C256.846 135.704 253.87 134.792 251.374 133.64L254.398 123.848C256.606 124.712 259.054 125.528 261.742 126.296C264.43 127.064 267.934 127.448 272.254 127.448C276.286 127.448 279.55 127.064 282.046 126.296C284.638 125.624 286.702 124.424 288.238 122.696C289.774 121.064 290.83 118.904 291.406 116.216C291.982 113.624 292.27 110.504 292.27 106.856V99.944H291.694C289.774 102.728 287.326 104.888 284.35 106.424C281.374 107.864 277.486 108.584 272.686 108.584C262.99 108.584 255.838 105.56 251.23 99.512C246.718 93.464 244.462 84.056 244.462 71.288C244.462 59 247.39 49.688 253.246 43.352C259.102 36.92 267.742 33.704 279.166 33.704C284.638 33.704 289.294 34.136 293.134 35C297.07 35.864 300.574 36.872 303.646 38.024V110.312ZM274.702 98.504C279.598 98.504 283.438 97.304 286.222 94.904C289.006 92.408 290.974 88.568 292.126 83.384V46.52C288.286 44.696 283.39 43.784 277.438 43.784C270.91 43.784 265.774 45.992 262.03 50.408C258.286 54.824 256.414 61.736 256.414 71.144C256.414 75.176 256.75 78.872 257.422 82.232C258.094 85.592 259.15 88.472 260.59 90.872C262.03 93.272 263.902 95.144 266.206 96.488C268.51 97.832 271.342 98.504 274.702 98.504Z" />
          <path d="M378.398 101.24C375.518 103.544 371.87 105.368 367.454 106.712C363.134 108.056 358.526 108.728 353.63 108.728C348.158 108.728 343.406 107.864 339.374 106.136C335.342 104.312 332.03 101.768 329.438 98.504C326.846 95.144 324.926 91.16 323.678 86.552C322.43 81.944 321.806 76.76 321.806 71C321.806 58.712 324.542 49.352 330.014 42.92C335.486 36.488 343.31 33.272 353.486 33.272C356.75 33.272 360.014 33.656 363.278 34.424C366.542 35.096 369.47 36.44 372.062 38.456C374.654 40.472 376.766 43.352 378.398 47.096C380.03 50.744 380.846 55.592 380.846 61.64C380.846 64.808 380.558 68.312 379.982 72.152H333.758C333.758 76.376 334.19 80.12 335.054 83.384C335.918 86.648 337.262 89.432 339.086 91.736C340.91 93.944 343.262 95.672 346.142 96.92C349.118 98.072 352.718 98.648 356.942 98.648C360.206 98.648 363.47 98.072 366.734 96.92C369.998 95.768 372.446 94.424 374.078 92.888L378.398 101.24ZM353.63 43.352C347.966 43.352 343.406 44.84 339.95 47.816C336.59 50.792 334.574 55.88 333.902 63.08H369.614C369.614 55.784 368.222 50.696 365.438 47.816C362.654 44.84 358.718 43.352 353.63 43.352Z" />
          <path d="M432.947 46.088C430.067 45.128 427.331 44.648 424.739 44.648C420.611 44.648 417.347 45.8 414.947 48.104C412.547 50.312 411.059 53.144 410.483 56.6V107H398.963V35H407.027L409.187 43.784H409.763C411.587 40.52 413.747 38.024 416.243 36.296C418.835 34.472 422.099 33.56 426.035 33.56C428.819 33.56 431.939 34.04 435.395 35L432.947 46.088Z" />
          <path d="M442.285 96.2L493.117 22.616L499.164 16.856H442.285V6.2H509.964V17L458.845 91.016L452.797 96.344H509.964V107H442.285V96.2Z" />
          <path d="M515.025 71C515.025 58.808 517.713 49.496 523.089 43.064C528.561 36.536 536.385 33.272 546.561 33.272C551.937 33.272 556.593 34.184 560.529 36.008C564.561 37.736 567.873 40.28 570.465 43.64C573.057 46.904 574.977 50.888 576.225 55.592C577.473 60.2 578.097 65.336 578.097 71C578.097 83.192 575.361 92.552 569.889 99.08C564.513 105.512 556.737 108.728 546.561 108.728C541.185 108.728 536.481 107.864 532.449 106.136C528.513 104.312 525.249 101.768 522.657 98.504C520.065 95.144 518.145 91.16 516.897 86.552C515.649 81.848 515.025 76.664 515.025 71ZM526.977 71C526.977 74.648 527.313 78.152 527.985 81.512C528.753 84.872 529.905 87.8 531.441 90.296C532.977 92.792 534.993 94.808 537.489 96.344C539.985 97.88 543.009 98.648 546.561 98.648C559.617 98.744 566.145 89.528 566.145 71C566.145 67.256 565.761 63.704 564.993 60.344C564.321 56.984 563.217 54.056 561.681 51.56C560.145 49.064 558.129 47.096 555.633 45.656C553.137 44.12 550.113 43.352 546.561 43.352C533.505 43.256 526.977 52.472 526.977 71Z" />
          <path d="M642.484 107V65.96C642.484 58.472 641.38 52.856 639.172 49.112C637.06 45.272 633.124 43.352 627.364 43.352C622.276 43.352 618.052 44.744 614.692 47.528C611.428 50.216 609.124 53.624 607.78 57.752V107H596.26V35H604.324L606.484 43.784H607.06C609.364 40.712 612.436 38.216 616.276 36.296C620.212 34.28 624.868 33.272 630.244 33.272C634.18 33.272 637.636 33.752 640.612 34.712C643.588 35.576 646.036 37.16 647.956 39.464C649.972 41.768 651.46 44.888 652.42 48.824C653.476 52.664 654.004 57.56 654.004 63.512V107H642.484Z" />
          <path d="M727.57 101.24C724.69 103.544 721.042 105.368 716.626 106.712C712.306 108.056 707.698 108.728 702.802 108.728C697.33 108.728 692.578 107.864 688.546 106.136C684.514 104.312 681.202 101.768 678.61 98.504C676.018 95.144 674.098 91.16 672.85 86.552C671.602 81.944 670.978 76.76 670.978 71C670.978 58.712 673.714 49.352 679.186 42.92C684.658 36.488 692.482 33.272 702.658 33.272C705.922 33.272 709.186 33.656 712.45 34.424C715.714 35.096 718.642 36.44 721.234 38.456C723.826 40.472 725.938 43.352 727.57 47.096C729.202 50.744 730.018 55.592 730.018 61.64C730.018 64.808 729.73 68.312 729.154 72.152H682.93C682.93 76.376 683.362 80.12 684.226 83.384C685.09 86.648 686.434 89.432 688.258 91.736C690.082 93.944 692.434 95.672 695.314 96.92C698.29 98.072 701.89 98.648 706.114 98.648C709.378 98.648 712.642 98.072 715.906 96.92C719.17 95.768 721.618 94.424 723.25 92.888L727.57 101.24ZM702.802 43.352C697.138 43.352 692.578 44.84 689.122 47.816C685.762 50.792 683.746 55.88 683.074 63.08H718.786C718.786 55.784 717.394 50.696 714.61 47.816C711.826 44.84 707.89 43.352 702.802 43.352Z" />
          <path
            d="M5.23999 6.2C7.06399 5.912 9.07999 5.72 11.288 5.624C13.592 5.432 15.944 5.336 18.344 5.336C20.84 5.24 23.24 5.192 25.544 5.192C27.944 5.096 30.152 5.048 32.168 5.048C40.232 5.048 47.192 6.296 53.048 8.792C59 11.288 63.896 14.792 67.736 19.304C71.576 23.72 74.408 29.048 76.232 35.288C78.152 41.528 79.112 48.392 79.112 55.88C79.112 62.696 78.2 69.272 76.376 75.608C74.648 81.848 71.864 87.416 68.024 92.312C64.184 97.112 59.192 101 53.048 103.976C46.904 106.856 39.464 108.296 30.728 108.296C29.192 108.296 27.176 108.248 24.68 108.152C22.28 108.152 19.784 108.056 17.192 107.864C14.6 107.768 12.2 107.672 9.99199 107.576C7.78399 107.48 6.19999 107.336 5.23999 107.144V6.2ZM32.456 15.704C31.208 15.704 29.816 15.704 28.28 15.704C26.84 15.704 25.4 15.752 23.96 15.848C22.52 15.944 21.176 16.04 19.928 16.136C18.776 16.232 17.864 16.328 17.192 16.424V97.064C17.672 97.16 18.584 97.256 19.928 97.352C21.272 97.352 22.664 97.4 24.104 97.496C25.544 97.496 26.936 97.544 28.28 97.64C29.624 97.64 30.536 97.64 31.016 97.64C37.736 97.64 43.352 96.488 47.864 94.184C52.472 91.88 56.12 88.808 58.808 84.968C61.592 81.032 63.56 76.568 64.712 71.576C65.864 66.488 66.44 61.256 66.44 55.88C66.44 51.176 65.912 46.472 64.856 41.768C63.8 36.968 61.976 32.648 59.384 28.808C56.792 24.968 53.288 21.848 48.872 19.448C44.552 16.952 39.08 15.704 32.456 15.704Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />

          <path
            d="M97.1547 40.328C100.803 38.12 105.027 36.488 109.827 35.432C114.723 34.376 119.811 33.848 125.091 33.848C130.083 33.848 134.067 34.52 137.043 35.864C140.115 37.208 142.419 38.984 143.955 41.192C145.587 43.304 146.643 45.656 147.123 48.248C147.699 50.84 147.987 53.432 147.987 56.024C147.987 61.784 147.843 67.4 147.555 72.872C147.267 78.344 147.123 83.528 147.123 88.424C147.123 91.976 147.267 95.336 147.555 98.504C147.843 101.672 148.371 104.6 149.139 107.288H140.643L137.619 97.208H136.899C136.035 98.552 134.931 99.896 133.587 101.24C132.339 102.488 130.803 103.64 128.979 104.696C127.155 105.656 125.043 106.472 122.643 107.144C120.243 107.816 117.507 108.152 114.435 108.152C111.363 108.152 108.483 107.672 105.795 106.712C103.203 105.752 100.947 104.408 99.0267 102.68C97.1067 100.856 95.5707 98.696 94.4187 96.2C93.3627 93.704 92.8347 90.872 92.8347 87.704C92.8347 83.48 93.6987 79.976 95.4267 77.192C97.1547 74.312 99.5547 72.056 102.627 70.424C105.795 68.696 109.539 67.496 113.859 66.824C118.275 66.056 123.123 65.672 128.403 65.672C129.747 65.672 131.043 65.672 132.291 65.672C133.635 65.672 134.979 65.768 136.323 65.96C136.611 63.08 136.755 60.488 136.755 58.184C136.755 52.904 135.699 49.208 133.587 47.096C131.475 44.984 127.635 43.928 122.067 43.928C120.435 43.928 118.659 44.072 116.739 44.36C114.915 44.552 112.995 44.888 110.979 45.368C109.059 45.752 107.187 46.28 105.363 46.952C103.635 47.528 102.099 48.2 100.755 48.968L97.1547 40.328ZM117.603 98.072C120.291 98.072 122.691 97.736 124.803 97.064C126.915 96.296 128.739 95.384 130.275 94.328C131.811 93.176 133.059 91.928 134.019 90.584C135.075 89.24 135.843 87.944 136.323 86.696V74.744C134.979 74.648 133.587 74.6 132.147 74.6C130.803 74.504 129.459 74.456 128.115 74.456C125.139 74.456 122.211 74.648 119.331 75.032C116.547 75.32 114.051 75.944 111.843 76.904C109.731 77.768 108.003 79.016 106.659 80.648C105.411 82.184 104.787 84.152 104.787 86.552C104.787 89.912 105.987 92.696 108.387 94.904C110.787 97.016 113.859 98.072 117.603 98.072Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M215.968 107V65.96C215.968 58.472 214.864 52.856 212.656 49.112C210.544 45.272 206.608 43.352 200.848 43.352C195.76 43.352 191.536 44.744 188.176 47.528C184.912 50.216 182.608 53.624 181.264 57.752V107H169.744V35H177.808L179.968 43.784H180.544C182.848 40.712 185.92 38.216 189.76 36.296C193.696 34.28 198.352 33.272 203.728 33.272C207.664 33.272 211.12 33.752 214.096 34.712C217.072 35.576 219.52 37.16 221.44 39.464C223.456 41.768 224.944 44.888 225.904 48.824C226.96 52.664 227.488 57.56 227.488 63.512V107H215.968Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M303.646 110.312C303.646 119.624 301.15 126.488 296.158 130.904C291.262 135.32 283.966 137.528 274.27 137.528C268.51 137.528 263.854 137.144 260.302 136.376C256.846 135.704 253.87 134.792 251.374 133.64L254.398 123.848C256.606 124.712 259.054 125.528 261.742 126.296C264.43 127.064 267.934 127.448 272.254 127.448C276.286 127.448 279.55 127.064 282.046 126.296C284.638 125.624 286.702 124.424 288.238 122.696C289.774 121.064 290.83 118.904 291.406 116.216C291.982 113.624 292.27 110.504 292.27 106.856V99.944H291.694C289.774 102.728 287.326 104.888 284.35 106.424C281.374 107.864 277.486 108.584 272.686 108.584C262.99 108.584 255.838 105.56 251.23 99.512C246.718 93.464 244.462 84.056 244.462 71.288C244.462 59 247.39 49.688 253.246 43.352C259.102 36.92 267.742 33.704 279.166 33.704C284.638 33.704 289.294 34.136 293.134 35C297.07 35.864 300.574 36.872 303.646 38.024V110.312ZM274.702 98.504C279.598 98.504 283.438 97.304 286.222 94.904C289.006 92.408 290.974 88.568 292.126 83.384V46.52C288.286 44.696 283.39 43.784 277.438 43.784C270.91 43.784 265.774 45.992 262.03 50.408C258.286 54.824 256.414 61.736 256.414 71.144C256.414 75.176 256.75 78.872 257.422 82.232C258.094 85.592 259.15 88.472 260.59 90.872C262.03 93.272 263.902 95.144 266.206 96.488C268.51 97.832 271.342 98.504 274.702 98.504Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M378.398 101.24C375.518 103.544 371.87 105.368 367.454 106.712C363.134 108.056 358.526 108.728 353.63 108.728C348.158 108.728 343.406 107.864 339.374 106.136C335.342 104.312 332.03 101.768 329.438 98.504C326.846 95.144 324.926 91.16 323.678 86.552C322.43 81.944 321.806 76.76 321.806 71C321.806 58.712 324.542 49.352 330.014 42.92C335.486 36.488 343.31 33.272 353.486 33.272C356.75 33.272 360.014 33.656 363.278 34.424C366.542 35.096 369.47 36.44 372.062 38.456C374.654 40.472 376.766 43.352 378.398 47.096C380.03 50.744 380.846 55.592 380.846 61.64C380.846 64.808 380.558 68.312 379.982 72.152H333.758C333.758 76.376 334.19 80.12 335.054 83.384C335.918 86.648 337.262 89.432 339.086 91.736C340.91 93.944 343.262 95.672 346.142 96.92C349.118 98.072 352.718 98.648 356.942 98.648C360.206 98.648 363.47 98.072 366.734 96.92C369.998 95.768 372.446 94.424 374.078 92.888L378.398 101.24ZM353.63 43.352C347.966 43.352 343.406 44.84 339.95 47.816C336.59 50.792 334.574 55.88 333.902 63.08H369.614C369.614 55.784 368.222 50.696 365.438 47.816C362.654 44.84 358.718 43.352 353.63 43.352Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M432.947 46.088C430.067 45.128 427.331 44.648 424.739 44.648C420.611 44.648 417.347 45.8 414.947 48.104C412.547 50.312 411.059 53.144 410.483 56.6V107H398.963V35H407.027L409.187 43.784H409.763C411.587 40.52 413.747 38.024 416.243 36.296C418.835 34.472 422.099 33.56 426.035 33.56C428.819 33.56 431.939 34.04 435.395 35L432.947 46.088Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M442.285 96.2L493.117 22.616L499.164 16.856H442.285V6.2H509.964V17L458.845 91.016L452.797 96.344H509.964V107H442.285V96.2Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M515.025 71C515.025 58.808 517.713 49.496 523.089 43.064C528.561 36.536 536.385 33.272 546.561 33.272C551.937 33.272 556.593 34.184 560.529 36.008C564.561 37.736 567.873 40.28 570.465 43.64C573.057 46.904 574.977 50.888 576.225 55.592C577.473 60.2 578.097 65.336 578.097 71C578.097 83.192 575.361 92.552 569.889 99.08C564.513 105.512 556.737 108.728 546.561 108.728C541.185 108.728 536.481 107.864 532.449 106.136C528.513 104.312 525.249 101.768 522.657 98.504C520.065 95.144 518.145 91.16 516.897 86.552C515.649 81.848 515.025 76.664 515.025 71ZM526.977 71C526.977 74.648 527.313 78.152 527.985 81.512C528.753 84.872 529.905 87.8 531.441 90.296C532.977 92.792 534.993 94.808 537.489 96.344C539.985 97.88 543.009 98.648 546.561 98.648C559.617 98.744 566.145 89.528 566.145 71C566.145 67.256 565.761 63.704 564.993 60.344C564.321 56.984 563.217 54.056 561.681 51.56C560.145 49.064 558.129 47.096 555.633 45.656C553.137 44.12 550.113 43.352 546.561 43.352C533.505 43.256 526.977 52.472 526.977 71Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M642.484 107V65.96C642.484 58.472 641.38 52.856 639.172 49.112C637.06 45.272 633.124 43.352 627.364 43.352C622.276 43.352 618.052 44.744 614.692 47.528C611.428 50.216 609.124 53.624 607.78 57.752V107H596.26V35H604.324L606.484 43.784H607.06C609.364 40.712 612.436 38.216 616.276 36.296C620.212 34.28 624.868 33.272 630.244 33.272C634.18 33.272 637.636 33.752 640.612 34.712C643.588 35.576 646.036 37.16 647.956 39.464C649.972 41.768 651.46 44.888 652.42 48.824C653.476 52.664 654.004 57.56 654.004 63.512V107H642.484Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M727.57 101.24C724.69 103.544 721.042 105.368 716.626 106.712C712.306 108.056 707.698 108.728 702.802 108.728C697.33 108.728 692.578 107.864 688.546 106.136C684.514 104.312 681.202 101.768 678.61 98.504C676.018 95.144 674.098 91.16 672.85 86.552C671.602 81.944 670.978 76.76 670.978 71C670.978 58.712 673.714 49.352 679.186 42.92C684.658 36.488 692.482 33.272 702.658 33.272C705.922 33.272 709.186 33.656 712.45 34.424C715.714 35.096 718.642 36.44 721.234 38.456C723.826 40.472 725.938 43.352 727.57 47.096C729.202 50.744 730.018 55.592 730.018 61.64C730.018 64.808 729.73 68.312 729.154 72.152H682.93C682.93 76.376 683.362 80.12 684.226 83.384C685.09 86.648 686.434 89.432 688.258 91.736C690.082 93.944 692.434 95.672 695.314 96.92C698.29 98.072 701.89 98.648 706.114 98.648C709.378 98.648 712.642 98.072 715.906 96.92C719.17 95.768 721.618 94.424 723.25 92.888L727.57 101.24ZM702.802 43.352C697.138 43.352 692.578 44.84 689.122 47.816C685.762 50.792 683.746 55.88 683.074 63.08H718.786C718.786 55.784 717.394 50.696 714.61 47.816C711.826 44.84 707.89 43.352 702.802 43.352Z"
            stroke="black"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
        </svg>
        <div className="dots-container">
          <div className="dotOne" />
          <div className="dotTwo" />
          <div className="dotThree" />
          <div className="dotFour" />
          <div className="dotFive" />
          <div className="dotSix" />
          <div className="dotSeven" />
          <div className="dotEight" />
        </div>

        <div className="homeScreenText" data-test="homeScreenText">
          <p>
            This site has been designed to improve general knowledge of HACCP
            Level 2 in UK/EU standards.
          </p>
          <div className="containerWelcomeAnimation" ref={container}></div>
        </div>
      </div>
    </>
  );
};

export default HomepageScreen;
