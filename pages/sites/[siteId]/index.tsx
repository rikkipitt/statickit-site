import React from 'react';
import Header from 'components/Header';
import HeadMatter from 'components/HeadMatter';
import CodeBlock from 'components/CodeBlock';
import useViewerData from 'components/useViewerData';
import useSiteData from 'components/useSiteData';
import Error from 'next/error';
import Link from 'next/link';
import { useDefaultSite } from 'utils/default-site';
import { useAuthRequired } from 'utils/auth';
import { useRouter } from 'next/router';
import { stripIndent } from 'common-tags';
import QuickLinks from 'components/QuickLinks';

const firstDeploy = token => stripIndent`
npm i -g @statickit/cli
statickit init
statickit deploy -k ${token}
`;

const BlankSlate = ({ site }) => {
  return (
    <div className="mx-auto container px-6 py-12">
      <div className="mx-auto max-w-2xl text-gray-500">
        <div className="py-16">
          <h2 className="pb-4 text-2xl font-semibold text-gray-300 tracking-snug">
            Your site is ready to configure!
          </h2>
          <p className="pb-4 leading-relaxed">
            From your command line,{' '}
            <code className="inline-code-inverse">cd</code> into your project
            directory and run these commands to install the CLI, generate a
            config file, and deploy it to StaticKit:
          </p>

          <div className="pb-4">
            <CodeBlock className="language-shell">
              {firstDeploy(site.deployKey).trim()}
            </CodeBlock>
          </div>

          <p>
            <Link href="/docs">
              <a className="text-indigo-500 font-bold">
                Learn more about configuration &rarr;
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const FormItem = ({ site, form }) => {
  let submissionLabel: string;

  if (form.submissionCount == 0) {
    submissionLabel = 'No submissions yet';
  } else if (form.submissionCount == 1) {
    submissionLabel = '1 submission';
  } else {
    submissionLabel = `${form.submissionCount} submissions`;
  }

  return (
    <Link
      href="/sites/[siteId]/forms/[formId]"
      as={`/sites/${site.id}/forms/${form.id}`}
    >
      <a className="block w-full lg:w-1/2 p-3">
        <div className="flex px-5 py-4 bg-gray-800 hover:bg-gray-700 hover:bg-transition rounded-lg shadow-lg">
          <div className="flex-grow min-w-0">
            <h3 className="pb-1 text-lg font-semibold text-gray-300 tracking-snug truncate">
              {form.name}
            </h3>
            <p className="text-sm text-gray-500">{submissionLabel}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="font-bold text-gray-600">&rarr;</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

const MainContent = ({ siteData }) => {
  if (!siteData) return <div className="h-32"></div>;
  if (siteData.status !== 'ok') return <></>;

  const site = siteData.site;
  const forms = site.forms.edges.map(edge => edge.node);

  if (forms.length == 0) {
    return <BlankSlate site={siteData.site} />;
  }

  return (
    <div className="mx-auto container px-3 pt-12 pb-16">
      <div className="sm:flex">
        <div className="flex-shrink-0 sm:w-56 px-3 py-3 pb-3">
          <h2 className="pb-1 text-xl font-semibold text-white">Forms</h2>
          <p className="text-sm text-gray-600">
            The form resources you&rsquo;ve configured for your site.
          </p>
        </div>
        <div className="sm:flex-grow flex flex-wrap">
          {forms.map(form => (
            <FormItem key={form.id} site={site} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
};

const pageTitle = siteData => {
  if (!siteData || !siteData.site) return 'Site';
  return siteData.site.name;
};

function SitePage() {
  const router = useRouter();
  const { data: viewerData } = useViewerData();
  const { data: siteData } = useSiteData(router.query.siteId as string);

  useAuthRequired(viewerData);
  useDefaultSite(siteData);

  if (siteData && siteData.status === 'notFound') {
    return <Error statusCode={404} />;
  }

  return (
    <main className="bg-gray-900 h-full">
      <HeadMatter title={pageTitle(siteData)} description={''} />
      <Header inverted={true} viewerData={viewerData} siteData={siteData} />
      <MainContent siteData={siteData} />
    </main>
  );
}

export default SitePage;
