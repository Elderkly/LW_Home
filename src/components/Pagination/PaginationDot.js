import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    root: {
        height: 18,
        width: 18,
        cursor: 'pointer',
        border: 0,
        background: 'none',
        padding: 0,
        marginRight:38
    },
    dot: {
        backgroundColor: '#DBDAE2',
        height: 18,
        width: 18,
        borderRadius: 9,
        margin: 3,
    },
    active: {
        backgroundColor: '#A1A0AB',
    },
};

class PaginationDot extends React.Component {
    handleClick = event => {
        this.props.onClick(event, this.props.index);
    };

    render() {
        const { active } = this.props;

        let styleDot;

        if (active) {
            styleDot = Object.assign({}, styles.dot, styles.active);
        } else {
            styleDot = styles.dot;
        }

        return (
            <button type="button" style={styles.root} onClick={this.handleClick}>
                <div style={styleDot} />
            </button>
        );
    }
}

PaginationDot.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PaginationDot;
