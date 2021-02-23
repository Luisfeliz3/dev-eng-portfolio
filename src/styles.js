import { makeStyles } from '@material-ui/core/styles';
import imagry from '../src/images/nyc-backdrop.jpg'
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  mainContainer: {
 
  

  },
  [theme.breakpoints.down('sm')] :{
 mainContainer: {
    flexDirection :'column-reverse'
  }
 
  }
}));