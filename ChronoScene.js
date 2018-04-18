import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ChronoScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.picture}
            source={{uri: 'https://cdn.discordapp.com/attachments/172172111622832128/435260296928559104/dean.png'}}
            resizeMode = 'cover'
        />
        <View style={styles.recRow}>
            <View style={styles.whiteRec}/>
            <View style={[styles.whiteRec, {marginRight: 10}]}/>
            <View>
                <View style={styles.whiteCir}/>
                <View style={styles.whiteCir}/>
            </View>
            <View style={[styles.whiteRec, {marginLeft: 10}]}/>
            <View style={styles.whiteRec}/>
        </View>
        <View style={styles.godButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  whiteRec: {
    backgroundColor: 'white',
    width: 50,
    height: 100,
    marginHorizontal: 5,
  },
  recRow: {
    flexDirection: 'row',
  },
  whiteCir: {
    backgroundColor: 'white',
    width: 26,
    height: 26,
    borderRadius: 13,
    marginTop: 15,
  },
  godButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  picture: {
    width: 150,
    height: 150,
  }

});
