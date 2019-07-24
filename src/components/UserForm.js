import React, { Component } from 'react';
import FormDetails from './FormDetails';
import FormPersonal from './FormPersonal';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }
    // proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //proceed to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handleFields Change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step, firstName, lastName, occupation, bio, email, city} = this.state;
        const values = {firstName, lastName, email, bio, city, occupation}
        switch (step){
            case 1:
                return (
                    <FormPersonal 
                      nextStep={this.nextStep}
                      handleChange={this.handleChange} 
                      values={values}
                    />
                )
            case 2:
                return (
                    <FormDetails
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success/>
                )
            default: 
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
