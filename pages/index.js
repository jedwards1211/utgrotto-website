import Head from 'next/head'
import Image from 'next/image'
import Contact from '../src/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Underground Texas Grotto</title>
        <meta
          name="Description"
          content="The Underground Texas Grotto is a chapter of the National Speleological Society (NSS). This website includes its history, a calendar of events, training sessions and articles about safety and conservation. The Grotto is located in Austin, TX."
        />
        <meta
          namname="Keywords"
          content="caving, Austin, Texas, grotto, caves, rope, rope night, srt, airman's cave, airmen's cave, airmans, whirlpool cave, maple run cave"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            src="/logo.jpg"
            layout="intrinsic"
            width="441"
            height="73"
            alt="Underground Texas Grotto"
          />
        </h1>

        <p className={styles.p}>
          The Underground Texas Grotto (UTG) is a 501(c)(3) non-profit from the
          Austin area that explore caves in Central Texas and beyond, keeping
          alive traditions from 1951. Members range from raw beginners and
          occasional cavers to hard core international expedition cavers. All
          community members interested in caves and caving are welcome.
        </p>

        <h2 className={styles.subheading}>Meetings</h2>

        <p className={styles.p}>
          Before the pandemic, we were meeting biweekly in person, but we're
          still meeting virtually! Meetings are currently held online via Zoom.
          See{' '}
          <a href="https://www.facebook.com/groups/utgrotto/">
            our facebook page
          </a>{' '}
          for Zoom links.
        </p>

        <p className={styles.p}>
          Meetings feature accounts of recent caving expeditions, slide shows,
          and a chance to sign up for caving trips and training sessions.
        </p>

        <h2 className={styles.subheading}>Join Us</h2>

        <p className={styles.p}>
          To become an official member of the grotto, please fill out{' '}
          <a href="https://goo.gl/forms/UndMeFNq5DbmD3bp1">this form</a>.
          Recommended dues are $2 for first-year cavers and $10 for all others.
          Dues are paid directly to the Treasurer, in cash and in person.
        </p>

        <h2 className={styles.subheading}>Members</h2>

        <p className={styles.p}>
          <a href="https://forms.gle/FA9rXUR2sSwcByeh9">
            Update your contact information
          </a>
        </p>

        <h2 className={styles.subheading}>Calendar</h2>

        <p className={styles.p}>
          The UT Grotto uses{' '}
          <a href="http://www.google.com/calendar/">Google Calendar</a> to store
          its events. If you already have a Google E-mail address or other
          Google account, you can add the UT Grotto calendar view to your own
          calendar account.
        </p>

        <iframe
          id="calendar"
          src="http://www.google.com/calendar/embed?src=k6qu7co0cu3ismbpckbclo3h1k%40group.calendar.google.com&ctz=America/Chicago&showTitle=0&showCalendars=0"
          style={{ border: 0 }}
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
        />

        <h2 className={styles.subheading}>Contact</h2>

        <p className={styles.p}>
          P. O. Box 7672
          <br />
          Austin, TX 78713
          <br />
        </p>

        <Contact />
      </main>
    </div>
  )
}
