import React from "react";
import { connect } from "react-redux";
import formField from "./formField";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewField = formField.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>

      {reviewField}

      <button
        className="yellow darken-3 white-text btn-flat"
        type="button"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}
export default connect(mapStateToProps, actions)(SurveyFormReview);
