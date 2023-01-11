import { Box } from "@mui/material";

export default function Globe({ geoJson, size }) {
  
  return (
    <Box className="globe-box">
      <Box sx={{ width: "650px", height: "650px" }}>
        <iframe
          src="https://www.labwork.com.br/project/MerryChristmas.html"
          title="globe"
        />
      </Box>
      <svg
        className="globe-text"
        width="460"
        height="163"
        viewBox="0 0 544 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M428.245 104.209H441.476L394.147 0.19458H370.278V3.43388C372.362 3.29284 374.449 3.6804 376.324 4.55691C378.2 5.43341 379.796 6.76739 380.951 8.42241L337.202 104.209H350.262L389.339 18.691L428.245 104.209Z"
          fill="white"
        />
        <path
          d="M187.405 104.209H200.669L153.102 0.19458H129.233V3.43388C131.323 3.29035 133.415 3.67656 135.296 4.55303C137.177 5.4295 138.78 6.76479 139.94 8.42241L96.1572 104.209H109.251L148.328 18.691L187.405 104.209Z"
          fill="white"
        />
        <path
          d="M299.93 0.19458V3.43388C312.137 3.43388 313.024 14.2208 313.058 16.6178V104.306H325.947V0.19458H299.93Z"
          fill="white"
        />
        <path
          d="M533.608 0.19458V84.4164L462.921 0.19458H439.769V3.43388C442.956 3.25403 446.091 4.26427 448.505 6.24917C450.919 8.23406 452.422 11.0365 452.692 14.0588V104.273H462.921V19.8247L533.574 104.209H543.803V0.19458H533.608Z"
          fill="white"
        />
        <path
          d="M224.642 104.208H211.753V16.3909C211.753 14.1882 210.832 3.23934 198.557 3.23934V3.46619e-05H259.934C268.018 -0.0114435 275.819 2.82818 281.825 7.96871C284.793 10.5627 287.137 13.7345 288.696 17.2677C290.256 20.8008 290.994 24.612 290.861 28.4411C291.006 32.3639 290.303 36.2733 288.796 39.928C287.289 43.5828 285.009 46.9054 282.098 49.6909C276.301 55.2301 267.368 58.0159 255.569 58.0159H224.608V104.176L224.642 104.208ZM224.642 10.9813V47.391H256.047C261.717 47.7458 267.313 46.0048 271.664 42.5321C273.563 40.6839 275.033 38.4777 275.979 36.056C276.924 33.6344 277.325 31.0513 277.154 28.4735C277.306 26.0564 276.885 23.6377 275.924 21.3953C274.962 19.1529 273.483 17.144 271.596 15.5163C266.761 12.2751 260.891 10.7293 254.99 11.1432L224.642 10.9813Z"
          fill="white"
        />
        <path
          d="M91.2819 68.2198C86.9855 49.4643 61.1729 47.9094 44.8396 43.3744L41.8049 42.597C33.212 40.4914 24.4146 37.2521 25.3693 27.0807C26.7333 5.66895 71.7775 3.79015 77.6425 24.0682H90.259C84.7009 -2.78563 41.9413 -5.31228 22.9825 7.87167C20.1731 9.8187 17.7953 12.2727 15.9851 15.0933C14.1748 17.914 12.9675 21.0459 12.4323 24.3101C11.8971 27.5743 12.0445 30.9067 12.866 34.1168C13.6874 37.3268 15.1669 40.3516 17.2198 43.0181C17.5608 43.4716 17.9018 43.9251 18.2768 44.3462C29.1202 55.7809 50.4318 56.364 66.0149 61.2229C73.2779 63.1017 79.8589 68.2522 79.6543 75.9941C77.7448 99.9326 27.0402 98.4749 23.2893 75.7674V67.572H0V70.8113C2.04888 70.6681 4.10071 71.0493 5.94182 71.9153C7.78294 72.7813 9.34601 74.1003 10.4683 75.735C15.208 117.457 100.898 112.048 91.2819 68.2198Z"
          fill="white"
        />
        <path
          d="M203.363 129.151C205.691 129.22 207.992 129.635 210.183 130.382C211.129 130.702 212.042 131.103 212.911 131.581C214.45 132.416 215.78 133.558 216.81 134.928C217.84 136.298 218.546 137.863 218.878 139.517H215.468C215.192 138.57 214.754 137.673 214.173 136.861C213.679 136.157 213.095 135.515 212.434 134.949C211.827 134.434 211.15 133.998 210.422 133.654C209.75 133.326 209.055 133.045 208.342 132.812C206.682 132.291 204.941 132.039 203.193 132.067C201.329 131.948 199.459 132.194 197.699 132.791C195.94 133.387 194.328 134.32 192.963 135.533C190.707 138.424 189.489 141.927 189.489 145.526C189.489 149.125 190.707 152.628 192.963 155.519C194.312 156.753 195.922 157.701 197.685 158.298C199.449 158.896 201.327 159.13 203.193 158.985C205.055 159.002 206.907 158.74 208.683 158.208C210.21 157.729 211.624 156.969 212.843 155.973C213.983 155.007 214.901 153.826 215.537 152.507C216.193 151.085 216.552 149.556 216.594 148.004H203.193V145.056H220.242C220.242 145.574 220.242 146.093 220.242 146.611C220.294 147.377 220.294 148.145 220.242 148.911C220.135 149.843 219.941 150.764 219.663 151.664C219.352 152.67 218.917 153.638 218.367 154.547C217.026 156.887 214.969 158.785 212.468 159.989C209.631 161.32 206.492 161.966 203.329 161.868C200.847 161.925 198.374 161.552 196.032 160.767C193.99 160.107 192.135 159.01 190.609 157.561C189.084 156.112 187.929 154.349 187.235 152.409C185.7 147.925 185.7 143.094 187.235 138.61C187.936 136.677 189.094 134.922 190.618 133.479C192.143 132.036 193.995 130.944 196.032 130.285C198.374 129.5 200.847 129.127 203.329 129.184L203.363 129.151Z"
          fill="white"
        />
        <path
          d="M230.063 161.706H226.448V129.313H240.701C242.281 129.307 243.857 129.448 245.407 129.734C246.87 129.996 248.261 130.536 249.499 131.321C250.717 132.082 251.704 133.131 252.363 134.366C253.12 135.917 253.482 137.614 253.42 139.322C253.461 140.698 253.242 142.069 252.772 143.371C252.378 144.418 251.763 145.377 250.965 146.19C250.184 146.961 249.259 147.587 248.237 148.036C247.145 148.487 246 148.813 244.827 149.008L254.239 161.609H250.147L240.974 149.332H230.131V161.609L230.063 161.706ZM230.063 132.358V146.481H240.292C241.433 146.474 242.572 146.398 243.702 146.254C244.751 146.107 245.758 145.766 246.669 145.25C247.583 144.734 248.336 143.996 248.851 143.112C249.39 141.949 249.669 140.691 249.669 139.42C249.669 138.148 249.39 136.89 248.851 135.727C248.336 134.843 247.583 134.105 246.669 133.589C245.754 133.088 244.747 132.758 243.702 132.617C242.575 132.444 241.434 132.357 240.292 132.358H230.063Z"
          fill="white"
        />
        <path
          d="M275.583 161.933H274.798C272.477 161.925 270.173 161.553 267.979 160.832C265.944 160.165 264.097 159.066 262.578 157.617C261.059 156.169 259.909 154.41 259.215 152.474C257.625 147.987 257.625 143.129 259.215 138.642C259.926 136.702 261.092 134.941 262.625 133.492C264.16 132.047 266.011 130.941 268.047 130.253C270.237 129.515 272.543 129.132 274.867 129.119H275.583C277.907 129.126 280.213 129.509 282.402 130.253C284.432 130.933 286.274 132.04 287.79 133.492C289.297 134.961 290.459 136.716 291.2 138.642C292.768 143.133 292.768 147.984 291.2 152.474C290.512 154.407 289.368 156.166 287.855 157.614C286.342 159.063 284.5 160.163 282.471 160.832C280.255 161.56 277.927 161.932 275.583 161.933V161.933ZM275.242 132.131C271.569 132.122 268.009 133.337 265.183 135.565C263.952 136.934 263.018 138.519 262.433 140.231C261.848 141.943 261.623 143.748 261.773 145.542C261.488 149.174 262.712 152.767 265.183 155.552C267.677 157.754 270.949 158.991 274.355 159.018H275.276C275.571 159.001 275.867 159.001 276.162 159.018C279.568 159.042 282.849 157.798 285.301 155.552C287.559 152.668 288.779 149.169 288.779 145.575C288.779 141.98 287.559 138.481 285.301 135.597C282.481 133.355 278.919 132.128 275.242 132.131V132.131Z"
          fill="white"
        />
        <path
          d="M298.669 129.41H302.352V145.963C302.344 147.753 302.492 149.541 302.795 151.308C303.026 152.784 303.584 154.197 304.432 155.454C305.27 156.637 306.456 157.561 307.841 158.11C311.287 159.374 315.103 159.374 318.548 158.11C319.868 157.529 320.989 156.609 321.788 155.454C322.636 154.197 323.194 152.784 323.425 151.308C323.726 149.552 323.874 147.775 323.868 145.995V129.507H327.55V146.352C327.592 148.531 327.352 150.707 326.834 152.83C326.418 154.624 325.604 156.314 324.447 157.786C323.29 159.226 321.747 160.344 319.981 161.026C315.572 162.529 310.75 162.529 306.341 161.026C304.6 160.333 303.082 159.216 301.942 157.786C300.784 156.311 299.96 154.623 299.521 152.83C299.004 150.707 298.763 148.531 298.805 146.352L298.669 129.41Z"
          fill="white"
        />
        <path
          d="M338.598 161.706H334.949V129.313H349.1C350.679 129.309 352.255 129.45 353.806 129.734C355.258 129.996 356.638 130.536 357.863 131.321C359.083 132.09 360.08 133.137 360.762 134.366C361.453 135.931 361.809 137.61 361.809 139.306C361.809 141.003 361.453 142.682 360.762 144.246C360.091 145.492 359.092 146.552 357.863 147.324C356.628 148.09 355.251 148.628 353.806 148.911C352.255 149.195 350.679 149.336 349.1 149.332H338.598V161.609V161.706ZM338.598 132.358V146.481H348.827C349.968 146.476 351.107 146.4 352.237 146.255C353.295 146.102 354.313 145.761 355.238 145.25C356.141 144.732 356.883 143.994 357.386 143.113C357.942 141.953 358.23 140.694 358.23 139.42C358.23 138.146 357.942 136.886 357.386 135.727C356.883 134.845 356.141 134.107 355.238 133.589C354.311 133.088 353.293 132.759 352.237 132.617C351.112 132.427 349.97 132.34 348.827 132.358H338.598Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}