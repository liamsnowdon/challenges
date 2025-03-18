export type JobEntity = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: 'Full Time' | 'Part Time' | 'Freelance'
  location: string
  website: string
  apply: string
  description: string
  requirements: {
    content: string
    items: string[]
  }
  role: {
    content: string
    items: string[]
  }
}
