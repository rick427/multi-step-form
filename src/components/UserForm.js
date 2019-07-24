import React, { Component } from 'react';
import FormDetails from './FormDetails';

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

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handleFields Change
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {step, firstName, lastName, occupation, bio, email, city} = this.state;
        const values = {firstName, lastName, email, bio, city, occupation}
        switch (step){
            case 1:
                return (
                    <FormDetails 
                      nextStep={this.nextStep} 
                      handleChange={this.handleChange} 
                      values={values}
                    />
                )
            case 2:
                return <h1>FormPersonal</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
