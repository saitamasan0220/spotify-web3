import Image from 'next/image'

const styles = {
  header: `max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3 flex items-center`,
  iconContainer: `ml-10`,
  title: `text-6xl font-extrabold`,
  playlistTextContent: `flex items-end mt-10`
}

const Header = () => {
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
          {/* <UploadButton/> */}

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
    </div>
  )
}

export default Header