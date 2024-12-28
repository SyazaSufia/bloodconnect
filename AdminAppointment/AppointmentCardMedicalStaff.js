import React from 'react';
import styles from './AppointmentCard.module.css';

export function AppointmentCardMedicalStaff({ name, onView }) {
  return (
    <article className={styles.appointmentCard}>
      <h3 className={styles.eventTitle}>{name}</h3>
      <button 
        className={styles.viewButton}
        onClick={onView}
        aria-label={`View details for ${name}`}
      >
        View
      </button>
    </article>
  );
}