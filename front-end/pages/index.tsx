import { FormEvent, useState } from 'react';

import type { NextPage } from 'next';

import { toast, Zoom } from 'react-toastify';
import { RiScissors2Fill } from 'react-icons/ri';

import LoadingIcons from 'react-loading-icons';
import styles from '../styles/pages/Home.module.scss';
import { api } from '../services/api';

type SiteResponse = {
  id: string;
  reference: string;
}

const Home: NextPage = () => {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCut(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    if (!link.trim()) {
      toast.error('Insira um link válido!', {
        position: 'top-center',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Zoom,
      });

      setLoading(false);

      return;
    }

    const { data: site } = await api.post<SiteResponse>('/sites', {
      reference: link,
    });

    toast.success('URL encurtada e copiada para sua área de transfêrencia com sucesso!', {
      position: 'top-center',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Zoom,
    });

    await navigator.clipboard.writeText(`http://localhost:3000/sites/${site.id}`);

    setLoading(false);
    setLink('');
  }

  return (
    <div className={styles.homePageWrapper}>
      <main>
        <div className={styles.homePageTitle}>
          <h1>JustCut</h1>
          <p>Encurta links facilmente</p>
        </div>

        <form onSubmit={handleCut} className={styles.cutForm}>
          <input
            id="url"
            name="url"
            type="text"
            placeholder="Insira a sua URL"
            onChange={(event) => setLink(event.target.value)}
            value={link}
          />

          <button type="submit">
            { loading ? (
              <LoadingIcons.Oval height="1.3rem" />
            ) : (
              <>
                <RiScissors2Fill size={16} />
                Encurtar
              </>
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
