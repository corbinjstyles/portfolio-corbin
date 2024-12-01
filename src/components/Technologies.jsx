import React from 'react'
import { GrMysql } from 'react-icons/gr'
import { RiReactjsLine } from 'react-icons/ri'
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-white"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies