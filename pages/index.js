import Head from 'next/head'
import Image from 'next/image'
import Contact from '../src/Contact'
import styles from '../styles/Home.module.css'
import obfuscateEmail from '../src/obfuscateEmail'

function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.subheading}>{title}</h2>
      {children}
    </>
  )
}

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

        <Section title="Meetings">
          <p className={styles.p}>
            Our meetings allow for hybrid attendance in person or via Zoom.
            Events, trips, and meeting links are posted on{' '}
            <a href="https://www.facebook.com/groups/utgrotto/">
              our facebook page
            </a>
            .
          </p>

          <p className={styles.p}>
            <span
              dangerouslySetInnerHTML={{
                __html: `<a href="${obfuscateEmail(
                  `mailto:president@utgrotto.org?subject=${encodeURIComponent(
                    'Meeting Info'
                  )}&body=${encodeURIComponent(
                    'Please notify me about upcoming meetings.'
                  )}`
                )}">Email us</a>`,
              }}
            />
            <a
              href={`mailto:president@utgrotto.org?subject=${encodeURIComponent(
                'Meeting Info'
              )}&body=${encodeURIComponent(
                'Please notify me about upcoming meetings.'
              )}`}
            >
              Email us
            </a>{' '}
            to be notified about upcoming meetings.
          </p>

          <p className={styles.p}>
            Meetings feature accounts of recent caving expeditions, slide shows,
            and a chance to sign up for caving trips and training sessions.
          </p>
        </Section>

        <Section title="Join Us">
          <p className={styles.p}>
            To become an official member of the grotto, please fill out{' '}
            <a href="https://goo.gl/forms/UndMeFNq5DbmD3bp1">this form</a>.
            Recommended dues are $2 for first-year cavers and $10 for all
            others. Dues are paid directly to the Treasurer, in cash and in
            person.
          </p>
        </Section>

        <Section title="Members">
          <p className={styles.p}>
            <a href="https://forms.gle/FA9rXUR2sSwcByeh9">
              Update your contact information
            </a>
          </p>
        </Section>

        <Section title="Contact">
          <p className={styles.contactAddress}>
            P. O. Box 7672
            <br />
            Austin, TX 78713
            <br />
          </p>

          <Contact />
        </Section>
      </main>
    </div>
  )
}
