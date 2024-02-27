'use client'

import { Power } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function ComputerBody() {
  const [load, setLoad] = useState<boolean>(false)
  const [power, setPower] = useState<boolean>(false)

  const handlePc = () => {
    setPower(!power)

    setTimeout(() => {
      setLoad(true)
      run2()
    }, 1000)

    function run2() {
      setTimeout(() => {
        setLoad(false)
      }, 3000)
    }
  }

  return (
    <div className="relative bg-black w-screen min-h-screen overflow-hidden">
      <div
        className="absolute -translate-x-2/4 translate-y-[-60%] bg-transparent w-[2701px] h-[1656px] left-2/4 top-[80%]"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full"
          style={{ transform: 'rotateX(72deg)' }}
        >
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.486)]"
            style={{
              backfaceVisibility: 'hidden',
            }}
          ></div>
        </div>
      </div>

      <div
        className="absolute -translate-x-2/4 translate-y-[-80%] bg-transparent w-[862px] h-[396px] blur-[3.5rem] left-2/4 top-[80%]"
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: 'rotateX(72deg)',
          }}
        >
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.486)]"
            style={{
              backfaceVisibility: 'hidden',
            }}
          ></div>
        </div>
      </div>
      <div className="relative w-screen h-screen">
        <div
          className="absolute -translate-x-2/4 translate-y-[-20%] w-[1030px] h-[740px] rounded-[10px] left-2/4 top-[20%]"
          style={{
            background:
              'linear-gradient(to bottom,rgba(255, 255, 255, 0.15) 0%,rgba(0, 0, 0, 0.15) 100%),radial-gradient(at top center,rgba(255, 255, 255, 0.4) 0%,rgba(0, 0, 0, 0.4) 120%)#989898',
          }}
        >
          <div
            className="absolute -translate-x-2/4 translate-y-[-20%] w-[1020px] h-[730px] bg-[#e4e4e1] bg-[radial-gradient(_at_top_center,rgb(255_255_255_/_72%)_0%,rgb(0_0_0_/_40%)_100%_),linear-gradient(_to_top,rgb(64_64_64_/_27%)_0%,rgba(143,152,157,0.6)_100%_)] rounded-md left-2/4 top-[20%]"
            style={{ backgroundBlendMode: 'normal, multiply' }}
          >
            <div className="absolute -translate-x-2/4 translate-y-[-20%] w-[820px] h-[605px] bg-[linear-gradient(178deg,#bfbfbf_0%,#737373_100%)] rounded-[5px] left-2/4 top-[20%]">
              {power ? (
                <>
                  {/* {load && <LoadingComponent />} */}
                  <div className="absolute -translate-x-2/4 translate-y-[-20%] w-[800px] h-[600px] rounded-[5px] left-2/4 top-[20%] bg-green-700">
                    <div className="absolute h-7 w-[800px] flex bottom-0 inset-x-0">
                      <div className="w-[58px] h-7">
                        <div className="bg-[#c0c0c0] absolute w-[800px] h-7">
                          <span className="absolute w-[800px] h-px inset-x-0"></span>
                          <span className="absolute w-[800px] h-px inset-x-0"></span>
                        </div>
                        <button className="absolute -translate-y-2/4 w-[54px] h-[22px] flex justify-between items-center px-[4.5px] py-0 border-0 left-0.5 top-2/4 bg-slate-400">
                          <span className="absolute w-[54px] h-[22px] border-l-white border-r-black border-t-white border-b-black border-b border-solid border-r border-t border-l left-0 top-0"></span>
                          <span className="absolute w-[52px] h-5 border-l-[#dfdfdf] border-r-[#808080] border-t-[#dfdfdf] border-b-[#808080] border-b border-solid border-r border-t border-l left-px top-px"></span>
                          <Image
                            src="/logo.svg"
                            alt="logo"
                            width={17}
                            height={15}
                          />
                          <Image
                            src="/startText.svg"
                            alt="text"
                            width={26}
                            height={9}
                          />
                        </button>
                      </div>

                      <div className="z-[29] flex items-center">
                        <Image
                          src="/dividerOne.svg"
                          alt="divider"
                          width={4}
                          height={22}
                        />
                        <Image
                          src="/dividerTwo.svg"
                          alt="divider"
                          width={3}
                          height={18}
                          style={{ marginLeft: '1px' }}
                        />
                      </div>

                      {/* <MiniNav />

                      <ProccessBox /> */}
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute -translate-x-2/4 translate-y-[-20%] w-[800px] h-[600px] bg-black overflow-hidden rounded-[5px] left-2/4 top-[20%]"></div>
              )}

              <button
                className="cursor-pointer absolute bottom-[-55px] right-[-81px] w-[46px] h-[42px] bg-[linear-gradient(to_right,#43434359_0%,#000000a1_100%)] rounded-[50%] border-l-[5px] border-l-[rgb(20,20,20)] border-t-4 border-t-[rgba(17,17,17,0.87)] border-0 border-solid flex items-center justify-center"
                onClick={handlePc}
              >
                <span
                  className={`absolute w-[15px] h-[15px] bg-[rgb(22,22,22)] rounded-[50%] -left-9 top-[15px] ${
                    power
                      ? 'bg-[rgb(62,255,62)] shadow-[0px_0px_30px_10px_rgb(25_205_6)]'
                      : ''
                  }`}
                />
                <Power
                  className={`-ml-1 w-[20px] h-[20px] ${
                    power ? '' : 'text-[#ff3e3e]'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputerBody
