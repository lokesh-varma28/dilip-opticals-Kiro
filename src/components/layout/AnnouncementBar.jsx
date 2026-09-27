import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export function AnnouncementBar() {
  const { announcement } = siteConfig.brand;

  if (!announcement || !announcement.enabled) {
    return null;
  }

  return (
    <aside className="announcement-bar" role="complementary" aria-label="Store announcement">
      <div className="container announcement-content">
        <span className="announcement-tag">{announcement.tag}</span>
        <span className="announcement-divider" aria-hidden="true" />
        <span className="announcement-message">{announcement.text}</span>
        {announcement.actionText && announcement.actionUrl && (
          <Link to={announcement.actionUrl} className="announcement-cta">
            {announcement.actionText}
            <span aria-hidden="true"> →</span>
          </Link>
        )}
      </div>
    </aside>
  );
}

export default AnnouncementBar;
