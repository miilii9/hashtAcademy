"use client";
import BlogCard from "@/components/BlogCard";
import ProductCard from "@/components/ProductCard";
import SeminarCard from "@/components/SeminarCard";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const blogs = [1, 2, 3, 4, 5, 6]
  const slide = [1, 2, 3, 4]
  const product = [1, 2, 3, 4]
  return (
    <main className="relative overflow-hidden">
      {/* Home hero section */}
      <div className="flex justify-center items-center top-0 z-0 w-full">
        {/* Vector */}
        <div className="md:hidden absolute -top-80 bg-black w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="491.031"
            height="830.648"
            viewBox="0 0 491.031 830.648"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#c95dff" />
                <stop offset="1" stopColor="#0ff2ff" />
              </linearGradient>
              <clipPath id="clip-path">
                <path
                  id="Path_463"
                  data-name="Path 463"
                  d="M168.919,0A92.776,92.776,0,0,0,88.766,46.259L12.352,178.6a92.883,92.883,0,0,0,0,92.563L88.766,403.509a89.014,89.014,0,0,0,8.348,12,96.451,96.451,0,0,0-7.983,11.588L12.719,559.483a92.87,92.87,0,0,0,0,92.562L89.132,784.39a92.723,92.723,0,0,0,80.154,46.259H322.111a92.775,92.775,0,0,0,80.154-46.259l76.414-132.344a92.875,92.875,0,0,0,0-92.562L402.265,427.095a100.083,100.083,0,0,0-8.3-12,89.7,89.7,0,0,0,7.984-11.587l76.366-132.343a92.656,92.656,0,0,0,0-92.563L401.947,46.259A92.856,92.856,0,0,0,321.747,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  id="Path_464"
                  data-name="Path 464"
                  d="M136.512,0A74.977,74.977,0,0,0,71.737,37.384L9.982,144.338a75.064,75.064,0,0,0,0,74.806L71.737,326.1a71.937,71.937,0,0,0,6.747,9.7,77.949,77.949,0,0,0-6.452,9.365L10.279,452.149a75.054,75.054,0,0,0,0,74.8L72.032,633.908a74.935,74.935,0,0,0,64.776,37.384H260.316a74.976,74.976,0,0,0,64.776-37.384l61.754-106.954a75.058,75.058,0,0,0,0-74.8l-61.754-106.99a80.887,80.887,0,0,0-6.709-9.7,72.492,72.492,0,0,0,6.452-9.364l61.716-106.954a74.88,74.88,0,0,0,0-74.806L324.835,37.384A75.042,75.042,0,0,0,260.021,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <path
                  id="Path_465"
                  data-name="Path 465"
                  d="M101.069,0A55.51,55.51,0,0,0,53.111,27.678L7.391,106.863a55.575,55.575,0,0,0,0,55.383L53.111,241.43a53.26,53.26,0,0,0,5,7.179,57.711,57.711,0,0,0-4.776,6.933L7.61,334.754a55.567,55.567,0,0,0,0,55.383l45.72,79.185A55.479,55.479,0,0,0,101.288,497h91.44a55.51,55.51,0,0,0,47.958-27.678l45.721-79.185a55.57,55.57,0,0,0,0-55.383l-45.721-79.212a59.884,59.884,0,0,0-4.967-7.179,53.664,53.664,0,0,0,4.777-6.933l45.692-79.184a55.438,55.438,0,0,0,0-55.383L240.5,27.678A55.558,55.558,0,0,0,192.51,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
              <clipPath id="clip-path-4">
                <path
                  id="Path_466"
                  data-name="Path 466"
                  d="M73.431,0A40.331,40.331,0,0,0,38.588,20.11L5.37,77.641a40.378,40.378,0,0,0,0,40.239l33.218,57.531a38.7,38.7,0,0,0,3.629,5.216,41.931,41.931,0,0,0-3.47,5.037L5.529,243.215a40.372,40.372,0,0,0,0,40.238l33.218,57.532a40.308,40.308,0,0,0,34.844,20.109h66.436a40.33,40.33,0,0,0,34.844-20.109l33.218-57.532a40.374,40.374,0,0,0,0-40.238L174.87,185.664a43.51,43.51,0,0,0-3.609-5.216,38.99,38.99,0,0,0,3.471-5.037l33.2-57.531a40.279,40.279,0,0,0,0-40.239l-33.2-57.531A40.366,40.366,0,0,0,139.868,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
              <clipPath id="clip-path-5">
                <path
                  id="Path_467"
                  data-name="Path 467"
                  d="M49.753,0A27.326,27.326,0,0,0,26.145,13.626L3.638,52.606a27.358,27.358,0,0,0,0,27.263l22.507,38.98a26.219,26.219,0,0,0,2.459,3.534,28.409,28.409,0,0,0-2.351,3.413L3.746,164.79a27.354,27.354,0,0,0,0,27.263l22.507,38.98a27.311,27.311,0,0,0,23.608,13.625H94.874a27.326,27.326,0,0,0,23.608-13.625l22.507-38.98a27.355,27.355,0,0,0,0-27.263L118.482,125.8a29.481,29.481,0,0,0-2.445-3.534,26.419,26.419,0,0,0,2.352-3.413l22.493-38.98a27.291,27.291,0,0,0,0-27.263l-22.493-38.98A27.35,27.35,0,0,0,94.767,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
              <clipPath id="clip-path-6">
                <path
                  id="Path_468"
                  data-name="Path 468"
                  d="M32.533,0A17.868,17.868,0,0,0,17.1,8.91L2.379,34.4a17.889,17.889,0,0,0,0,17.827L17.1,77.713A17.144,17.144,0,0,0,18.7,80.024a18.576,18.576,0,0,0-1.537,2.232L2.45,107.753a17.886,17.886,0,0,0,0,17.827l14.717,25.488A17.858,17.858,0,0,0,32.6,159.977H62.036a17.868,17.868,0,0,0,15.437-8.909L92.19,125.58a17.887,17.887,0,0,0,0-17.827l-14.717-25.5a19.277,19.277,0,0,0-1.6-2.311,17.275,17.275,0,0,0,1.538-2.232L92.12,52.225a17.845,17.845,0,0,0,0-17.827L77.412,8.91A17.883,17.883,0,0,0,61.966,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#linear-gradient)"
                />
              </clipPath>
            </defs>
            <g
              id="Group_871"
              data-name="Group 871"
              transform="translate(50.516 204.287)"
            >
              <g
                id="Group_820"
                data-name="Group 820"
                transform="translate(-50.516 -204.287)"
                opacity="0.17"
              >
                <g
                  id="Group_819"
                  data-name="Group 819"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path)"
                >
                  <rect
                    id="Rectangle_1105"
                    data-name="Rectangle 1105"
                    width="969.109"
                    height="859.746"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -374.207, 603.812)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_822"
                data-name="Group 822"
                transform="translate(-3.414 -124.609)"
                opacity="0.17"
              >
                <g
                  id="Group_821"
                  data-name="Group 821"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path-2)"
                >
                  <rect
                    id="Rectangle_1106"
                    data-name="Rectangle 1106"
                    width="783.189"
                    height="694.807"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -302.417, 487.973)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_824"
                data-name="Group 824"
                transform="translate(48.102 -37.462)"
                opacity="0.17"
              >
                <g
                  id="Group_823"
                  data-name="Group 823"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path-3)"
                >
                  <rect
                    id="Rectangle_1107"
                    data-name="Rectangle 1107"
                    width="579.844"
                    height="514.409"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -223.898, 361.277)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_826"
                data-name="Group 826"
                transform="translate(88.271 30.49)"
                opacity="0.17"
              >
                <g
                  id="Group_825"
                  data-name="Group 825"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path-4)"
                >
                  <rect
                    id="Rectangle_1108"
                    data-name="Rectangle 1108"
                    width="421.284"
                    height="373.743"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -162.673, 262.485)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_828"
                data-name="Group 828"
                transform="translate(122.687 88.708)"
                opacity="0.17"
              >
                <g
                  id="Group_827"
                  data-name="Group 827"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path-5)"
                >
                  <rect
                    id="Rectangle_1109"
                    data-name="Rectangle 1109"
                    width="285.439"
                    height="253.228"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -110.218, 177.846)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_830"
                data-name="Group 830"
                transform="translate(147.716 131.049)"
              >
                <g
                  id="Group_829"
                  data-name="Group 829"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path-6)"
                >
                  <rect
                    id="Rectangle_1110"
                    data-name="Rectangle 1110"
                    width="186.643"
                    height="165.58"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -72.069, 116.29)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="sm:flex md:hidden pt-[20rem] mt-44">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1368.015"
            height="510.903"
            viewBox="0 0 1368.015 510.903"
          >
            <path
              id="Path_105"
              data-name="Path 105"
              d="M0,179.933H1366s2.1,390.432,0,388.949c-684.637,161.272-684.638,161.27-1366,0C-.22,568.732,0,179.933,0,179.933Z"
              transform="translate(0.583 -179.433)"
              fill="#00000"
              stroke="rgba(0,0,0,0)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="sm:hidden md:flex w-full">
          <svg
            width="100%"
            className="absolute sm:top-28 md:-top-28 2xl:-top-72"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1367.029 689.836"
          >
            <defs>
              <linearGradient
                id="a"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#c95dff" />
                <stop offset="1" stopColor="#0ff2ff" />
              </linearGradient>
              <clipPath id="g">
                <path
                  d="M0,0H1366s2.1,570.365,0,568.883c-684.637,161.272-684.638,161.27-1366,0C-.22,568.732,0,0,0,0Z"
                  stroke="rgba(0,0,0,0)"
                  strokeWidth="1"
                />
              </clipPath>
              <clipPath id="h">
                <path
                  d="M252.9,0a138.9,138.9,0,0,0-120,69.257L18.493,267.4a139.064,139.064,0,0,0,0,138.585L132.9,604.129a133.273,133.273,0,0,0,12.5,17.963,144.409,144.409,0,0,0-11.952,17.35L19.042,837.653a139.045,139.045,0,0,0,0,138.584l114.4,198.145a138.824,138.824,0,0,0,120.005,69.259h228.81a138.9,138.9,0,0,0,120.005-69.259L716.674,976.237a139.053,139.053,0,0,0,0-138.584L602.267,639.442a149.849,149.849,0,0,0-12.429-17.965,134.291,134.291,0,0,0,11.954-17.348L716.127,405.986a138.724,138.724,0,0,0,0-138.585L601.792,69.258A139.023,139.023,0,0,0,481.717,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
              <clipPath id="j">
                <path
                  d="M204.385,0A112.255,112.255,0,0,0,107.4,55.971L14.946,216.1a112.385,112.385,0,0,0,0,112L107.4,488.23a107.7,107.7,0,0,0,10.1,14.517,116.707,116.707,0,0,0-9.659,14.021L15.389,676.953a112.37,112.37,0,0,0,0,112l92.457,160.131a112.191,112.191,0,0,0,96.983,55.972H389.742a112.254,112.254,0,0,0,96.983-55.972L579.183,788.95a112.376,112.376,0,0,0,0-112L486.725,516.768A121.1,121.1,0,0,0,476.68,502.25a108.528,108.528,0,0,0,9.661-14.02l92.4-160.13a112.11,112.11,0,0,0,0-112l-92.4-160.13A112.352,112.352,0,0,0,389.3,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
              <clipPath id="l">
                <path
                  d="M151.319,0a83.11,83.11,0,0,0-71.8,41.438L11.065,159.994a83.206,83.206,0,0,0,0,82.919L79.518,361.467A79.741,79.741,0,0,0,87,372.215,86.4,86.4,0,0,0,79.845,382.6l-68.452,118.6a83.194,83.194,0,0,0,0,82.918L79.845,702.664a83.062,83.062,0,0,0,71.8,41.439h136.9a83.108,83.108,0,0,0,71.8-41.439l68.453-118.555a83.2,83.2,0,0,0,0-82.918L360.353,382.6a89.658,89.658,0,0,0-7.437-10.749,80.348,80.348,0,0,0,7.152-10.38l68.41-118.554a83,83,0,0,0,0-82.919L360.068,41.439A83.181,83.181,0,0,0,288.224,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
              <clipPath id="n">
                <path
                  d="M109.941,0A60.383,60.383,0,0,0,57.774,30.108L8.039,116.243a60.453,60.453,0,0,0,0,60.245l49.734,86.135a57.936,57.936,0,0,0,5.434,7.809,62.777,62.777,0,0,0-5.2,7.542L8.278,364.14a60.445,60.445,0,0,0,0,60.244L58.011,510.52a60.349,60.349,0,0,0,52.168,30.108h99.467a60.382,60.382,0,0,0,52.168-30.108l49.734-86.136a60.448,60.448,0,0,0,0-60.244l-49.734-86.165a65.144,65.144,0,0,0-5.4-7.81,58.379,58.379,0,0,0,5.2-7.541l49.7-86.135a60.305,60.305,0,0,0,0-60.245l-49.7-86.135A60.435,60.435,0,0,0,209.409,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
              <clipPath id="p">
                <path
                  d="M74.49,0A40.912,40.912,0,0,0,39.144,20.4L5.447,78.76a40.96,40.96,0,0,0,0,40.819l33.7,58.361a39.254,39.254,0,0,0,3.681,5.291,42.534,42.534,0,0,0-3.52,5.11l-33.7,58.381a40.954,40.954,0,0,0,0,40.818l33.7,58.361a40.889,40.889,0,0,0,35.346,20.4h67.393a40.912,40.912,0,0,0,35.346-20.4l33.7-58.361a40.956,40.956,0,0,0,0-40.818l-33.7-58.381a44.139,44.139,0,0,0-3.661-5.291,39.555,39.555,0,0,0,3.521-5.11l33.676-58.361a40.859,40.859,0,0,0,0-40.819L177.251,20.4A40.948,40.948,0,0,0,141.884,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
              <clipPath id="r">
                <path
                  d="M48.708,0A26.752,26.752,0,0,0,25.6,13.339L3.562,51.5a26.783,26.783,0,0,0,0,26.69L25.6,116.351A25.668,25.668,0,0,0,28,119.811a27.812,27.812,0,0,0-2.3,3.341L3.668,161.326a26.779,26.779,0,0,0,0,26.69L25.7,226.178a26.737,26.737,0,0,0,23.112,13.339H92.88a26.751,26.751,0,0,0,23.112-13.339l22.034-38.161a26.78,26.78,0,0,0,0-26.69l-22.034-38.174a28.861,28.861,0,0,0-2.394-3.46,25.864,25.864,0,0,0,2.3-3.341l22.02-38.161a26.717,26.717,0,0,0,0-26.69L115.9,13.339A26.775,26.775,0,0,0,92.775,0Z"
                  transform="translate(0 -0.001)"
                  fill="url(#a)"
                />
              </clipPath>
            </defs>
            <g transform="translate(0.098)" clipPath="url(#g)">
              <rect
                width="1366"
                height="768"
                stroke="rgba(0,0,0,0)"
                strokeWidth="1"
              />
              <g transform="translate(31.832 -268.948)" opacity="0.17">
                <g transform="translate(0 0.001)" clipPath="url(#h)">
                  <rect
                    width="1450.942"
                    height="1287.205"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -560.259, 904.023)"
                    fill="url(#a)"
                  />
                </g>
              </g>
              <g transform="translate(102.351 -149.654)" opacity="0.17">
                <g transform="translate(0 0.001)" clipPath="url(#j)">
                  <rect
                    width="1172.584"
                    height="1040.26"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -452.776, 730.59)"
                    fill="url(#a)"
                  />
                </g>
              </g>
              <g transform="translate(179.48 -19.179)" opacity="0.17">
                <g transform="translate(0 0.001)" clipPath="url(#l)">
                  <rect
                    width="868.137"
                    height="770.169"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -335.218, 540.901)"
                    fill="url(#a)"
                  />
                </g>
              </g>
              <g transform="translate(239.622 82.559)" opacity="0.17">
                <g transform="translate(0 0.001)" clipPath="url(#n)">
                  <rect
                    width="630.744"
                    height="559.565"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -243.552, 392.991)"
                    fill="url(#a)"
                  />
                </g>
              </g>
              <g transform="translate(291.148 169.722)" opacity="0.17">
                <g transform="translate(0 0.001)" clipPath="url(#p)">
                  <rect
                    width="427.357"
                    height="379.131"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -165.018, 266.269)"
                    fill="url(#a)"
                  />
                </g>
              </g>
              <g transform="translate(328.622 233.114)">
                <g transform="translate(0 0.001)" clipPath="url(#r)">
                  <rect
                    width="279.44"
                    height="247.906"
                    transform="matrix(0.523, -0.853, 0.853, 0.523, -107.902, 174.108)"
                    fill="url(#a)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Home banner */}
      <div className="flex sm:absolute w-full flex-col md:relative sm:items-center lg:items-start lg:w-auto lg:mr-48 md:mt-20 sm:mt-48 sm:top-0">
        <div className="sm:w-44 lg:w-auto">
          <Image src="/hasht.svg" width={300} height={300} />
        </div>
        <h1 className="text-white font-Dana lg:text-4xl sm:text-2xl mt-6">
          افق بی نهایت
        </h1>
        <p className="text-white sm:text-center mt-4 leading-7 sm sm:text-sm lg:text-lg font-light md:text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <br /> صنعت چاپ و با
          استفاده از طراحان گرافیک است
        </p>
        <button className=" text-white border border-blue-300 w-40 px-6 py-2 rounded-xl mt-6">
          بیشتر بخوانید
        </button>
      </div>
      {/* Hero cards */}
      <div className="sm:absolute md:static sm:top-[30rem] md:top-0 flex flex-wrap justify-center lg:mt-32 mb-36">
        <Link href="/courses">
          <div className="flex flex-col justify-center items-center relative sm:mx-4 lg:mx-2 sm:mt-4 bg-white w-40 h-48 px-4 shadow-md rounded-2xl">
            <Image src="/book.svg" width={70} height={70} />
            <h6 className=" text-center mt-4">آموزش های درسی و استعداد یابی</h6>
          </div>
        </Link>
        <Link href="/courses">
          <div className="flex flex-col justify-center items-center relative sm:mx-4 lg:mx-2 sm:mt-4 bg-white w-40 h-48 px-4 shadow-md rounded-2xl">
            <Image src="/target.svg" width={70} height={70} />
            <h6 className=" text-center mt-4">آموزش های درسی و استعداد یابی</h6>
          </div>
        </Link>
        <Link href="/courses">
          <div className="flex flex-col justify-center items-center relative sm:mx-4 lg:mx-2 sm:mt-4 bg-white w-40 h-48 px-4 shadow-md rounded-2xl">
            <Image src="/laptop.svg" width={70} height={70} />
            <h6 className=" text-center mt-4">آموزش های درسی و استعداد یابی</h6>
          </div>
        </Link>
        <Link href="/courses">
          <div className="flex flex-col justify-center items-center relative sm:mx-4 lg:mx-2 sm:mt-4 bg-white w-40 h-48 px-4 shadow-md rounded-2xl">
            <Image src="/people.svg" width={70} height={70} />

            <h6 className=" text-center mt-4">آموزش های درسی و استعداد یابی</h6>
          </div>
        </Link>
        <Link href="/courses">
          <div className="flex flex-col justify-center items-center relative sm:mx-4 lg:mx-2 sm:mt-4 bg-white w-40 h-48 px-4 shadow-md rounded-2xl">
            <Image src="/paper.svg" width={70} height={70} />
            <h6 className=" text-center mt-4">آموزش های درسی و استعداد یابی</h6>
          </div>
        </Link>
      </div>
      {/* Home first slider */}
      <div className="flex items-center sm:mr-20 md:mx-24 my-12 md:mt-12 sm:mt-[10rem]">
        <h4 className="w-48 lg:text-xl font-bold">آخرین همایش ها</h4>
        <div className="h-1 w-full bg-gradient-to-r from-mainBlue to-mainPurple to-80% rounded-3xl"></div>
      </div>
      <div className="flex py-4 overflow-scroll scrollbar scrollbar-h-1 scrollbar-thumb-rounded scrollbar-thumb-mainPurple sm:justify-start md:justify-center">
        {slide.map((seminar) => <SeminarCard />)}
      </div>

      {/* Home second slider */}
      <div className="flex items-center sm:mr-20 md:mx-24 sm:my-12">
        <h4 className="w-48 lg:text-xl font-bold">دوره های پرطرفدار </h4>
        <div className="h-1 w-full bg-gradient-to-r from-mainBlue to-mainPurple to-80% rounded-3xl"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center mb-24">
        {product.map((card) => <ProductCard />)}

      </div>
      {/* Home Page blogs */}
      <div className="bg-gray-700  flex flex-col rounded-t-3xl ">
        <div className=" bg-gray-700 rounded-3xl w-full ">
          <div className="w-full flex items-center h-12 my-16 sm:pr-12  md:px-24">
            <h4 className="w-56 ml-2 lg:text-xl font-bold text-white my-6">
              آخرین مطالب مجله
            </h4>
            <div className="h-1 w-full bg-gradient-to-r from-mainBlue to-mainPurple to-80% rounded-3xl"></div>
          </div>
          <div className=" w-full">
            {/* Footer cards */}
            <div className="w-full pb-20 justify-center flex flex-wrap">
              {blogs.map((blog) => <BlogCard />)}
            </div>
          </div>
          <Link href="/blogs">
            <div className="w-full md:mb-44 sm:mb-24 flex justify-center items-center">
              <button className="px-4 py-1 border border-purple-400 rounded-lg text-white font-light">
                مشاهده مطالب بیشتر
              </button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
