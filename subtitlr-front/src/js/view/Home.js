import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import VideoPlayer from 'awesome-react-native-video-controls';

// import { Video } from 'expo';

// import VideoPlayer from 'awesome-react-native-video-controls';


export default class Home extends React.Component {
    render() {
        // Better to use NavigatorOS, see: https://facebook.github.io/react-native/docs/navigation.html#react-navigation
        const { navigate } = this.props.navigation;

        const subtitles = [{
            "startTime": "00:00:04,123", //hh:mm:ss,SSS
            "endTime": "00:00:05,001",
            "text": "When you convert your subtitle file, you might need to modify your JSON"
        },
        {
            "startTime": "00:00:08,008",
            "endTime": "00:00:09,876",
            "text": "Before passing it to the VidePlayer component"
        }];

        var styles = StyleSheet.create({
            backgroundVideo: {
                position: 'relative',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: 100
            },
        });


        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Text>Home 8</Text>
                <VideoPlayer
                    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4', mainVer: 1, patchVer: 0 }}
                    paused
                />
            </View>
        );
    }
}