import kolamImage from '../../assets/kolam.png';
import styles from './KolamDecoration.module.css';

export function KolamDecoration() {
  return (
    <div className={styles.kolamContainer}>
      {/* Top Right Kolam - Partially visible from right edge */}
      <div className={styles.topRight}>
        <img src={kolamImage} alt="" className={styles.kolamImageLarge} />
      </div>

      {/* Bottom Left Kolam - Partially visible from left edge */}
      <div className={styles.bottomLeft}>
        <img src={kolamImage} alt="" className={styles.kolamImageLarge} />
      </div>
    </div>
  );
}
