import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = ({type}) => {
  let data;

  //temporary
  const amount=100
  const diff=20
  switch(type){
    case "user":
      data = {
        title:"USERS",
        isMoney:false,
        link: "See all users",
        icon:  <PersonOutlineOutlinedIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)",}}/>,
      };
      break;
      case "order":
        data = {
          title:"ORDERS",
          isMoney:false,
          link: "View all orders",
          icon:  <ShoppingCartOutlined className='icon' style={{color:"goldenrod",backgroundColor:"rgba(204, 192, 17, 0.2)",}}/>,
        };
        break;
        case "earning":
          data = {
            title:"EARNINGS",
            isMoney:true,
            link: "View net earnings",
            icon:  <MonetizationOnOutlined className='icon' style={{color:"green",backgroundColor:"rgba(47, 255, 0, 0.23)",}}/>,
          };
          break;
          case "balance":
            data = {
              title:"BALANCE",
              isMoney:true,
              link: "See details",
              icon:  <AccountBalanceWalletOutlined className='icon' style={{color:"purple",backgroundColor:"rgba(247, 11, 157, 0.16)",}}/>,
            };
            break;
      default:
        break;
      }
 
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
              <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %</div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget