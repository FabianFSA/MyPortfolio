import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import { Stack } from '@mui/material'
import { GitHub, Email, LinkedIn } from '@mui/icons-material'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function handleEmail (): void {
  const emailAddress = 'sauerfabian.safa@gmail.com'
  const subject = 'Contact via Portvoliowebsite'

  window.location.href = `mailto:${emailAddress}?subject=${subject}`
}

export function handleLinkeIn (): void {
  window.open('https://www.linkedin.com/in/fabian-sauer-9367891b1/')
}

export function handleGithub (): void {
  window.open('https://github.com/FabianFSA')
}

export default function NavBar (): ReactJSXElement {
  return (
  <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
    <Email cursor="pointer" onClick={handleEmail} />
    <LinkedIn cursor="pointer" onClick={handleLinkeIn}/>
    <GitHub cursor="pointer" onClick={handleGithub}/>
  </Stack>
  )
}
