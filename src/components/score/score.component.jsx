import React from 'react'
import { ScoreContainer } from './score.styles'

const Score = ({score, date}) => {
  return (
      <ScoreContainer>
          Score: {score} | Date: {date}
      </ScoreContainer>
  )
}

export default Score