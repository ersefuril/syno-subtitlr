import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Video } from 'expo';

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

        return (
            <View>
                <Text>Home</Text>
                <Video
                    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    resizeMode="cover"
                    useNativeControls
                    style={{ width: "100%", height: 300 }}
                />
            </View>
        );
    }
}