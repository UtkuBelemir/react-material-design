/**
 * Created by Utku on 25/03/2017.
 */
import React, {PropTypes} from 'react';
import '@material/textfield/dist/mdc.textfield.css'
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield';
import generateId from '../../utils/generateId';
import './TextField.css'
import classNames from 'classnames';
export default class TextField extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string,
        error: PropTypes.string,
        floatingLabel: PropTypes.bool,
        helpText: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        onChange : PropTypes.bool,
    }
    copmonentWillMount() {
        this.textFieldId = generateId();
    }
    componentDidMount() {
        MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
    }

    render() {
        const {label, error, floatingLabel, helpText, placeholder, ...rest} = this.props;
        console.log('Float', floatingLabel)
        const inputClass = classNames("mdc-textfield__input", {
            "placeholderClass": !!floatingLabel && placeholder,
        });
        const helpTextClass = classNames("mdc-textfield-helptext mdc-textfield-helptext--persistent", {
            "mdc-textfield-helptext--validation-msg": error
        });
        return (
            <div>
                <div className={"mdc-textfield"}>
                    <input className={inputClass} id={this.textFieldId}
                           {...rest}
                           placeholder={!floatingLabel ? label : placeholder}/>
                    { !!floatingLabel &&
                    <label htmlFor={this.textFieldId} className="mdc-textfield__label">{label}</label>}
                </div>
                { (helpText || error) && <p className={helpTextClass} id={this.textFieldId}>
                    {!error ? helpText : error}
                </p>}
            </div>
        )
    }
}
/*
 import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
state = {
 rootClasses : new ImmutableSet()
 }
 import {MDCTextfieldFoundation} from '@material/textfield/dist/mdc.textfield';
 foundation = MDCTextfieldFoundation({
 addClass: className => this.setState(prevState => ({
 classes: prevState.rootClasses.add(className)
 })),
 removeClass: className => this.setState(prevState => ({
 classes: prevState.rootClasses.remove(className)
 })),
 })*/
//mdc-textfield-helptext--validation-msg