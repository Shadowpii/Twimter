import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="shadowpii"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://www.instagram.com/sumit._.sambhal_lega/"}
                options={{ text: "reactjs is awesome", via: "shadowpii" }}
                />

            </div>

        </div>
    )
}

export default Widgets;
