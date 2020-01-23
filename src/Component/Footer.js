import React, {Component} from 'react'
import {Icon, Container, Grid} from 'semantic-ui-react'


export default class Footer extends Component {
    render() {
        return(
            <div>
                <Container fluid style={style.container}> 
                    <Container>
                        <Grid column={4} style={style.grid}>
                            <Grid.Column width={7}>
                              <Icon size='big' name='stop' style={style.icon}/>
                              <label style={style.title}>KRUUU</label>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Resources</p>
                                <p style={style.text}>FAQ</p>
                                <p style={style.text}>Privacy & Policy</p>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Company</p>
                                <p style={style.text}>About Us</p>
                                <p style={style.text}>Contact</p>
                                <p style={style.text}>Facebook</p>
                                <p style={style.text}>Instagram</p>
                                <p style={style.text}>Twitter</p>
                            </Grid.Column>
                            
                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Legal</p>
                                <p style={style.text}>Terms & Conditions</p>
                            </Grid.Column>
                        </Grid>
                    </Container>
                    <Container fluid style={style.footer}>
                        <label style={style.textBottom}>Since 2018. All Right Reserved.</label>
                    </Container>
                </Container>
            </div>
        )
    };
}

const style = {
    container: {
        backgroundColor:'#3d3d3b'
    },
    grid: {
        padding: '6vh 0vw',
        color:'#fff'
    },
    icon: {
        marginBottom:'2vh'
    },
    title: {
        color:'#fff',
        fontSize:'32px',
        fontWeight:'bold'
    },
    text: {
        margin:'0vh 0vw'
    },
    textTittle: {
        fontWeight: 'bold'
    },
    textBottom: {
        fontWeight: 'bold',
        color: '#fff',
    },
    footer: {
        backgroundColor: '#222324',
        padding:'1vh 0vw',
        textAlign:'center'
    }
}