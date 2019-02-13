import React, {Component} from 'react';

class App extends Component {

    state = {
        language: 'english'
    }

    render() {
        console.log(this.state);
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i className="flag us" onClick={() => this.setState({ language: 'english' })} />
                    <i className="flag es" onClick={() => this.setState({ language: 'spanish' })} />
                </div>
            </div>
        );
    }
}

export default App;