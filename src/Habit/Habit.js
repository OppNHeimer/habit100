import React, { Component } from 'react'
import { returnBlocks, axiosIncrement } from './HabitHelpers'

class Habit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      streak: this.props.habit.streak
    }
    this.incrementStreak = this.incrementStreak.bind(this)
  }

  incrementStreak (e) {
    axiosIncrement(this.props.habit._id, this)
  }

  render () {
    let blocks = returnBlocks(this.state.streak, this.props.habit.hue, this) // returns blocks and button

    return (
      <div>
        <p> {this.props.habit.name} </p>
        {blocks}
      </div>
    )
  }
}

export default Habit
