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
    Text,
    ScrollView,
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
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Qué hacer en Paris
                    </Text>
                    <ScrollView
                        horizontal
                    >
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad1.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad3.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad4.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad5.jpg')}
                            />
                        </View>
                    </ScrollView>
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
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20,
    },
    container: {
        marginHorizontal: 10,
    },
    city: {
        width: 250,
        height: 300,
        marginRight: 10,
    },
});

export default App;
