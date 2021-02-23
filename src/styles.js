import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  avatar: {
    alignSelf: 'center',
    width: '190px',
    height: '190px',
    position: 'absolute',
    top: '10px'

  },
  socialMedia: {
    
  },
  [theme.breakpoints.down('sm')] :{
 mainContainer: {
    flexDirection :'column-reverse'
  }
 
  }
}));