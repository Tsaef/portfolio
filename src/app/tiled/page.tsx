import portfolioData from '@/data/portfolio.json'
import Image from "next/image";

export default function TileDPage() {

  const { colors, personal } = portfolioData

  const rdmIndex = Math.floor(Math.random() * colors.length);
  const color = colors[rdmIndex];

  return (
    <div style={{ backgroundColor: color.secondary }} className="h-screen flex flex-col items-center justify-center p-8">
      <div style={{ backgroundColor: color.primary }} className="h-5/6 w-5/6 rounded-3xl p-5 flex flex-col">
        <div style={{ backgroundColor: color.dark, color: color.secondary }} className="flex items-center justify-center rounded-3xl h-24 text-3xl font-clash-regular">
          {personal.name}
        </div>
        <div className="flex flex-row h-full w-full mt-5 overflow-hidden gap-5">
          <div className="w-2/3 h-full flex flex-col gap-5">
            <div className="w-full h-3/5 flex flex-row gap-5">
              <div style={{ backgroundColor: color.dark, color: color.secondary }} className="rounded-3xl w-4/6 h-full flex flex-col justify-between p-5">
                <div className="flex w-full justify-end">
                  <svg className='animate-slower-spin' version="1.0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="82.000000pt" height="82.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                       stroke="none">
                      <path d="M575 1720 l-410 -238 -3 -489 -2 -488 407 -235 c243 -140 417 -235 432 -235 15 0 194 97 433 235 l408 235 0 486 0 486 -412 239 c-226 132 -418 240 -427 241 -9 1 -200 -106 -426 -237z m385 -30 l0 -160 -37 0 c-49 0 -396 -18 -493 -25 -54 -5 -72 -3 -64 5 12 12 575 338 587 339 4 1 7 -71 7 -159z m386 -10 c153 -89 283 -166 289 -171 6 -6 -18 -8 -70 -4 -122 8 -444 25 -487 25 l-38 0 0 161 c0 132 2 160 14 156 7 -3 139 -78 292 -167z m-430 -233 c5 -14 -376 -679 -392 -684 -10 -3 -277 648 -268 656 3 3 148 13 322 22 174 9 321 17 325 18 4 0 10 -5 13 -12z m566 -11 c142 -6 260 -14 262 -17 9 -8 -258 -659 -269 -656 -15 5 -396 669 -392 682 3 7 29 10 73 7 38 -2 185 -9 326 -16z m-273 -375 c111 -191 201 -351 201 -355 0 -3 -185 -6 -411 -6 -387 0 -411 1 -405 18 4 9 80 143 168 297 229 397 228 395 237 395 5 0 99 -157 210 -349z m-859 -91 c61 -153 109 -283 106 -288 -6 -10 -198 -92 -215 -92 -8 0 -11 104 -11 330 0 182 2 330 4 330 2 0 54 -126 116 -280z m1415 -378 c-8 -8 -225 82 -225 93 0 6 51 136 112 290 l113 280 3 -329 c1 -181 0 -331 -3 -334z m-375 18 c0 -13 -379 -480 -390 -480 -11 0 -390 467 -390 480 0 7 130 10 390 10 260 0 390 -3 390 -10z m-721 -201 c90 -110 161 -202 159 -204 -2 -1 -124 67 -271 152 -185 107 -265 159 -258 166 11 11 179 84 197 86 6 1 84 -89 173 -200z m929 162 c108 -44 122 -55 96 -69 -11 -6 -133 -76 -272 -156 -140 -80 -252 -142 -250 -136 5 16 318 400 326 400 4 0 49 -17 100 -39z"/>
                    </g>
                  </svg>
                </div>
                <p className="text-4xl font-clash-regular">{personal.shortDescription}</p>
              </div>
              <div style={{ backgroundColor: color.dark }} className="rounded-3xl text-4xl font-clash-bold w-2/6 h-full flex relative overflow-hidden">
                <Image fill className="object-cover" src="" alt={personal.name} /> {/*src="/assets/profile.png"*/}
              </div>
            </div>
            <div className="rounded-3xl w-full h-2/5 flex flex-row gap-5">
              <div style={{ backgroundColor: color.dark }} className="rounded-3xl text-4xl font-clash-bold w-1/2 h-full flex">
                3
              </div>
              <div style={{ backgroundColor: color.secondary }} className="rounded-3xl text-4xl font-clash-bold w-1/2 h-full flex">
                4
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col gap-5">
            <div style={{ backgroundColor: color.dark }} className="rounded-2xl text-4xl font-clash-bold h-10/12 w-full flex flex-col">
              5
            </div>
            <div style={{ backgroundColor: color.dark }} className="rounded-2xl text-4xl font-clash-bold h-2/12 w-full flex flex-col">
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
