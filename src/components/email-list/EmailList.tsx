import { useQuery } from '@tanstack/react-query';
import { emailService } from '../../services/email.service';
import styles from './EmailList.module.scss'

export function EmailList() {
    const {data} = useQuery({
        queryKey: ['email list'],
        queryFn: (() => emailService.getEmails())
    })

    return ( 
        <div className={styles.list}>
            {data?.map(email => (
                <div key={email.text}>
                    {email.text}
                </div>
            ))}
        </div> 
    );
}