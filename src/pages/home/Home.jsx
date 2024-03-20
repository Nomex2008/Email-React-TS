import style from './Home.module.css'
import { EmailEditor } from "../../components/email-editor/EmailEditor";
import { EmailList } from "../../components/email-list/EmailList";

const Home = () => {
    return ( 
        <div className={style.home}>
            <EmailEditor/>
            <EmailList/>
        </div>
     );
}
 
export default Home;