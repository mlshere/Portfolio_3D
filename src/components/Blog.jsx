import { Head } from 'vite-react-ssg';

const topics = ['Ecommerce', 'Development', 'Data', 'Cloud'];

export default function Blog() {
  return (
    <div className="blog-grid min-h-screen bg-[#0b0c10] text-[#dedee4]">
      <Head>
        <title>Technical journal | Sherezade Maqueda</title>
        <meta name="description" content="A technical journal on ecommerce, development, data and cloud by Sherezade Maqueda. Articles coming soon." />
        <link rel="canonical" href="https://mlsherezade.com/blog/" />
        <meta property="og:title" content="Technical journal | Sherezade Maqueda" />
        <meta property="og:description" content="Notes on ecommerce, development, data and cloud. Articles coming soon." />
        <meta property="og:url" content="https://mlsherezade.com/blog/" />
        <meta name="twitter:title" content="Technical journal | Sherezade Maqueda" />
        <meta name="twitter:description" content="Notes on ecommerce, development, data and cloud. Articles coming soon." />
        <meta name="twitter:url" content="https://mlsherezade.com/blog/" />
      </Head>
      <a className="skip-link" href="#journal">Skip to journal</a>
      <header className="border-b border-white/20 bg-[#0b0c10]/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-12">
          <a href="/" className="font-mono text-sm hover:text-white">SHEREZADE MAQUEDA / JOURNAL</a>
          <a href="/" className="font-mono text-xs text-[#c5a6bd] hover:text-white">RETURN TO PORTFOLIO</a>
        </div>
      </header>
      <main id="journal" className="mx-auto max-w-7xl px-6 py-10 sm:px-12 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/20 pb-6">
          <div>
            <h1 className="font-mono text-3xl font-medium tracking-tight sm:text-4xl">Journal</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">
              Notes on ecommerce, code, data and cloud.
            </p>
          </div>
          <p className="font-mono text-xs text-secondary">Published entries: <span className="text-white">0</span></p>
        </div>
        <div className="mt-8 grid border border-white/20 bg-[#0b0c10] md:grid-cols-[180px_minmax(0,1fr)]">
          <aside className="border-b border-white/20 md:border-b-0 md:border-r">
            <h2 className="border-b border-white/20 px-4 py-3 font-mono text-xs text-secondary">Topics</h2>
            <ul className="font-mono text-xs">
              {topics.map((topic) => (
                <li key={topic} className="border-b border-white/10 px-4 py-4">{topic}</li>
              ))}
            </ul>
            <p className="px-4 py-5 text-xs leading-relaxed text-secondary">Topics planned for future entries.</p>
          </aside>
          <section aria-labelledby="index-title" className="min-w-0">
            <div className="flex items-center justify-between border-b border-white/20 px-4 py-3 font-mono text-xs">
              <h2 id="index-title">Article index</h2>
              <span className="text-secondary">0 records</span>
            </div>
            <table className="journal-table w-full table-fixed border-collapse font-mono text-xs">
              <caption className="sr-only">Published articles. No entries yet.</caption>
              <colgroup><col className="w-[12%]" /><col className="w-[43%]" /><col className="w-[23%]" /><col className="w-[22%]" /></colgroup>
              <thead>
                <tr className="bg-white/[0.03] text-secondary">
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="h-52 align-top">
                    <p className="mt-5 text-sm text-white">No articles published yet.</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-secondary">New entries will appear here.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="journal-empty-grid h-40 border-b border-white/10" aria-hidden="true" />
            <div className="flex flex-wrap justify-between gap-4 px-4 py-4 font-mono text-xs text-secondary">
              <span>Showing 0 of 0</span>
              <a href="/#work" className="text-[#c5a6bd] hover:text-white">View portfolio</a>
            </div>
          </section>
        </div>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/20 px-6 py-6 font-mono text-xs text-secondary sm:px-12">
        <p>Sherezade Maqueda</p>
        <p>Journal / Article index</p>
      </footer>
    </div>
  );
}
