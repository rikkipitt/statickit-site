import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import { useViewer } from '../data/viewer';

const AuthControls = props => {
  const { data: viewer } = useViewer({ initialData: props.viewer });

  const endpoint =
    process.env.NODE_ENV === 'production'
      ? 'https://app.statickit.com'
      : 'http://localhost:4000';

  // Waiting on the request
  if (!viewer) return <></>;

  // User is not logged-in
  if (viewer === 'anonymous') {
    return (
      <>
        <a href={`${endpoint}/signin`} className="px-2">
          Sign In
        </a>
        <a href={`${endpoint}/signup`} className="ml-4 btn btn-sm">
          Sign Up
        </a>
      </>
    );
  }

  return (
    <a href={`${endpoint}/`} className="mx-4">
      <img src={viewer.avatarUrl} className="w-8 h-8 rounded-full shadow-md" />
    </a>
  );
};

export default props => {
  return (
    <header className="mx-auto container px-6 py-4">
      <div className="flex items-center h-10">
        <div className="flex-grow">
          <Link href="/">
            <a className="flex items-center">
              <Logo inverted={props.inverted} />
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex items-center justify-end font-semibold text-gray-600 text-sm">
          <Link href="/docs">
            <a className="px-2">Docs</a>
          </Link>

          <Link href="/pricing">
            <a className="px-2">Pricing</a>
          </Link>

          <AuthControls viewer={props.viewer} />
        </div>
      </div>
    </header>
  );
};
