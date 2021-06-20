import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Menu } from 'semantic-ui-react'

export default class Categories extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
    return (
            
            <Grid>
        <Grid.Column>
          <Menu fluid vertical tabular color="blue">            
          <Menu.Item as={NavLink} to="/jobAdvertList"
              name='JobAdverts'
              active={activeItem === 'JobAdverts'}
              onClick={this.handleItemClick}
            />
          <Menu.Item as={NavLink} to="/jobSeekerList"
              name='JobSeekers'
              active={activeItem === 'JobSeekers'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={NavLink} to="/jobPositionList"
              name='JobPositions'
              active={activeItem === 'JobPositions'}
              onClick={this.handleItemClick}
            />            
          </Menu>
        </Grid.Column>

       
      </Grid>
    )
}
}