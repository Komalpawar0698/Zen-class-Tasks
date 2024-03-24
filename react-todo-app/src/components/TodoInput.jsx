import React, {Component } from "react";

 TodoInput extends Component {
    render() { 
        return (
            <div className="card card-body">
                <form action="">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                        type="text"
                        name="title"
                        className="form-control text-capitalize"
                        placeholder="add todo item">
                        </input>
                    </div>
                    <div className="form-group form-check">
                        <input 
                        type="checkbox"
                        name="completed"
                        className="form-check-input">
                        </input>
                        <label className="form-check-label">completed</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}
export default class