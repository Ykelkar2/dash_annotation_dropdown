import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DashAnnotationDropdown as RealComponent } from '../LazyLoader';
import ReactDOM from 'react-dom'



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


export default class DashAnnotationDropdown extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props}/>
            </React.Suspense>
        );
    }
}

const tagShape = {
  label: PropTypes.string
};
tagShape.children = PropTypes.arrayOf(PropTypes.shape(tagShape));

const tagPropTypes = PropTypes.shape(tagShape);

//const tagPropTypes = propTypes.shape({label: PropTypes.string, children:tagShape});

const nodeShape = {
    label: PropTypes.string,
    children: PropTypes.array
}


DashAnnotationDropdown.defaultProps = {};

DashAnnotationDropdown.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The data for the annotation dropdown as a dictionary
     */
    data: PropTypes.array,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


export const defaultProps = DashAnnotationDropdown.defaultProps;
export const propTypes = DashAnnotationDropdown.propTypes;