import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import JobAdvertList from '../pages/JobAdvertList'
import JobPositionList from '../pages/JobPositionList'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Categories from './Categories'
import JobSeeker from '../pages/JobSeeker'

export default function Dashboard() {
    return (
        <div>

            <Route exact path="/signUp" component={SignUp}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>

            <Grid>

            <Grid.Row>
                <Grid.Column width={4}>

                    {/*<Categories/> */}

                    <Route exact path="/" component={Categories}></Route>
                    <Route exact path="/jobSeekerList" component={Categories}></Route>
                    <Route exact path="/jobAdvertList" component={Categories}></Route>
                    <Route exact path="/jobPositionList" component={Categories}></Route>

                    <Route exact path="/jobSeeker" component={JobSeeker}></Route>

                </Grid.Column>

                <Grid.Column width={12}>

                    <Route exact path="/" component={JobAdvertList}></Route>
                    <Route exact path="/jobAdvertList" component={JobAdvertList}></Route>
                    <Route exact path="/jobSeekerList" component={JobSeekerList}></Route>
                    <Route exact path="/jobPositionList" component={JobPositionList}></Route>
                    {/* <Route exact path="/jobSeekerList"><JobSeekerList/></Route> */}

                </Grid.Column>



            </Grid.Row>
            </Grid>
        </div>
    )
}
