import React, { Component } from "react";
import { reduxForm } from "redux-form";

class SurveyForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Survey Form</h2>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
