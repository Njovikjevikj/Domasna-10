import React from 'react';
import { connect } from 'react-redux';
import { SayHello, SayGoodbye } from './../actions/SayHelloActions';

class Hello extends React.Component {

    componentDidMount() {
        this.props.getGreeting();
        this.props.getGoodbye();
    }

    render() {
        return (
            <div id='hello'>
                <h2>{this.props.greeting}</h2>
                <h3>{this.props.goodbye}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.SayHelloReducer.greeting,
        goodbye: state.SayHelloReducer.goodbye // или state.SayHelloReducer.goodbye (зависно од името во редуцерот)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGreeting: () => dispatch(SayHello()),
        getGoodbye: () => dispatch(SayGoodbye())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
