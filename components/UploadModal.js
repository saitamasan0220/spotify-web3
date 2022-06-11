import styles from '../styles/UploadModal.module.css'

const styles = {

}

const UploadModal = (
    title,
    musicUrl,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
    newMusic,
) => {
  return (
    <div className={styles.inputFiled}>
        <div className={styles.inputTitle}>
            Music Url
        </div>
        <div className={styles.inputContainer}>
            <input 
                className={styles.input}
                type='text'
                value={musicUrl}
                onChange={e=> setMusicUrl(e.target.value)}
            />
        </div>

        <div className={styles.modalButtons}>
            <button 
                onClick={() => setShowUploadMusic(false)}
                className={`${styles.button} ${styles.cancelButton}`}
            >
                Cancel
            </button>
            <button 
                onClick={newMusic}           
                className={`${styles.button} ${styles.createButton}`}
            >
                Create New
            </button>
        </div>
    </div>
  )
}

export default UploadModal