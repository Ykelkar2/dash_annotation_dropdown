import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defaultProps, propTypes} from '../components/DashAnnotationDropdown.react';
import DropdownTreeSelect from 'react-dropdown-tree-select'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashAnnotationDropdown extends Component {
    render() {
        const {id, setProps, data} = this.props;
        // data = {
        //     label: 'search me',
        //     value: 'searchme',
        //     children: [
        //       {
        //         label: 'search me too',
        //         value: 'searchmetoo',
        //         children: [
        //           {
        //             label: 'No one can get me',
        //             value: 'anonymous',
        //           },
        //         ],
        //       },
        //     ],
        //   }
        // const onChange = (currentNode, selectedNodes) => {
        //     console.log('onChange::', currentNode, selectedNodes)
        //   };
        //   const onAction = (node, action) => {
        //     console.log('onAction::', action, node)
        //   };
        //   const onNodeToggle = currentNode => {
        //     console.log('onNodeToggle::', currentNode)
        //   };
        //   const assignObjectPaths = (obj, stack) => {
        //     Object.keys(obj).forEach(k => {
        //       const node = obj[k];
        //       if (typeof node === "object") {
        //         node.path = stack ? `${stack}.${k}` : k;
        //         assignObjectPaths(node, node.path);
        //       }
        //     });
        //   };

        //   assignObjectPaths(data);

        return (
            <div id={id}>

                <DropdownTreeSelect data={data}
                />
                <input
                    data={data}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ data: e.target.data })
                    }
                />
            </div>
        );
    }
}


DashAnnotationDropdown.defaultProps = defaultProps;
DashAnnotationDropdown.propTypes = propTypes;