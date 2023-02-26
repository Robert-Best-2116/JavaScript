import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  

    // Set Errors 
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    // Validations
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        } else {
            setEmailError("");
        }

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 2) {
            setPasswordError("Password must be 2 characters or longer!");
        } else {
            setPasswordError("");
        }

    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    // Create User
    const createUser = (e) => {
        
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p> {firstNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p> {lastNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ handleEmail } />
                {
                    emailError ?
                    <p> {emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePassword } />
                {
                    passwordError ?
                    <p> {passwordError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p> {confirmPasswordError}</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        
    );
};
    
export default UserForm;