export type CleanURISuccess = {
  result_url: string
}

export type CleanURIFailure = {
  error: string
}

export type CleanURIResponse = CleanURISuccess | CleanURIFailure
