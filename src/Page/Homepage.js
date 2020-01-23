import React, { Component } from 'react'
import { Container, Image, Embed, Grid, Button, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import Jobs from '../Component/Jobs'
import Partner from '../Component/Partner'
import CardTalent from '../Component/Talent/CardTalent'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { getAllTalent } from '../Redux/_action/ActionTalent'
import { getAllCompany } from '../Redux/_action/actionCompany'

class Homepage extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch(getAllCompany());
        this.props.dispatch(getAllTalent());
      }

    render(){
        const com = this.props.AllCompany;
        const talent = this.props.AllTalent;
        const Job = this.props.AllJob;
        return(
            <div>
                <Header/>
                <Container fluid style={style.container}>
                    <Image src='https://images3.alphacoders.com/857/857335.jpg' style={{height:'60vh', width:'100%'}}/>
                    <Container style={style.containerSecond}>
                        <Grid column={2} style={style.grid}>
                            <Grid.Column width={8}>
                                <Embed
                                id='liHgt4CbodY'
                                placeholder='https://i.ytimg.com/vi/liHgt4CbodY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA3vKOpm8mLTTZi5yeZTeMz5wqGVQ'
                                source='youtube'
                                />
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <h1>What is Kruuu?</h1>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate elit vestibulum justo consequat, vel feugiat ligula fermentum. Ut et dui nec nulla pretium vulputate. Fusce id turpis convallis, porta sem sodales, sagittis justo. Morbi iaculis orci tincidunt porttitor fermentum. Pellentesque nulla odio, ultricies quis sagittis sed, mattis quis massa. Curabitur lacinia ex nec nibh tristique, quis dapibus eros euismod. Pellentesque sed magna vitae dolor viverra vehicula ullamcorper sit amet nisi. Donec et libero nec turpis euismod condimentum. Quisque non nunc mollis, dapibus nisi sed, posuere felis. Nam quis facilisis nulla.</h4>
                            </Grid.Column>
                        </Grid>

                        <Grid column={3} divided style={style.grid2}>
                            <Grid.Row column={1}>
                                <Grid.Column>
                                    <h1>Why you should use Kruuu?</h1>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <Image style={style.image} size='small' src='https://www.netclipart.com/pp/m/38-383712_email-clipart-yellow-envelope-yellow-color-icon-mail.png'/>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate elit vestibulum justo consequat, vel feugiat ligula fermentum.</h4>
                                </Grid.Column>

                                <Grid.Column width={5} style={{margin:'0vh 2vw'}}>
                                    <Image style={style.image} size='small' src='https://www.netclipart.com/pp/m/38-383712_email-clipart-yellow-envelope-yellow-color-icon-mail.png'/>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate elit vestibulum justo consequat, vel feugiat ligula fermentum.</h4>
                                </Grid.Column>
                                
                                <Grid.Column width={5}>
                                    <Image style={style.image} size='small' src='https://www.netclipart.com/pp/m/38-383712_email-clipart-yellow-envelope-yellow-color-icon-mail.png'/>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate elit vestibulum justo consequat, vel feugiat ligula fermentum.</h4>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Grid style={style.grid2}>
                            <Grid.Row columns={1}>
                                <Grid.Column>
                                    <h1>Top Talent</h1>
                                </Grid.Column>
                            </Grid.Row>
                            <Card.Group itemsPerRow={3} style={style.group}>
                                {talent.slice(0, 3).map(Item => 
                                    <CardTalent
                                    name={Item.fullname}
                                    occupation={Item.occupation}
                                    image={Item.image}
                                    />
                                )}
                            </Card.Group>
                            <Grid.Row style={{margin:'0 42.5% 0 42.5%'}}>
                                <Link to='/Talents'><Button compact color='blue' size='large'>See All Talent</Button></Link>
                            </Grid.Row>  
                        </Grid>

                        <Grid style={style.grid2}>
                            <Grid.Row column={1}>
                                <Grid.Column>
                                    <h1>Jobs</h1>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Jobs/>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={1}>
                                <Grid.Row style={{margin:'0 43.3% 0 43.3%'}}>
                                    <Button compact color='blue' size='large'>See All Jobs</Button>
                                </Grid.Row> 
                            </Grid.Row>
                        </Grid>

                        <Grid style={style.grid2}>
                            <Grid.Row column={1}>
                                <Grid.Column>
                                    <h1>Company Partners</h1>
                                </Grid.Column>
                            </Grid.Row>
                            {this.props.AllCompany.map(Item=>
                            <Partner
                                image={Item.image}
                            />
                            )}
                            <Grid.Row columns={1}>
                                <Grid.Row style={{margin:'0 41.3% 0 41.3%'}}>
                                    <Button compact color='blue' size='large'>See All Company</Button>
                                </Grid.Row> 
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Container>
                <Footer/>
            </div>
        )
    }
}

// state
const mapStateToProps = state => ({
    AllCompany: state.reducerCompany.companies,
    AllTalent: state.ReducerTalent.talents,
    AllJob: state.ReducerJob.job
})

export default connect(mapStateToProps)(Homepage);

const style = {
    container: {
        backgroundColor:'#222324'
    },
    containerSecond: {
        padding:'20vh 0vw'
    },
    grid: {
        padding: '5vh 10%',
        color:'#fff'
    },
    grid2: {
        padding: '5vh 10%',
        color:'#fff',
        textAlign:'center'
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
    },
    group: {
        padding:'3vh 0vw'
    }
}