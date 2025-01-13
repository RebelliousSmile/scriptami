export interface Activity {
  title: string
  description: string
}

export interface Section {
  id: string
  title: string
  activities: Activity[]
}

export interface PageContent {
  header: {
    title: string
    intro: string
  }
  sections: Section[]
} 