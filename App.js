/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={styles.banner}
                        source={require('./assets/img/bg.jpg')}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1,
    },
});

export default App;
