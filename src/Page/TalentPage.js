import React, {Component} from 'react'
import {Container, Grid, Image, Input, Segment, Card} from 'semantic-ui-react'

import Header from '../Component/Header'
import Footer from '../Component/Footer'
import CardTop from '../Component/Talent/TopTalent'
import CardTalent from '../Component/Talent/CardTalent'

import { getAllTalent } from '../Redux/_action/ActionTalent'
import { connect } from 'react-redux'

class TalentPage extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
    this.props.dispatch(getAllTalent());
    }

    render () {
        const talent = this.props.AllTalent
        return (
            <div>
                <Header/>
                <Container fluid style={style.container}>
                    <Image src='https://wallpapersite.com/images/pages/pic_w/17426.jpg' style={{height:'60vh', width:'100%'}}/>
                    <Container style={style.containerSecond}>
                        <Grid style={style.grid}>
                            <Grid.Row>
                                <Input placeholder='Search' style={{width:'80%'}}/>
                            </Grid.Row>
                            
                            <Grid.Row>
                                <Input placeholder='Company Type' style={{width:'21%', marginRight: '1vw'}}/>
                                <Input placeholder='Business Field' style={{width:'21%', marginRight: '1vw'}}/>
                                <Input placeholder='Country' style={{width:'21%', marginRight: '1vw'}}/>
                                <Input placeholder='City' style={{width:'21%', marginRight: '1vw'}}/>
                            </Grid.Row>

                            <Grid.Row>
                                <Input placeholder='Association' style={{width:'21%', marginRight: '1vw'}}/>
                                <Input placeholder='Experience' style={{width:'21%', marginRight: '1vw'}}/>
                            </Grid.Row>
                            
                            <h1 style={style.title}>Top Talent</h1>
                            <Grid.Row>
                            <Card.Group itemsPerRow={3} style={style.group}>
                                {talent.reverse().slice(0, 3).map(Item => 
                                    <CardTop
                                    name={Item.fullname}
                                    occupation={Item.occupation}
                                    image={Item.image}
                                    />
                                )}
                            </Card.Group>
                            </Grid.Row>
                            
                            <h1 style={style.title}>Latest Talent & Crew</h1>
                            <Grid.Row>
                            <Card.Group itemsPerRow={3} style={style.group}>
                                {talent.reverse().map(Item => 
                                    <CardTalent
                                    name={Item.fullname}
                                    occupation={Item.occupation}
                                    image={Item.image}
                                    />
                                )}
                            </Card.Group>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Container>
                <Footer/>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    AllTalent: state.ReducerTalent.talents
})

export default connect (MapStateToProps)(TalentPage)

const style = {
    container: {
        backgroundColor:'#222324'
    },
    containerSecond: {
        padding:'20vh 0vw'
    },
    header: {
        backgroundColor:'#fff',
        fontSize:'32px',
        fontWeight:'bold',
        width:'750px',

    },
    headerContent: {
        textAlign:'center'
    },
    grid: {
        padding: '5vh 10%',
        color:'#fff'
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
    },
    title: {
        color:'#fff'
    }
}