import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 60,
      paddingHorizontal: 0,
      paddingVertical: 20,
      backgroundColor: '#4D4D4D',
      alignSelf: 'stretch',
      alignItems: 'center',
      elevation: 4
    },

    inputContainer: {
      width: '80%',
      alignItems: 'center',
      flexDirection: 'column'
    }
  })

  export default styles