export interface ProfilePersonal {
  name: string
  name_th?: string
  nickname?: string
  title: string
  email: string
}

export interface ProfileAbout {
  short: string
  description: string
  experience_years: number
}

export interface ProfileSkills {
  backend?: string[]
  database?: string[]
  concepts?: string[]
  [key: string]: string[] | undefined
}

export interface ProfileExperience {
  position: string
  company: string
  description: string
}

export interface ProfileProject {
  name: string
  type: string
  description: string
  role: string
  technologies: string[]
  integrations?: string[]
}

export interface ProfileContact {
  email: string
}

export interface ProfileData {
  personal: ProfilePersonal
  about: ProfileAbout
  skills: ProfileSkills
  experience: ProfileExperience[]
  projects: ProfileProject[]
  contact: ProfileContact
}
