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
      <main id="journal" className="mx-auto max-w-7xl px-6 py-12 sm:px-12 sm:py-20">
        <div className="grid border border-white/20 bg-[#0b0c10] lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <div className="p-6 sm:p-10">
            <p className="font-mono text-xs tracking-widest text-[#c5a6bd]">FIELD NOTES / 001</p>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Technical<br />journal.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
              A record of building, testing and learning. Practical notes on ecommerce,
              web development, data and cloud, with a focus on how things work.
            </p>
          </div>
          <dl className="grid grid-cols-2 border-t border-white/20 font-mono text-xs lg:grid-cols-1 lg:border-l lg:border-t-0">
            <div className="border-b border-white/20 p-6"><dt className="text-secondary">PUBLISHED</dt><dd className="mt-3 text-3xl">000</dd></div>
            <div className="border-b border-white/20 p-6"><dt className="text-secondary">STATUS</dt><dd className="mt-3 text-[#c5a6bd]">AWAITING FIRST ENTRY</dd></div>
            <div className="col-span-2 p-6 lg:col-span-1"><dt className="text-secondary">FOCUS</dt><dd className="mt-3 leading-relaxed">SYSTEMS / EXPERIMENTS / DATA</dd></div>
          </dl>
        </div>
        <section aria-labelledby="index-title" className="mt-12 border border-white/20 bg-[#0b0c10]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 p-6">
            <h2 id="index-title" className="font-mono text-sm">ARTICLE INDEX</h2>
            <span className="font-mono text-xs text-secondary">0 ENTRIES</span>
          </div>
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
            <aside className="border-b border-white/20 p-6 md:border-b-0 md:border-r">
              <h3 className="font-mono text-xs text-secondary">PLANNED TOPICS</h3>
              <ul className="mt-5 space-y-4 font-mono text-sm">
                {topics.map((topic, index) => <li key={topic}><span className="mr-3 text-secondary">0{index + 1}</span>{topic}</li>)}
              </ul>
            </aside>
            <div className="p-6 sm:p-10">
              <p className="font-mono text-xs text-[#c5a6bd]">INDEX EMPTY</p>
              <h3 className="mt-6 text-2xl font-medium">No articles published yet.</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-secondary">
                The first entry is still ahead. This index will grow with real project notes,
                technical explorations and lessons from experiments.
              </p>
              <a href="/#work" className="mt-8 inline-block border border-white/30 px-5 py-3 font-mono text-xs transition-colors hover:bg-white hover:text-black">
                EXPLORE CURRENT WORK
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/20 px-6 py-6 font-mono text-xs text-secondary sm:px-12">
        <p>INDEPENDENT NOTES / SHEREZADE MAQUEDA</p>
        <p>ECOMMERCE / DEVELOPMENT / DATA / CLOUD</p>
      </footer>
    </div>
  );
}
