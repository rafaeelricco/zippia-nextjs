/* eslint-disable @next/next/no-img-element */
import { Button } from '@mantine/core'
import Link from 'next/link'
import styled from 'styled-components'

const ContainerHome = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh;
`

const ContainerItems = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2.618rem;
`

const Logo = styled.img`
  width: 50%;
`

export default function Home() {
  return (
    <>
      <ContainerHome>
        <ContainerItems>
          <Logo src="/icons/zippia-logo.png" alt="logo" />
          <Link href={'/test/jobs'}>
            <Button size="md" radius={'md'} variant="light" color={'blue'}>
              Find your dream job!
            </Button>
          </Link>
        </ContainerItems>
      </ContainerHome>
    </>
  )
}
