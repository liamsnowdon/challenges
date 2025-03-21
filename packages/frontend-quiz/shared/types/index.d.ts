export type Question = {
  question: string
  options: string[]
  answer: string
}

export type QuizEntity = {
  title: string
  icon: string
  questions: Question[]
}
