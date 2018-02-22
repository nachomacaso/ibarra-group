import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Iframe from 'react-iframe';
import './Contact.css';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class ContactUs extends Component {
    state = {
        value: 13,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div className="Contact-wrapper">
                <div className="Contact-form">
                    <TextField floatingLabelText="First Name:"
                            errorText="This field is required"
                            floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Last Name:"
                            floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Address:"
                            floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Address 2:"
                            floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="City:"
                            floatingLabelFixed={true}/><br />
                    <TextField hintText="5 digits"
                            floatingLabelText="Zip Code:"
                            floatingLabelFixed={true}/><br />
                    <SelectField floatingLabelText="State:"
                                value={this.state.value}
                                onChange={this.handleChange}
                                style={{textAlign: "left"}}>
                        <MenuItem value={1} primaryText="AL" />
                        <MenuItem value={2} primaryText="AK" />
                        <MenuItem value={3} primaryText="AZ" />
                        <MenuItem value={4} primaryText="AR" />
                        <MenuItem value={5} primaryText="CA" />
                        <MenuItem value={6} primaryText="CO" />
                        <MenuItem value={7} primaryText="CT" />
                        <MenuItem value={8} primaryText="DE" />
                        <MenuItem value={9} primaryText="FL" />
                        <MenuItem value={10} primaryText="GA" />
                        <MenuItem value={11} primaryText="HI" />
                        <MenuItem value={12} primaryText="ID" />
                        <MenuItem value={13} primaryText="IL" />
                        <MenuItem value={14} primaryText="IN" />
                        <MenuItem value={15} primaryText="IA" />
                        <MenuItem value={16} primaryText="KS" />
                        <MenuItem value={17} primaryText="KY" />
                        <MenuItem value={18} primaryText="LA" />
                        <MenuItem value={19} primaryText="ME" />
                        <MenuItem value={20} primaryText="MD" />
                        <MenuItem value={21} primaryText="MA" />
                        <MenuItem value={22} primaryText="MI" />
                        <MenuItem value={23} primaryText="MN" />
                        <MenuItem value={24} primaryText="MS" />
                        <MenuItem value={25} primaryText="MO" />
                        <MenuItem value={26} primaryText="MT" />
                        <MenuItem value={27} primaryText="NE" />
                        <MenuItem value={28} primaryText="NV" />
                        <MenuItem value={29} primaryText="NH" />
                        <MenuItem value={30} primaryText="NJ" />
                        <MenuItem value={31} primaryText="NM" />
                        <MenuItem value={32} primaryText="NY" />
                        <MenuItem value={33} primaryText="NC" />
                        <MenuItem value={34} primaryText="ND" />
                        <MenuItem value={35} primaryText="OH" />
                        <MenuItem value={36} primaryText="OK" />
                        <MenuItem value={37} primaryText="OR" />
                        <MenuItem value={38} primaryText="PA" />
                        <MenuItem value={39} primaryText="RI" />
                        <MenuItem value={40} primaryText="SC" />
                        <MenuItem value={41} primaryText="SD" />
                        <MenuItem value={42} primaryText="TN" />
                        <MenuItem value={43} primaryText="TX" />
                        <MenuItem value={44} primaryText="UT" />
                        <MenuItem value={45} primaryText="VT" />
                        <MenuItem value={46} primaryText="VA" />
                        <MenuItem value={47} primaryText="WA" />
                        <MenuItem value={48} primaryText="WV" />
                        <MenuItem value={49} primaryText="WI" />
                        <MenuItem value={50} primaryText="WY" />
                    </SelectField><br/>
                    <TextField floatingLabelText="Daytime Phone:"
                               floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Evening Phone:"
                               floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Email:"
                               errorText="This field is required"
                               floatingLabelFixed={true}/><br />
                    <TextField floatingLabelText="Comments:"
                               errorText="This field is required"
                               multiLine={true}
                               rows={4}
                               style={{textAlign: "left"}}
                               floatingLabelFixed={true}/><br /><br />

                    <RaisedButton label="Submit" primary={true} style={{width: "256px"}}/>
                </div>
                <div className="Contact-details">
                    <h2 className="Contact-title">Ibarra Group LLC.</h2>            
                    <p className="Contact-address">
                        <span><i className="material-icons">home</i>
                        3100 S Homan Ave
                        <br/>Chicago, Illinois<br/>
                        </span>
                    <i className="material-icons">local_phone</i>(773) 650-0503</p>
                    <br />
                    <Iframe url="https://snazzymaps.com/embed/49266"
                            width="600px"
                            height="400px"
                            id="myId"
                            className="About-map"
                            display="initial"
                            position="relative"/>
                </div>
            </div>
        );
    }
}