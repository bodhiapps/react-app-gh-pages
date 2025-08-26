import { useState } from 'react'

import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
      <div className='mb-8 flex space-x-8'>
        <a
          href='https://vite.dev'
          target='_blank'
          className='transition-transform duration-300 hover:scale-110'
          rel='noreferrer'
        >
          <img
            src={viteLogo}
            className='h-24 w-24 drop-shadow-lg hover:drop-shadow-2xl'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
          className='transition-transform duration-300 hover:scale-110'
          rel='noreferrer'
        >
          <img
            src={reactLogo}
            className='h-24 w-24 animate-spin-slow drop-shadow-lg hover:drop-shadow-2xl'
            alt='React logo'
          />
        </a>
      </div>
      <h1 className='mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent'>
        Vite + React + Tailwind + shadcn/ui
      </h1>

      <div className='mb-8 flex gap-6'>
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Counter Demo</CardTitle>
            <CardDescription>
              Test the interactive counter with shadcn/ui Button component
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center space-y-4'>
            <Button onClick={() => setCount(count => count + 1)} size='lg'>
              count is {count}
            </Button>
            <p className='text-center text-sm text-muted-foreground'>
              Edit{' '}
              <code className='rounded bg-muted px-2 py-1 text-primary'>
                src/App.tsx
              </code>{' '}
              and save to test HMR
            </p>
          </CardContent>
        </Card>

        <Card className='w-80'>
          <CardHeader>
            <CardTitle>shadcn/ui Integration</CardTitle>
            <CardDescription>
              Beautiful, accessible components built with Radix UI and Tailwind
              CSS
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>
            <Button variant='default' className='w-full'>
              Default Button
            </Button>
            <Button variant='secondary' className='w-full'>
              Secondary Button
            </Button>
            <Button variant='outline' className='w-full'>
              Outline Button
            </Button>
            <Button variant='ghost' className='w-full'>
              Ghost Button
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className='max-w-2xl text-center text-gray-400'>
        Click on the Vite and React logos to learn more. This template now
        includes Tailwind CSS and shadcn/ui components!
      </p>
    </div>
  )
}

export default App
