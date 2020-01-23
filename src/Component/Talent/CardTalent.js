import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class CardTalent extends Component {
    render(){
        return(
            <div>
                    <Card style={style.group}>
                        <Image src={this.props.image} style={{width:'40vw', height:'40vh'}}/>
                        <Card.Content style={style.card}>
                            <Card.Header style={style.cardText}>{this.props.name}</Card.Header>
                            <Card.Description style={style.cardText}>{this.props.occupation}</Card.Description>
                        </Card.Content>
                    </Card>
            </div>
        )
    };
}

export default CardTalent;

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
    }

}