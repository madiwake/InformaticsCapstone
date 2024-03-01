import React from "react";
import Navigation from './NavigationBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from "./Footer";

function FilterBar() {
    return (
        <div className="filterBar">
            <h2>Filter</h2>
            <ul className="filterBar-options">
                <li>
                    <button>
                        Support Groups
                        <img src="/img/plus-icon.png" alt="plus icon"/>
                    </button>
                </li>
                <li>
                    <button>
                        Therapy
                        <img src="/img/plus-icon.png" alt="plus icon"/>
                    </button>
                </li>
                <li>
                    <button>
                        Housing
                        <img src="/img/plus-icon.png" alt="plus icon"/>
                    </button>
                </li>
                <li>
                    <button>
                        Employment
                        <img src="/img/plus-icon.png" alt="plus icon"/>
                    </button>
                </li>
                <li>
                    <button className="last-button">
                        Clubs
                        <img src="/img/plus-icon.png" alt="plus icon"/>
                    </button>
                </li>
            </ul>
        </div>
    );
};

function Resources(props) {
    console.log(props.resourceType)
    return (
        <div className="resources">
            <h2>{props.resourceType}</h2>
            {props.resourceType}
        </div>
    )
}

export default function ResourcePage(props) {
    return (
        <div className="resourcePage">
            <Navigation pageTitle={'Resources'} />
            <div className="resourcePage-body">
                <Tabs
                    defaultActiveKey='UW Resources'
                    className="resource-type-tabs"
                >
                    <Tab 
                        eventKey="UW Resources" 
                        title="UW Resources"
                        className="resource-option-tab"
                    >
                        <div className="resourcePage-content-container">
                            <FilterBar />
                            <div className="resources">
                                <Resources resourceType={"UW Resources"} />
                            </div>
                        </div>
                    </Tab>
                    <Tab 
                        eventKey="Seattle Resources" 
                        title="Seattle Resources"
                        className="resource-option-tab"
                    >
                        <div className="resourcePage-content-container">
                            <FilterBar />
                            <div className="resources">
                                <Resources resourceType={"Seattle Resources"} />
                            </div>
                        </div>
                    </Tab>
                    <Tab 
                        eventKey="Online Resources" 
                        title="Online Resources"
                        className="resource-option-tab"
                    >
                        <div className="resourcePage-content-container">
                            <FilterBar />
                            <div className="resources">
                                <Resources resourceType={"Online Resources"} />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </div>
    )
}