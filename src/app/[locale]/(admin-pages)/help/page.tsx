import { IconPlanet } from '@tabler/icons-react'

export default function HelpPage() {
  return (
    <div className='m-auto flex flex-col items-center justify-center gap-2'>
      <IconPlanet size={72} />
      <h1 className='text-4xl leading-tight font-bold'>Coming Soon 👀</h1>
      <p className='text-muted-foreground text-center'>
        This page has not been created yet. <br />
        Stay tuned though!
      </p>
    </div>
  )
}
