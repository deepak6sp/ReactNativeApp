import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    height:60,
    borderBottomColor:"#666",
    borderBottomWidth:1
  },

  menu:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#333',
    borderRightColor:"#666",
    borderRightWidth:1,
    height:60,
  },
  menuText:{
    color:'#fff',
    textAlign:'center',
  },
  pageTitle:{
    flex:4,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#333',
  },
  pageTitleText:{
    color:'#fff'
  },
});
