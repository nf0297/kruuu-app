import React, {Component} from 'react'
import {Card, Image, Input} from 'semantic-ui-react'

class TopTalent extends Component {
    render(){
        return(
            <div>
                    <Card style={style.group}>
                        <Image style={{width:'40vw', height:'40vh'}} src={this.props.image}/>
                        <Card.Content style={style.card}>
                                <Card.Header style={style.cardText}>{this.props.name}</Card.Header>
                                <Card.Description style={style.cardText}>{this.props.occupation}</Card.Description>
                        </Card.Content>
                        <Image style={style.medal} src='https://i.ya-webdesign.com/images/medal-drawing-cartoon-1.png'/>
                    </Card>    
            </div>
        )
    };
}

export default TopTalent

const style = {
    card: {
        textAlign:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        opacity:'0.9',
        marginTop:'-25%',
    },
    cardText: {
        color:'#fff'
    },
    group: {
        margin:'3vh 1vw'
    },
    image: {
        width:'291px',
        height:'291px'
    },
    medal: {
        position: 'absolute',
        width:'25%',
        height:'25%',
        left:'75%',
        marginTop:'75%'

    }


}