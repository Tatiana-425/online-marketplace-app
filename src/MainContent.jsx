import React, {Component} from "react";

export default class MainContent extends Component
{
    state = {pageTitle: "Customers", customersCount: 5};
render()
{
    return <div>
        <h4 className="">{this.state.pageTitle}</h4>
        <span className="badge badge-primary m-2 badgestyle">
            {this.state.customersCount}
            </span>
            <span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </span>

    </div>
}
onRefreshClick(){
    console.log("Refresh Button was clicked");
}
}