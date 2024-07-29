'use client'
import BtnGitHub from '@/components/BtnGitHub'
import { ProImages, ProImages2 } from '@/constants/index'
import Image from 'next/image'
import React from 'react'
import '../../style/projectItem.css'
import dynamic from 'next/dynamic'

const page = dynamic(() => import('../../components/Content'), { ssr: false })

export default page
