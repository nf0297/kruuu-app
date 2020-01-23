import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class Partner extends Component {
    render (){
        return(
            <div>
                    <Image src={this.props.image} style={style.image}/>
            </div>
        )
    }
}

export default Partner

const style = {
    image: {
        width:'30vh',
        height:'7vw',
        margin:'3vh 0vw'
    }
}