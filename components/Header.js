import Image from 'next/image'
import UploadButton from './UploadButton'
import { useContext } from 'react'
import { SpotifyContext } from '../context/context'

const styles = {
  header: `max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3 flex items-center`,
  iconContainer: `ml-10`,
  title: `text-6xl font-extrabold`,
  playlistTextContent: `flex items-end mt-10`,
  controlsContainer: `flex items-center mt-10`,
  playButton: `bg-green-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`
}

const Header = ({setShowUploadMusic}) => {

  const {currentSong} = useContext(SpotifyContext)
  return (
    <div className={styles.header}>
        <div className="flex items-center">
            <div className={styles.arrowButton}>
                <Image
                    src='/assets/chevronLeft.svg'
                    width={20}
                    height={20}
                    alt = 'left'
                />
            </div>
            <div className={styles.arrowButton}>
                <Image
                    src='/assets/chevronRight.svg'
                    width={20}
                    height={20}
                    alt = 'right'
                />
            </div>
        </div>

        <div className={styles.headerRight}>
          <UploadButton setShowUploadMusic={setShowUploadMusic}/>

          <div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
              <Image
                src='/assets/avatar.jpg'
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className={styles.playlistTextContent}>
        <Image
          alt=''
          src='https://angartwork.akamaized.net/webp/?id=150949021&size=296'
          width={220}
          height={220}
        />

        <div className='ml-5'>
          <div>Album</div>
          <div className={styles.title}>{currentSong.album}</div>
          <div className='flex items-center mt-5'>
            <div className={styles.profileAvatarContainer}>
              <Image 
                src='/assets/avatar.jpg'
                width={20}
                height={20}
                alt='artist' 
                className='rounded-full' />
            </div>
            <p>
              <span className='text-bold'>SteamBeats</span> • 2020 • 46 songs, 3
              hr 20 min
            </p>
          </div>
        </div>
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.playButton}>
          <img alt='' src='assets/play.svg' width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <img alt='' src='assets/heart.svg' width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <img alt='' src='assets/download.svg' width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <img alt='' src='assets/more.svg' width={30} height={30} />
        </div>
      </div>
      
    </div>
  )
}

export default Header