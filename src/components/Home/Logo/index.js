import './index.scss'
import LogoS from '../../../assets/images/logo-a.png'
import { useRef } from 'react'
// import { useEffect } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import { gsap } from 'gsap-trial/all'


const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   //gsap.registerPlugin(window.DrawSVGPlugin)
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })

  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="A" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="250.000000pt"
        viewBox="0 0 300.000000 250.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="5px"
          className="svg-container"
        >
          <path

            ref={outlineLogoRef}
            d="M1092 2318 c-10 -13 -60 -133 -216 -523 -42 -104 -80 -199 -85 -210
-43 -100 -71 -169 -146 -355 -47 -118 -90 -224 -95 -235 -5 -11 -23 -56 -40
-100 -18 -44 -36 -89 -41 -100 -4 -11 -40 -99 -79 -195 -39 -96 -74 -184 -79
-195 -5 -11 -18 -42 -29 -70 -11 -27 -41 -101 -67 -164 -27 -68 -42 -118 -37
-123 5 -5 188 -6 443 -2 l435 7 49 141 c28 77 64 179 80 226 l30 85 435 2 435
3 44 -123 c23 -67 58 -164 77 -216 19 -52 34 -100 34 -108 0 -15 -16 -17 -25
-3 -4 6 -61 10 -139 10 -157 0 -152 -3 -195 121 -76 221 -119 316 -134 298 -2
-2 29 -94 69 -204 40 -110 73 -207 73 -216 1 -9 9 -20 18 -23 9 -4 211 -4 449
0 l433 7 -15 28 c-8 16 -27 61 -43 101 -31 81 -165 409 -321 793 -56 138 -153
376 -215 530 -62 154 -155 381 -205 505 -50 124 -99 244 -108 268 l-16 42
-178 2 c-98 1 -194 2 -214 3 -36 0 -37 -1 -64 -70 -15 -38 -80 -200 -145 -360
-65 -159 -166 -409 -225 -555 -136 -335 -277 -683 -392 -965 -50 -121 -97
-240 -106 -265 l-16 -45 -146 3 c-80 2 -149 8 -154 13 -11 10 5 52 409 1044
108 266 121 298 258 635 52 129 121 300 153 379 46 112 63 145 82 152 13 5 77
9 142 9 119 0 150 4 150 21 0 15 -316 11 -328 -3z m741 -40 c9 -7 73 -152 142
-323 70 -170 191 -470 270 -665 79 -195 180 -445 225 -555 214 -528 252 -626
246 -640 -4 -13 -38 -15 -219 -15 -233 0 -225 -2 -255 60 -30 63 -122 330
-114 330 4 0 3 4 -3 8 -5 4 -15 16 -21 27 -10 19 -26 20 -235 28 -123 4 -320
8 -437 8 -186 0 -216 -2 -232 -16 -17 -15 -40 -73 -131 -328 -17 -48 -38 -94
-46 -102 -12 -12 -54 -15 -228 -15 -206 0 -214 1 -220 20 -7 23 42 160 57 160
5 0 7 4 4 9 -3 4 3 27 14 49 11 23 20 46 20 52 0 5 4 18 9 28 5 9 26 60 47
112 20 52 52 128 70 168 19 40 34 77 34 82 0 5 18 51 39 102 21 51 47 114 56
141 10 26 22 47 26 47 5 0 8 3 7 8 -3 10 24 84 86 234 20 47 36 89 36 92 0 2
16 39 35 80 19 42 35 81 35 86 0 6 4 18 9 28 6 9 31 71 56 137 26 66 50 125
55 130 4 6 15 33 25 60 21 61 27 77 54 137 12 26 21 50 21 52 0 2 10 26 22 53
23 51 25 57 27 74 0 5 5 7 11 4 6 -3 7 1 4 10 -4 9 3 23 16 35 21 18 38 20
195 20 121 0 176 -4 188 -12z
 M1617 1700 c-9 -11 -17 -26 -17 -33 0 -8 -3 -17 -7 -21 -4 -3 -8 -14
-9 -23 -3 -21 -32 -112 -44 -138 -5 -11 -18 -49 -30 -85 -12 -36 -32 -81 -45
-101 -13 -20 -30 -58 -38 -85 -8 -27 -31 -94 -51 -149 -42 -118 -45 -149 -13
-166 31 -17 540 -13 568 4 25 16 24 49 -6 122 -14 33 -25 65 -25 71 0 6 -11
36 -24 65 -13 30 -43 113 -66 184 -24 72 -46 135 -50 140 -4 6 -20 48 -35 95
-28 85 -54 140 -66 140 -6 0 48 -155 221 -635 31 -88 56 -161 55 -163 -3 -4
-567 -4 -571 1 -2 2 13 48 34 103 21 54 46 128 56 164 10 36 24 76 31 90 15
28 138 371 149 413 8 32 6 33 -17 7z
M1494 1183 c8 -21 26 -72 41 -113 43 -121 47 -130 56 -130 20 0 8 44
-63 233 -5 15 -19 32 -29 38 -18 9 -19 8 -5 -28z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo