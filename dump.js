import React, {useRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DownloadData } from '../../../utility/types';


interface Props {
  showDownload: boolean;
  setShowDownload: React.Dispatch<React.SetStateAction<boolean>>;
  toDownload: DownloadData | null;
}

export default function DownloadReciept({showDownload: boolean, setShowDownload: React.Dispatch<React.SetStateAction<boolean>>, toDownload: DownloadData}) {
    const viewShotRef = useRef(null);


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 99999999999,
      },
      closeButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      modalContent: {
        maxWidth: 450,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 30,
        width: '50%',
        height: 'auto', // or '100%'
        position: 'relative',
      },
      title: {
        marginBottom: 30,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'ui-semi', // Use appropriate font family
      },
      infoContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 23,
      },
      successIcon: {
        width: 95,
        height: 95,
        backgroundColor: 'rgba(110, 62, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      pendingIcon: {
        width: 95,
        height: 95,
        backgroundColor: 'rgba(255, 204, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
    
  return (
    <View style={styles.container} ref={viewShotRef}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setShowDownload(false)}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Transaction Detail</Text>
        <View style={styles.infoContainer}>
          {toDownload?.status === 'success' ? (
            <View style={styles.successIcon}>
              {/* Replace this with your success icon */}
            </View>
          ) : toDownload?.status === 'incomplete' || toDownload?.status === 'pending' ? (
            <View style={styles.pendingIcon}>
              {/* Replace this with your pending/incomplete icon */}
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )
}


