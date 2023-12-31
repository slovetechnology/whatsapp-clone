import React, { useState } from 'react'
import img from '../assets/images/avatar.png'
import { FaEllipsisV, FaSearch } from 'react-icons/fa'
import { MdFilterList } from 'react-icons/md'
import AllChats from '../pages/AllChats'
import { BiUser } from 'react-icons/bi'
import { BsCamera, BsSearch } from 'react-icons/bs'
import AllGroups from '../pages/AllGroups'
import AllFeeds from '../pages/AllFeeds'
import { useAtom } from 'jotai'
import { ACTIVEROUTE, ROUTES } from './store'

const SideNav = () => {
    const [routes, setRoutes] = useAtom(ROUTES)
    const [active, setActive] = useAtom(ACTIVEROUTE)
    return (
        <div>
            <div className="">
                <div className="bg-main">
                    <div className="flex items-center justify-between w-11/12 mx-auto py-4">
                        <div className="text-white text-2xl font-semibold">E-Class</div>
                        <div className="flex items-center gap-6">
                            <button className='text-white text-xl'> <BsCamera /> </button>
                            <button className='text-white text-xl'> <BsSearch /> </button>
                            <button className='text-white text-xl'> <BiUser /> </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 capitalize">
                        <button onClick={() => setActive(routes.allChats)} className={`capitalize font-semibold border-b-2 ${active === routes.allChats ? 'border-green-300 text-green-300' : 'border-transparent text-slate-300'} py-3 text-lg`}>chats</button>
                        <button onClick={() => setActive(routes.allGroups)} className={`capitalize font-semibold border-b-2 ${active === routes.allGroups ? 'border-green-300 text-green-300' : 'border-transparent text-slate-300'} py-3 text-lg`}>groups</button>
                        <button onClick={() => setActive(routes.allFeeds)} className={`capitalize font-semibold border-b-2 ${active === routes.allFeeds ? 'border-green-300 text-green-300' : 'border-transparent text-slate-300'} py-3 text-lg`}>feeds</button>
                    </div>
                </div>
            </div>
            {/* <div className="hidden lg:block">
                <div className='bg-main text-slate-300'>
                    <div className="flex items-center justify-between w-11/12 mx-auto py-1">
                        <div className="flex items-center gap-2">
                            <img src={img} alt="" className="w-14 h-14 rounded-full object-cover" />
                            <div className="">
                            </div>
                        </div>
                        <div className="flex flex-row tems-center gap-10 text-xl">
                            <button> <FaSearch /> </button>
                            <button> <FaEllipsisV /> </button>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="bg-main  w-11/12 mx-auto rounded-lg flex items-center gap-2 px-3">
                        <FaSearch className='text-slate-400' />
                        <input type="text" placeholder='Search or start a new text' className="outline-none w-full text-slate-400 bg-transparent p-2 border-none rounded-lg" />
                        <MdFilterList className='text-2xl text-slate-400' />
                    </div>
                </div>
            </div> */}
            <div className="h-[84.5vh] mt-auto overflow-y-auto pb-20">
                {[routes.allChats, routes.singleChat].includes(active) && <AllChats />}
                {active === routes.allGroups && <AllGroups />}
                {active === routes.allFeeds && <AllFeeds />}
            </div>
        </div>
    )
}

export default SideNav