import React from 'react';
import PropTypes from 'prop-types'
import '../styles/homepage.css'
import Tab from "./Tab";

class TabGroup extends React.Component{
    constructor(props) {
        super(props);
        TabGroup.propTypes = {
            tabs: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                })
            ).isRequired,
        };

        TabGroup.defaultProps = {

        };
    }

    render() {
        const { tabs, } = this.props;
        return (
            <div>
                {tabs.map((tab) => (
                    <Tab/>
                ))}
            </div>
        );
    }
}

export default TabGroup;