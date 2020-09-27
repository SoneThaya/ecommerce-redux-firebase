import React, { Component } from "react";
import "./styles.scss";

import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";

const initialState = {
  email: "",
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  render() {
    const { email } = this.state;

    const configAuthWrapper = {
      headline: "Email Password",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
            />
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
