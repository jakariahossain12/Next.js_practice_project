import Nevbar from '@/components/web/Nevbar'
import React, { ReactNode } from 'react'

export default function BaseLayout({children}:{children:ReactNode}) {
  return (
    <>
    <Nevbar/>
    {children}
    </>
  )
}
