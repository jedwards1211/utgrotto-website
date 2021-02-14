import Image from 'next/image'

import * as React from 'react'
import * as styles from '../styles/Contact.module.css'

function ContactCard({ name, imageSrc, role, nssNumber, emailImgs = [] }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactImage}>
        <Image
          layout="responsive"
          height={750}
          width={750}
          src={imageSrc}
          alt={`Picture of ${name}`}
        />
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactRoleAndName}>
          <div className={styles.contactRole}>{role}:</div>
          <div className={styles.contactName}>{name}</div>
        </div>
        <div className={styles.nssNumber}>
          <a
            href="http://www.caves.org/"
            title="National Speleological Society"
          >
            NSS#
          </a>
          : {nssNumber}
        </div>
        <div className={styles.contactEmails}>
          {emailImgs.map((src) => (
            <Image layout="fixed" width={230} height={30} key={src} src={src} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Contact(props) {
  return (
    <div className={styles.contactsGrid}>
      <ContactCard
        role="President"
        name="Ethan Perrine"
        imageSrc="/images/contact.ethan.perrine.jpg"
        nssNumber={69792}
        emailImgs={['/images/email.president.png']}
      />
      <ContactCard
        role="Vice President"
        name="Eléonore Le Corvaisier"
        imageSrc="/images/contact.eleonore.lec.jpg"
        nssNumber={69513}
        emailImgs={['/images/email.vicepresident.png']}
      />
      <ContactCard
        role="Secretary/Treasurer"
        name="Grace Borengasser"
        imageSrc="/images/contact.grace.borengasser.jpg"
        nssNumber={57636}
        emailImgs={[
          '/images/email.secretary.png',
          '/images/email.treasurer.png',
        ]}
      />
      <ContactCard
        role="Webmaster"
        name="Andy Edwards"
        imageSrc="/images/contact.andy.edwards.jpg"
        nssNumber={65964}
        emailImgs={['/images/email.webmaster.png']}
      />
    </div>
  )
}
