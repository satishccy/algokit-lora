import { ReactNode } from 'react'
import { Header } from '../components/header'
import { LeftSideBarMenu } from '../components/left-side-bar-menu'
import { cn } from '@/features/primitive/utils'

export interface LayoutPageProps {
  children?: ReactNode
}

export function LayoutPage({ children }: LayoutPageProps) {
  return (
    <>
      <Header className={cn('mb-1')} />
      <div className={cn('flex h-full flex-shrink flex-row')}>
        <LeftSideBarMenu className={cn('w-52')} />
        <div className={cn('grow p-4')}> {children}</div>
      </div>
    </>
  )
}
