import React, {Component} from 'react';
import {Button, Icon, Container, Input} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render(){
        return(
            <div className='header-container' style={style.background}>
                <Container style={style.container}>
                    <Link to='/'>
                    <Icon size='big' name='stop' style={style.icon}/>
                    <label style={style.title}>KRUUU</label>
                    </Link>
                    <Input type='text' action>
                        <input/>
                        <Button type='submit' icon='search' color='teal'></Button>
                    </Input>
                    <label style={style.text}>Core</label>
                    <label style={style.text}>Talents</label>
                    <label style={style.text}>Jobs</label>
                    <label style={style.text}>Projects</label>
                    <label style={style.text}>Accomodations</label>
                    <Button style={style.button}>Login</Button>
                    <Button color='teal' style={style.button}>Sign Up</Button>
                </Container>
            </div>
        )
    };
}

const style = {
    icon: {
        color:'#fff',
        marginBottom: '1vh'
    },
    container: {
        padding:'3vh 0vw',
        alignText: 'center'
    },
    background: {
        backgroundColor:'#222324',
        height:'10%',
        
    },
    text: {
        color:'#fff',
        fontSize:'20px',
        margin:'0vh 1vw'
    },
    button: {
        margin:'0vh 1vw'
    },
    title: {
        color:'#fff',
        fontSize:'25px',
        padding:'0vh 1vw 0vh 0vw',
    }
}