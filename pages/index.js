import BaseImage from './../components/pic'
import ButtonCh2 from '../components/button'
import styles from '../styles/Home.module.css'
import ThemeLink from '../components/ThemeLink/ThemeLink'

export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <BaseImage src={'https://s6.uupload.ir/files/sample_avatar_2mad.png'} />
        </div>
        <div>
          <ThemeLink href='register'>
            <ButtonCh2 name='a' title={'مشاوره'} styleProp={{ marginRight: '10px' }} />
          </ThemeLink>
          <ButtonCh2 name='a' title={'دوره'} />
        </div>
      </div>
    </div>
  )
}
