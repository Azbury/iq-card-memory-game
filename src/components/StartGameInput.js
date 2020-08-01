import React, { Component } from 'react';
import React, { Component } from 'react';

class StartGameInput extends Component {
    render () {
        return (
            <div>
                <form>
                    
                </form>
            </div>
        )
    }
}

//button to start the game, this will have a handleSubmit function that will load the cards to the state.
//the cards will be put together and shuffled in here and then sent to the state to be rendered in that order.
//that way each time the cards are rendered they are rendered in the right order because the order is coming from the store
//each time