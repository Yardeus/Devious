import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Header {...this.props} />
        )
    }


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    token: state.auth.token,
    type: state.auth.type
})

export default compose(
    connect(mapStateToProps, {})
)(HeaderContainer);
