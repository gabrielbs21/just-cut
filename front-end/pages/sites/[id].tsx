import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LoadingIcons from 'react-loading-icons';

import { api } from '../../services/api';

import styles from '../../styles/pages/Site.module.scss';

type SiteResponse = {
  id: string;
  reference: string;
  createdAt: Date;
}

const Site = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function handle() {
      const { data } = await api.get<SiteResponse>(`/sites/${id}`);
      let { reference } = data;

      if (reference) {
        if (!reference.startsWith('https://')) reference = `https://${reference}`;

        window.location.href = reference;
      }
    }

    handle();
  }, [id]);

  return (
    <div className={styles.sitePageWrapper}>
      <LoadingIcons.Oval height="5rem" />
    </div>
  );
};

export default Site;
