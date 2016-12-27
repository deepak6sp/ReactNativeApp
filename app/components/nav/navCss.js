import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  navBar:{
    flex:1,
    flexDirection:'column',
    backgroundColor:"#333",
    position:'absolute',
    top:60,
    left:0,
    right:0,
    zIndex:1,
  },
  navBarLinks: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    borderBottomColor:"#666",
  },
  navBarLinksText:{
    color:'#fff',
    textAlign:'center',
  }
});
