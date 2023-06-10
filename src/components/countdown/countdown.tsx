import { useCountdown } from "../../hooks"
import styles from "./countdown.module.scss"
export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(
    "22 June 2023 12:00:00"
  )

  const countdown = [
    {
      id: 3,
      title: "Days",
      item: days,
    },
    {
      id: 2,
      title: "Hours",
      item: hours,
    },
    {
      id: 1,
      title: "Minutes",
      item: minutes,
    },
    {
      id: 0,
      title: "Seconds",
      item: seconds,
    },
  ].map((cd) => {
    return (
      <div
        className={styles.countdown__box__wrap}
        key={cd.id}
      >
        <div className={styles.countdown__box}>
          <span className={styles.countdown__text}>XX</span>
        </div>
        <span className={styles.countdown__title}>{cd.title}</span>
      </div>
    )
  })

  return <div className={styles.countdown__container}>{countdown}</div>
}
