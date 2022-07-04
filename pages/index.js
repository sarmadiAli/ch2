import Head from 'next/head'
import BaseImage from './../components/pic'
import Btn from '../components/btn'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.landing}>
    <div className={styles.container}>
    <div className={styles.avatar}>
      <BaseImage src={'https://s6.uupload.ir/files/sample_avatar_2mad.png'} />
      </div>
   <div>
        <Btn name='a' title={'مشاوره'} styleProp={{marginRight:'10px'}} />
        <Btn name='a' title={'دوره'}  />
   </div>
    </div>
    </div>
  )
}
