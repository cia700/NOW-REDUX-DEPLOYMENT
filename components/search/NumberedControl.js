import React, { Component } from "react";
import {
    classNames,
    FormGroup,
    FormFeedback,
    Input
} from "../../Imports";

import dynamic from "next/dynamic";
const Select = dynamic(import("react-select"), {
    ssr: false,
    loading: () => (
        <select>
            <option value="" hidden>
                loading...
            </option>
        </select>
    )
});

class NumberedControl extends Component {
    render = () => {
        return (
            <FormGroup className="mb-0">
                <div className={classNames("numbered-control", { 
                            "is-invalid": this.props.isInvalid
                        })}                    
                >
                    <p>{this.props.number}</p>
                    {this.props.input ? (
                        <Input
                            placeholder={
                                this.props.placeholder || "Select a value..."
                            }
                            onChange={this.props.onChange}
                            value={this.props.value}
                        />
                    ) : (
                        <Select
                            placeholder={
                                this.props.placeholder || "Select a value..."
                            }
                            options={this.props.options}
                            onChange={this.props.onChange}
                            value={this.props.value}
                            isLoading={this.props.isLoading}
                        />
                    )}
                </div>
                <FormFeedback>This field is required.</FormFeedback>
            </FormGroup>
        );
    };
}


export default NumberedControl;
